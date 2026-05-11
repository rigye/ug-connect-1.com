import React, { useEffect, useState } from 'react';
import { API_BASE } from '../api';
import { courseCatalog as fallbackCourses } from '../data/businesses';

export default function Learning({ user }) {
  const [courses, setCourses] = useState(fallbackCourses);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    async function loadCourses() {
      try {
        const response = await fetch(`${API_BASE}/api/courses`);
        if (response.ok) {
          const data = await response.json();
          setCourses(data);
        }
      } catch (error) {
        console.error('Failed to load courses:', error);
      } finally {
        setLoading(false);
      }
    }
    loadCourses();
  }, []);

  const visibleCourses = courses.filter((course) => {
    const term = query.toLowerCase();
    return course.title.toLowerCase().includes(term) || course.provider.toLowerCase().includes(term) || course.category.toLowerCase().includes(term);
  });

  const enroll = (course) => {
    if (!user) {
      return alert('Please sign in to enroll in a course.');
    }
    alert(`Enrolled in ${course.title}! Check your email for next steps, ${user.name}.`);
  };

  return (
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto', minHeight: '100vh' }}>
      <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '14px', flexWrap: 'wrap' }}>
        <div>
          <h1 style={{ fontSize: '32px', margin: 0, color: '#102a43' }}>Learning & Courses</h1>
          <p style={{ margin: '8px 0 0', color: '#576873' }}>Find practical courses designed for Ugandan businesses, farmers, and creators.</p>
        </div>
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search courses" style={{ minWidth: '260px', borderRadius: '18px', border: '1px solid #d9e2ec', padding: '12px 16px', fontSize: '14px', outline: 'none', width: '100%', maxWidth: '320px' }} />
      </div>

      {loading ? (
        <div style={{ padding: '40px', textAlign: 'center', color: '#627d98' }}>Loading courses…</div>
      ) : (
        <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {visibleCourses.map((course) => (
            <div key={course.id} style={{ background: '#fff', borderRadius: '24px', padding: '24px', boxShadow: '0 18px 40px rgba(16, 42, 67, 0.08)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', alignItems: 'center', marginBottom: '18px' }}>
                <div>
                  <h2 style={{ margin: 0, fontSize: '20px', color: '#102a43' }}>{course.title}</h2>
                  <p style={{ margin: '8px 0 0', color: '#627d98', fontSize: '14px' }}>{course.provider}</p>
                </div>
                <span style={{ background: '#eff6ff', color: '#1d4ed8', borderRadius: '999px', padding: '8px 14px', fontWeight: 700, fontSize: '12px' }}>{course.category}</span>
              </div>
              <p style={{ color: '#334e68', lineHeight: 1.7, marginBottom: '18px' }}>{course.description}</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '10px', marginBottom: '20px', color: '#546e7a', fontSize: '13px' }}>
                <div style={{ background: '#f3f7ff', borderRadius: '16px', padding: '12px' }}>Duration: {course.duration}</div>
                <div style={{ background: '#f7f6ff', borderRadius: '16px', padding: '12px' }}>Level: {course.level}</div>
                <div style={{ background: '#effaf4', borderRadius: '16px', padding: '12px' }}>Price: {course.price}</div>
                <div style={{ background: '#fff4e6', borderRadius: '16px', padding: '12px' }}>Students: {course.students}</div>
              </div>
              <button onClick={() => enroll(course)} style={{ width: '100%', borderRadius: '18px', border: 'none', background: '#004e89', color: '#fff', padding: '14px 18px', fontWeight: 700, cursor: 'pointer' }}>Enroll now</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
