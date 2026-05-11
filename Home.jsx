import React, { useEffect, useState } from 'react';
import { API_BASE } from '../api';

const menuLinks = [
  { id: 'home', title: 'Home' },
  { id: 'marketplace', title: 'Marketplace' },
  { id: 'jobs', title: 'Jobs' },
  { id: 'learning', title: 'Learning' },
  { id: 'communities', title: 'Communities' },
  { id: 'messages', title: 'Messages' },
];

const feedPosts = [
  {
    id: 1,
    author: 'Mbarara Fresh Hub',
    role: 'Verified Farm Page',
    location: 'Mbarara, Uganda',
    image: 'https://images.unsplash.com/photo-1506806732259-39c2d0268443?w=900&q=80',
    text: 'Fresh tomatoes available in Mbarara. Delivery to Kampala and surrounding districts. DM for wholesale pricing and farm gate pickup.',
    tags: ['Agriculture', 'Fresh', 'Local'],
    reactions: '124',
    comments: '18',
  },
  {
    id: 2,
    author: 'Glow Salon Kampala',
    role: 'New Business',
    location: 'Kampala',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=900&q=80',
    text: 'We have opened a new premium salon in Nsambya. Grand opening discounts on haircuts, styling, and beauty services this week.',
    tags: ['Beauty', 'SME', 'Launch'],
    reactions: '89',
    comments: '12',
  },
  {
    id: 3,
    author: 'KLA Creative Agency',
    role: 'Hiring',
    location: 'Kampala',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=900&q=80',
    text: 'Hiring a graphic designer with portfolio experience in brands, packaging, and marketing campaigns. Remote-friendly and competitive pay.',
    tags: ['Jobs', 'Design', 'Remote'],
    reactions: '72',
    comments: '21',
  },
  {
    id: 4,
    author: 'Rwenzori Coffee Co.',
    role: 'Export Opportunity',
    location: 'Fort Portal',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=900&q=80',
    text: 'Coffee export opportunity available for licensed buyers. We have Robusta stock ready for overseas markets with trust verification and quality checks.',
    tags: ['Coffee', 'Export', 'Trust'],
    reactions: '101',
    comments: '27',
  },
];

const trendingBusinesses = [
  { name: 'City Market Grocers', category: 'Food & Beverages', followers: '12.4k' },
  { name: 'Taza Tech Hub', category: 'Electronics', followers: '8.7k' },
  { name: 'GreenSchools Uganda', category: 'Education', followers: '6.3k' },
];

const suggestedConnections = [
  { name: 'Amina S.', title: 'Agriculture Coach' },
  { name: 'David K.', title: 'UI/UX Designer' },
  { name: 'Ruth M.', title: 'Business Mentor' },
];

const events = [
  { title: 'Uganda Startup Forum', date: 'May 18', location: 'Kampala' },
  { title: 'Farmers Market Day', date: 'May 22', location: 'Jinja' },
];

