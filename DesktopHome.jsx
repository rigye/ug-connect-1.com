import React from 'react';
import Hero from '../components/Hero';
import ProductsSection from '../components/ProductsSection';
import { crops, livestock } from '../data';

export default function DesktopHome({ setActive }) {
  return (
    <div>
      {/* Hero Section */}
      <Hero setActive={setActive} />

      {/* Featured Crops */}
      <ProductsSection 
        items={crops}
        title="Popular Crops"
        description="Learn to grow and manage crops suited for your region"
      />

      {/* Featured Livestock */}
      <ProductsSection 
        items={livestock}
        title="Livestock"
        description="Comprehensive guides for raising healthy productive animals"
      />

      {/* Call to Action Section */}
      <section style={{
        background: 'linear-gradient(135deg, #1B6B3A 0%, #2FA85C 100%)',
        color: '#fff',
        padding: '60px 20px',
        textAlign: 'center',
      }}>
        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
        }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: '800',
            marginBottom: '16px',
            fontFamily: "'Syne', sans-serif",
          }}>
            Ready to Transform Your Farm?
          </h2>
          <p style={{
            fontSize: '16px',
            marginBottom: '24px',
            opacity: 0.9,
          }}>
            Join thousands of farmers across East Africa who are already growing smarter.
          </p>
          <button
            onClick={() => setActive('community')}
            style={{
              background: '#D4A017',
              color: '#1B6B3A',
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
            Join Community →
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#1A1A2E',
        color: '#fff',
        padding: '40px 20px',
        textAlign: 'center',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '30px',
            marginBottom: '30px',
            textAlign: 'left',
          }}>
            <div>
              <h3 style={{ marginBottom: '12px', fontWeight: '700' }}>About</h3>
              <p style={{ fontSize: '14px', opacity: 0.8 }}>
                FarmGuide is your complete farming companion for East Africa
              </p>
            </div>
            <div>
              <h3 style={{ marginBottom: '12px', fontWeight: '700' }}>Quick Links</h3>
              <ul style={{ listStyle: 'none', fontSize: '14px', opacity: 0.8 }}>
                <li style={{ marginBottom: '6px' }}><a href="#" style={{ color: '#D4A017', textDecoration: 'none' }}>Crops</a></li>
                <li style={{ marginBottom: '6px' }}><a href="#" style={{ color: '#D4A017', textDecoration: 'none' }}>Livestock</a></li>
                <li><a href="#" style={{ color: '#D4A017', textDecoration: 'none' }}>Community</a></li>
              </ul>
            </div>
            <div>
              <h3 style={{ marginBottom: '12px', fontWeight: '700' }}>Support</h3>
              <ul style={{ listStyle: 'none', fontSize: '14px', opacity: 0.8 }}>
                <li style={{ marginBottom: '6px' }}><a href="#" style={{ color: '#D4A017', textDecoration: 'none' }}>Help Center</a></li>
                <li style={{ marginBottom: '6px' }}><a href="#" style={{ color: '#D4A017', textDecoration: 'none' }}>Contact Us</a></li>
                <li><a href="#" style={{ color: '#D4A017', textDecoration: 'none' }}>Privacy</a></li>
              </ul>
            </div>
          </div>
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '20px',
            opacity: 0.6,
            fontSize: '14px',
          }}>
            © 2026 FarmGuide. Empowering African Agriculture.
          </div>
        </div>
      </footer>
    </div>
  );
}
