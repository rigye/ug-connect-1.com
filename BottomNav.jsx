import React from 'react';

const tabs = [
  { id: 'home', label: 'Home', icon: (active) => (
    <svg viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" width="22" height="22">
      <path d="M3 12L12 3l9 9" />
      <path d="M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9" />
    </svg>
  ) },
  { id: 'marketplace', label: 'Market', icon: (active) => (
    <svg viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" width="22" height="22">
      <path d="M3 7h18" />
      <path d="M5 7v13h14V7" />
      <path d="M9 7v-4h6v4" />
    </svg>
  ) },
  { id: 'jobs', label: 'Jobs', icon: (active) => (
    <svg viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" width="22" height="22">
      <path d="M6 7V5a2 2 0 012-2h8a2 2 0 012 2v2" />
      <rect x="6" y="7" width="12" height="12" rx="2" />
      <path d="M9 11h6" />
      <path d="M9 15h4" />
    </svg>
  ) },
  { id: 'communities', label: 'Groups', icon: (active) => (
    <svg viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" width="22" height="22">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
      <path d="M4 20v-1c0-2.21 1.79-4 4-4h8c2.21 0 4 1.79 4 4v1" />
    </svg>
  ) },
  { id: 'messages', label: 'Messages', icon: (active) => (
    <svg viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" width="22" height="22">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  ) },
];

export default function BottomNav({ active, setActive }) {
  return (
    <nav style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      background: '#fff',
      borderTop: '1px solid #e8ede8',
      display: 'flex',
      zIndex: 50,
      boxShadow: '0 -4px 20px rgba(0,0,0,0.06)',
      paddingBottom: 'env(safe-area-inset-bottom)',
    }}>
      {tabs.map((tab) => {
        const isActive = active === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px 0 8px',
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              color: isActive ? '#004e89' : '#9aa7b1',
              transition: 'all 0.2s',
              gap: '3px',
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            <div style={{
              padding: '6px 10px',
              borderRadius: '18px',
              background: isActive ? '#e8f0ff' : 'transparent',
              transition: 'background 0.2s',
            }}>
              {tab.icon(isActive)}
            </div>
            <span style={{ fontSize: '10px', fontWeight: isActive ? '700' : '500', letterSpacing: '0.3px' }}>
              {tab.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
