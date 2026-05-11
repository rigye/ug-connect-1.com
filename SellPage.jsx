import React from 'react';

export default function SellPage({ setActive }) {
  return (
    <div>
      <div style={{
        background: 'linear-gradient(135deg, #FF6B35, #004E89)',
        color: '#fff',
        padding: '60px 20px',
        textAlign: 'center',
      }}>
        <h1 style={{
          fontSize: '40px',
          fontWeight: '800',
          fontFamily: "'Syne', sans-serif",
          marginBottom: '16px',
        }}>
          Start Selling on UGConnect
        </h1>
        <p style={{
          fontSize: '18px',
          opacity: 0.9,
          maxWidth: '600px',
          margin: '0 auto',
        }}>
          Reach millions of customers across Uganda. Join our seller community today.
        </p>
      </div>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '60px 20px',
      }}>
        {/* Steps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px',
          marginBottom: '60px',
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '50px',
              height: '50px',
              background: '#FF6B35',
              color: '#fff',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              fontWeight: '800',
              margin: '0 auto 16px',
              fontFamily: "'Syne', sans-serif",
            }}>
              1
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>
              Create Account
            </h3>
            <p style={{ color: '#6B7280' }}>
              Sign up with your email or phone number
            </p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '50px',
              height: '50px',
              background: '#FF6B35',
              color: '#fff',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              fontWeight: '800',
              margin: '0 auto 16px',
              fontFamily: "'Syne', sans-serif",
            }}>
              2
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>
              Create Store
            </h3>
            <p style={{ color: '#6B7280' }}>
              Set up your store with name and description
            </p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '50px',
              height: '50px',
              background: '#FF6B35',
              color: '#fff',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              fontWeight: '800',
              margin: '0 auto 16px',
              fontFamily: "'Syne', sans-serif",
            }}>
              3
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>
              List Products
            </h3>
            <p style={{ color: '#6B7280' }}>
              Add your products with photos and pricing
            </p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '50px',
              height: '50px',
              background: '#FF6B35',
              color: '#fff',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              fontWeight: '800',
              margin: '0 auto 16px',
              fontFamily: "'Syne', sans-serif",
            }}>
              4
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>
              Start Selling
            </h3>
            <p style={{ color: '#6B7280' }}>
              Receive orders and start making money
            </p>
          </div>
        </div>

        {/* CTA */}
        <div style={{
          textAlign: 'center',
          background: '#FFF0E6',
          padding: '40px',
          borderRadius: '14px',
        }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: '800',
            marginBottom: '16px',
            fontFamily: "'Syne', sans-serif",
          }}>
            Ready to join thousands of sellers?
          </h2>
          <p style={{
            color: '#6B7280',
            marginBottom: '24px',
            fontSize: '16px',
          }}>
            It's free to sign up. Get started today.
          </p>
          <button style={{
            background: '#FF6B35',
            color: '#fff',
            border: 'none',
            padding: '14px 32px',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '700',
            cursor: 'pointer',
            fontFamily: "'Nunito', sans-serif",
            transition: 'all 0.2s',
          }}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            Get Started Now →
          </button>
        </div>
      </div>
    </div>
  );
}
