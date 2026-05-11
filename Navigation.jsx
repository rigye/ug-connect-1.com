import React from 'react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'marketplace', label: 'Marketplace' },
  { id: 'jobs', label: 'Jobs' },
  { id: 'learning', label: 'Learning' },
  { id: 'communities', label: 'Communities' },
  { id: 'messages', label: 'Messages' },
];

export default function Navigation({ active, setActive, onCreatePost, user, onSignIn, onSignOut }) {
  return (
    <>
      <div style={{
        background: '#004e89',
        color: '#fff',
        textAlign: 'center',
        fontSize: '13px',
        padding: '10px 0',
        letterSpacing: '0.3px',
      }}>
        🇺🇬 UGConnect — Your home for trusted Ugandan businesses, communities, and opportunities
      </div>

      <nav style={{
        background: '#fff',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 2px 20px rgba(0,0,0,0.08)',
      }}>
        <div style={{
          maxWidth: '1320px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 20px',
          height: '72px',
          gap: '12px',
          flexWrap: 'wrap',
        }}>
          <button onClick={() => setActive('home')} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
            border: 'none',
            background: 'none',
            cursor: 'pointer',
          }}>
            <div style={{
              width: '44px',
              height: '44px',
              background: 'linear-gradient(135deg, #FF6B35, #004E89)',
              borderRadius: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontFamily: "'Syne', sans-serif",
              fontWeight: '800',
              fontSize: '18px',
            }}>
              UG
            </div>
            <div style={{
              color: '#102a43',
              fontSize: '22px',
              fontWeight: '800',
              fontFamily: "'Syne', sans-serif",
            }}>
              Connect
            </div>
          </button>

          <div style={{
            display: 'flex',
            gap: '6px',
            flex: 1,
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                style={{
                  padding: '10px 16px',
                  borderRadius: '14px',
                  border: 'none',
                  background: active === item.id ? '#fdf2e9' : 'transparent',
                  color: active === item.id ? '#c2410c' : '#546e7a',
                  fontSize: '14px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            {user ? (
              <>
                <div style={{ color: '#102a43', fontWeight: 700, fontSize: '14px' }}>Hi, {user.name}</div>
                <button onClick={() => onSignOut ? onSignOut() : setActive('home')} style={{
                  background: 'transparent',
                  border: '1px solid #004e89',
                  color: '#004e89',
                  padding: '10px 18px',
                  borderRadius: '14px',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}>
                  Sign Out
                </button>
              </>
            ) : (
              <button onClick={() => onSignIn ? onSignIn() : setActive('signin')} style={{
                background: 'transparent',
                border: '1px solid #004e89',
                color: '#004e89',
                padding: '10px 18px',
                borderRadius: '14px',
                fontWeight: 700,
                cursor: 'pointer',
              }}>
                Sign In
              </button>
            )}
            <button onClick={() => onCreatePost ? onCreatePost() : setActive('home')} style={{
              background: '#ff6b35',
              color: '#fff',
              border: 'none',
              padding: '10px 18px',
              borderRadius: '14px',
              fontWeight: 700,
              cursor: 'pointer',
            }}>
              Create Post
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
