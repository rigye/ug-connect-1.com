import React from 'react';

export default function Hero({ setActive }) {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #FF6B35 0%, #004E89 60%, #1E3A8A 100%)',
      color: '#fff',
      padding: '80px 20px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative circles */}
      <div style={{
        content: '',
        position: 'absolute',
        top: '-80px',
        right: '-80px',
        width: '400px',
        height: '400px',
        background: 'rgba(255, 255, 255, 0.15)',
        borderRadius: '50%',
      }} />
      <div style={{
        content: '',
        position: 'absolute',
        bottom: '-60px',
        left: '-60px',
        width: '300px',
        height: '300px',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '50%',
      }} />

      <div style={{
        maxWidth: '700px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Badge */}
        <div style={{
          display: 'inline-block',
          background: 'rgba(255, 255, 255, 0.25)',
          border: '1px solid #fff',
          color: '#fff',
          padding: '6px 16px',
          borderRadius: '20px',
          fontSize: '13px',
          fontWeight: '700',
          marginBottom: '20px',
          letterSpacing: '0.5px',
          fontFamily: "'Syne', sans-serif",
        }}>
          🌍 Uganda's Largest Marketplace
        </div>

        {/* Heading */}
        <h1 style={{
          fontSize: 'clamp(36px, 5vw, 60px)',
          fontWeight: '800',
          lineHeight: '1.1',
          marginBottom: '16px',
          fontFamily: "'Syne', sans-serif",
        }}>
          Connect with <br/>
          <span style={{ color: '#FFC500' }}>Businesses Everywhere</span>
        </h1>

        {/* Subheading */}
        <p style={{
          fontSize: '18px',
          opacity: 0.95,
          marginBottom: '36px',
          lineHeight: '1.6',
        }}>
          From fashion to farming, electronics to real estate. Find everything you need in Uganda on one platform.
        </p>

        {/* CTA Buttons */}
        <div style={{
          display: 'flex',
          gap: '14px',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          <button
            onClick={() => setActive('browse')}
            style={{
              background: '#fff',
              color: '#FF6B35',
              border: 'none',
              padding: '14px 32px',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.2s',
              fontFamily: "'Nunito', sans-serif",
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            Browse Now →
          </button>
          <button
            onClick={() => setActive('sell')}
            style={{
              background: 'transparent',
              color: '#fff',
              border: '2px solid #fff',
              padding: '14px 32px',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.2s',
              fontFamily: "'Nunito', sans-serif",
            }}
            onMouseOver={(e) => {
              e.target.style.background = '#fff';
              e.target.style.color = '#FF6B35';
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = '#fff';
            }}
          >
            Start Selling
          </button>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex',
          gap: '40px',
          justifyContent: 'center',
          marginTop: '50px',
          flexWrap: 'wrap',
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: '32px',
              fontWeight: '800',
              color: '#FFC500',
            }}>
              100K+
            </div>
            <div style={{
              fontSize: '13px',
              opacity: 0.85,
              marginTop: '2px',
            }}>
              Active Sellers
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: '32px',
              fontWeight: '800',
              color: '#FFC500',
            }}>
              500K+
            </div>
            <div style={{
              fontSize: '13px',
              opacity: 0.85,
              marginTop: '2px',
            }}>
              Products Listed
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: '32px',
              fontWeight: '800',
              color: '#FFC500',
            }}>
              1M+
            </div>
            <div style={{
              fontSize: '13px',
              opacity: 0.85,
              marginTop: '2px',
            }}>
              Happy Customers
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
