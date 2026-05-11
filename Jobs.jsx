import React, { useEffect, useState } from 'react';
import { API_BASE } from '../api';
import { jobListings as fallbackJobs } from '../data/businesses';

export default function Jobs({ user }) {
  const [jobs, setJobs] = useState(fallbackJobs);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    async function loadJobs() {
      try {
        const response = await fetch(`${API_BASE}/api/jobs`);
        if (response.ok) {
          const data = await response.json();
          setJobs(data);
        }
      } catch (error) {
        console.error('Failed to load jobs:', error);
      } finally {
        setLoading(false);
      }
    }

    loadJobs();
  }, []);

  const filteredJobs = filter === 'All' ? jobs : jobs.filter((job) => job.type === filter);

  const apply = (job) => {
    if (!user) {
      return alert('Please sign in to apply for jobs.');
    }
    alert(`Application sent to ${job.company}. Good luck, ${user.name}!`);
  };

  const types = ['All', ...new Set(jobs.map((job) => job.type))];

  return (
    <div style={{ padding: '40px 20px', maxWidth: '1100px', margin: '0 auto', minHeight: '100vh' }}>
      <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '14px', flexWrap: 'wrap' }}>
        <div>
          <h1 style={{ fontSize: '32px', margin: 0, color: '#102a43' }}>Jobs & Talent</h1>
          <p style={{ margin: '8px 0 0', color: '#576873' }}>Browse verified local roles, freelance gigs, and opportunities tailored for Ugandan professionals.</p>
        </div>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {types.map((type) => (
            <button key={type} onClick={() => setFilter(type)} style={{ padding: '10px 16px', borderRadius: '18px', border: filter === type ? '2px solid #004e89' : '1px solid #d9e2ec', background: filter === type ? '#e8f0ff' : '#fff', color: filter === type ? '#004e89' : '#546e7a', cursor: 'pointer', fontWeight: 700 }}>{type}</button>
          ))}
        </div>
      </div>

      {loading ? (
        <div style={{ padding: '40px', textAlign: 'center', color: '#627d98' }}>Loading job listings…</div>
      ) : (
        <div style={{ display: 'grid', gap: '18px' }}>
          {filteredJobs.map((job) => (
            <div key={job.id} style={{ background: '#fff', borderRadius: '24px', padding: '28px', boxShadow: '0 18px 45px rgba(16, 42, 67, 0.08)', display: 'grid', gridTemplateColumns: '1fr auto', gap: '18px', alignItems: 'center' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '16px', background: '#eef4ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1d4ed8', fontSize: '20px' }}>💼</div>
                  <div>
                    <h2 style={{ margin: 0, fontSize: '20px', color: '#102a43' }}>{job.title}</h2>
                    <p style={{ margin: '6px 0 0', fontSize: '14px', color: '#627d98' }}>{job.company} • {job.location}</p>
                  </div>
                </div>
                <p style={{ margin: '0 0 14px', color: '#334e68', lineHeight: 1.8 }}>{job.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', color: '#546e7a', fontSize: '13px' }}>
                  <span style={{ background: '#f3f7ff', borderRadius: '16px', padding: '8px 12px' }}>{job.type}</span>
                  <span style={{ background: '#f7f6ff', borderRadius: '16px', padding: '8px 12px' }}>Salary: {job.salary}</span>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'space-between', gap: '12px' }}>
                <span style={{ background: '#fff5f1', color: '#c2410c', padding: '8px 14px', borderRadius: '999px', fontSize: '12px', fontWeight: 700 }}>{job.badge}</span>
                <button onClick={() => apply(job)} style={{ background: '#004e89', color: '#fff', border: 'none', borderRadius: '16px', padding: '12px 20px', cursor: 'pointer', fontWeight: 700 }}>Apply</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