export default function Home({ setActive, user }) {
  const [posts, setPosts] = useState(feedPosts);
  const [draft, setDraft] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [loadingPosts, setLoadingPosts] = useState(false);

  useEffect(() => {
    async function loadPosts() {
      setLoadingPosts(true);
      try {
        const response = await fetch(`${API_BASE}/api/posts`);
        if (response.ok) {
          const data = await response.json();
          setPosts(data);
        }
      } catch (error) {
        console.error('Failed to load posts:', error);
      } finally {
        setLoadingPosts(false);
      }
    }
    loadPosts();
  }, []);

  const createPost = async () => {
    if (!user) {
      setActive('signin');
      return;
    }
    if (!draft.trim()) return;
    setSubmitting(true);
    try {
      const response = await fetch(`${API_BASE}/api/posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: draft, author: user.name }),
      });
      if (response.ok) {
        const newPost = await response.json();
        setPosts((prev) => [newPost, ...(prev || [])]);
        setDraft('');
      }
    } catch (error) {
      console.error('Failed to create post:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", minHeight: '100vh', paddingBottom: '90px', background: '#f3f7fb' }}>
      <style>{`
        .feed-grid { display: grid; gap: 24px; grid-template-columns: minmax(260px, 280px) minmax(0, 1fr) minmax(260px, 320px); }
        @media (max-width: 1000px) { .feed-grid { grid-template-columns: 1fr; } }
      `}</style>

      <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '28px 20px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div>
            <h1 style={{ fontSize: '34px', fontWeight: 800, margin: 0, color: '#102a43' }}>{user ? `Welcome back, ${user.name}` : 'Welcome to UGConnect'}</h1>
            <p style={{ margin: '12px 0 0', maxWidth: '720px', color: '#486581', lineHeight: 1.7 }}>
              The digital home for Ugandan businesses, professionals, creators, farmers, students, and service providers. Discover posts, profiles, products, communities, and trusted opportunities.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
            <button onClick={() => setActive('profile')} style={{ border: 'none', background: '#FF6B35', color: '#fff', fontWeight: 700, borderRadius: '18px', padding: '14px 22px', cursor: 'pointer', boxShadow: '0 12px 30px rgba(255,107,53,0.22)' }}>
              View Profile
            </button>
            {!user && (
              <button onClick={() => setActive('signin')} style={{ border: '1px solid #004e89', background: '#fff', color: '#004e89', fontWeight: 700, borderRadius: '18px', padding: '14px 22px', cursor: 'pointer' }}>
                Sign In
              </button>
            )}
          </div>
        </div>

        <div className="feed-grid" style={{ marginTop: '28px' }}>
          <aside style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ borderRadius: '24px', background: '#fff', padding: '24px', boxShadow: '0 18px 40px rgba(16, 42, 67, 0.06)' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80" alt="Profile" style={{ width: '68px', height: '68px', borderRadius: '18px', objectFit: 'cover' }} />
                <div>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '6px' }}>
                    <h2 style={{ fontSize: '20px', margin: 0, color: '#102a43' }}>Jane N.</h2>
                    <span style={{ background: '#FFF3E8', color: '#C2410C', padding: '4px 10px', borderRadius: '999px', fontSize: '12px', fontWeight: 700 }}>Verified</span>
                  </div>
                  <p style={{ margin: 0, color: '#627d98', fontSize: '14px' }}>Business owner • Kampala</p>
                </div>
              </div>
              <div style={{ marginTop: '18px', color: '#334e68', lineHeight: 1.7 }}>
                Founder of a creative agency, community builder, and small business advocate. Helping Ugandan entrepreneurs build trusted brands and connect with local clients.
              </div>
              <div style={{ display: 'flex', gap: '12px', marginTop: '18px' }}>
                {['Products', 'Services', 'Connections'].map((item) => (
                  <div key={item} style={{ background: '#f3f7fb', color: '#102a43', borderRadius: '16px', padding: '10px 14px', fontSize: '13px', fontWeight: 700 }}>{item}</div>
                ))}
              </div>
            </div>

            <div style={{ borderRadius: '24px', background: '#fff', padding: '20px', boxShadow: '0 18px 40px rgba(16, 42, 67, 0.06)' }}>
              <h3 style={{ fontSize: '18px', margin: 0, color: '#102a43' }}>Explore</h3>
              <div style={{ marginTop: '16px', display: 'grid', gap: '10px' }}>
                {menuLinks.map((link) => (
                  <button key={link.id} onClick={() => setActive(link.id)} style={{ width: '100%', textAlign: 'left', padding: '14px 16px', borderRadius: '16px', border: '1px solid #e2e8f0', background: '#fff', color: '#102a43', cursor: 'pointer', fontWeight: 700, fontSize: '14px' }}>
                    {link.title}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          <main style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ borderRadius: '28px', background: '#fff', padding: '28px', boxShadow: '0 18px 50px rgba(16, 42, 67, 0.06)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
                <div>
                  <h2 style={{ fontSize: '22px', margin: 0, color: '#102a43' }}>Share an update</h2>
                  <p style={{ margin: '10px 0 0', color: '#627d98' }}>Post about products, business updates, or community news.</p>
                </div>
                <button onClick={createPost} style={{ border: 'none', background: '#004e89', color: '#fff', padding: '12px 20px', borderRadius: '14px', fontWeight: 700, cursor: 'pointer' }}>
                  {submitting ? 'Posting…' : 'Create Post'}
                </button>
              </div>
              <textarea value={draft} onChange={(event) => setDraft(event.target.value)} placeholder="What would you like to share today?" style={{ width: '100%', marginTop: '20px', minHeight: '140px', borderRadius: '22px', border: '1px solid #e2e8f0', padding: '18px', fontSize: '15px', color: '#102a43', resize: 'vertical', fontFamily: "'DM Sans', sans-serif" }} />
              <div style={{ marginTop: '18px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {['Photo', 'Video', 'Poll', 'Offer', 'Event'].map((action) => (
                  <button key={action} style={{ border: '1px solid #e2e8f0', background: '#fff', color: '#102a43', borderRadius: '16px', padding: '10px 16px', cursor: 'pointer', fontSize: '13px' }}>{action}</button>
                ))}
              </div>
            </div>

            {loadingPosts ? (
              <div style={{ padding: '40px', textAlign: 'center', color: '#627d98' }}>Loading posts…</div>
            ) : (
              (posts || []).map((post) => (
                <article key={post.id} style={{ borderRadius: '28px', background: '#fff', overflow: 'hidden', boxShadow: '0 18px 50px rgba(16, 42, 67, 0.04)' }}>
                  <div style={{ padding: '24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', alignItems: 'center' }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                          <div style={{ width: '44px', height: '44px', borderRadius: '14px', background: '#eef6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>📌</div>
                          <div>
                            <h3 style={{ margin: 0, fontSize: '18px', color: '#102a43' }}>{post.author}</h3>
                            <p style={{ margin: '4px 0 0', color: '#627d98', fontSize: '13px' }}>{post.role} • {post.location}</p>
                          </div>
                        </div>
                      </div>
                      <span style={{ fontSize: '12px', fontWeight: 700, color: '#627d98' }}>2h ago</span>
                    </div>
                    <p style={{ margin: '0 0 18px', color: '#334e68', lineHeight: 1.8 }}>{post.text}</p>
                  </div>
                  <div style={{ position: 'relative', minHeight: '240px' }}>
                    <img src={post.image} alt={post.author} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '20px 24px 24px' }}>
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '18px' }}>
                      {post.tags.map((tag) => (
                        <span key={tag} style={{ background: '#eef6ff', color: '#0f2647', borderRadius: '999px', padding: '8px 14px', fontSize: '12px', fontWeight: 700 }}>{tag}</span>
                      ))}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                      <div style={{ color: '#627d98', fontSize: '14px' }}>{post.reactions} reactions · {post.comments} comments</div>
                      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                        {['Like', 'Comment', 'Share', 'Message'].map((action) => (
                          <button key={action} style={{ border: '1px solid #e2e8f0', borderRadius: '18px', background: '#fff', color: '#102a43', padding: '10px 16px', cursor: 'pointer', fontSize: '13px' }}>{action}</button>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))
            )}
          </main>

          <aside style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ borderRadius: '24px', background: '#fff', padding: '24px', boxShadow: '0 18px 40px rgba(16, 42, 67, 0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '14px', background: '#eaf4ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#004e89', fontSize: '18px' }}>⭐</div>
                <h3 style={{ margin: 0, fontSize: '18px', color: '#102a43' }}>Trending Businesses</h3>
              </div>
              <div style={{ display: 'grid', gap: '14px' }}>
                {trendingBusinesses.map((item) => (
                  <div key={item.name} style={{ padding: '16px', borderRadius: '18px', background: '#f7fbff' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', alignItems: 'center' }}>
                      <div>
                        <p style={{ margin: 0, fontSize: '15px', fontWeight: 700, color: '#102a43' }}>{item.name}</p>
                        <p style={{ margin: '6px 0 0', fontSize: '13px', color: '#627d98' }}>{item.category}</p>
                      </div>
                      <span style={{ color: '#004e89', fontWeight: 700 }}>{item.followers}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ borderRadius: '24px', background: '#fff', padding: '24px', boxShadow: '0 18px 40px rgba(16, 42, 67, 0.06)' }}>
              <h3 style={{ margin: 0, fontSize: '18px', color: '#102a43', marginBottom: '16px' }}>Suggested Connections</h3>
              <div style={{ display: 'grid', gap: '12px' }}>
                {suggestedConnections.map((person) => (
                  <div key={person.name} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px', borderRadius: '18px', background: '#f5f9ff' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '14px', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#004e89', fontSize: '18px' }}>{person.name.split(' ')[0][0]}</div>
                    <div>
                      <p style={{ margin: 0, fontWeight: 700, color: '#102a43' }}>{person.name}</p>
                      <p style={{ margin: '4px 0 0', color: '#627d98', fontSize: '13px' }}>{person.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ borderRadius: '24px', background: '#fff', padding: '24px', boxShadow: '0 18px 40px rgba(16, 42, 67, 0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '14px', background: '#fff7ed', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c2410c', fontSize: '18px' }}>📍</div>
                <h3 style={{ margin: 0, fontSize: '18px', color: '#102a43' }}>Events Near You</h3>
              </div>
              <div style={{ display: 'grid', gap: '14px' }}>
                {events.map((event) => (
                  <div key={event.title} style={{ padding: '16px', borderRadius: '18px', background: '#fff8f2', border: '1px solid #ffe4d3' }}>
                    <p style={{ margin: 0, fontSize: '15px', fontWeight: 700, color: '#102a43' }}>{event.title}</p>
                    <p style={{ margin: '6px 0 0', color: '#7c4a16', fontSize: '13px' }}>{event.date} • {event.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
