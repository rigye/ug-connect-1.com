import React from 'react';

export default function ProductCard({ product }) {
  const { name, price, seller, location, image, badge } = product;

  return (
    <div style={{
      background: '#FFFFFF',
      borderRadius: '14px',
      border: '1px solid #E2DDD4',
      overflow: 'hidden',
      transition: 'all 0.25s',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.10)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'none';
    }}>
      {/* Image Container */}
      <div style={{
        height: '200px',
        width: '100%',
        background: 'linear-gradient(135deg, #F0EDE6, #E2DDD4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        fontSize: '48px',
        position: 'relative',
      }}>
        {image ? (
          <img src={image} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <span>{product.emoji}</span>
        )}
        {badge && (
          <div style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            display: 'inline-block',
            padding: '3px 10px',
            borderRadius: '20px',
            fontSize: '11px',
            fontWeight: '800',
            letterSpacing: '0.3px',
            background: badge.includes('gold') ? '#F5D77A' : '#E8F5EE',
            color: badge.includes('gold') ? '#9A7210' : '#1B6B3A',
          }}>
            {badge}
          </div>
        )}
      </div>

      {/* Card Body */}
      <div style={{ padding: '14px 16px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Seller Info */}
        <div style={{
          fontSize: '12px',
          color: '#6B7280',
          fontWeight: '600',
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          marginBottom: '6px',
        }}>
          <div style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: '#1B6B3A',
          }} />
          {seller}
        </div>

        {/* Product Name */}
        <div style={{
          fontWeight: '700',
          fontSize: '16px',
          lineHeight: '1.3',
          marginBottom: '6px',
          color: '#1A1A2E',
        }}>
          {name}
        </div>

        {/* Location */}
        <div style={{
          fontSize: '12px',
          color: '#6B7280',
          marginBottom: '10px',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
        }}>
          📍 {location}
        </div>

        {/* Footer */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '10px',
          borderTop: '1px solid #E2DDD4',
          marginTop: 'auto',
        }}>
          <div style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: '20px',
            fontWeight: '800',
            color: '#1B6B3A',
          }}>
            UGX {price}
            <small style={{
              fontSize: '12px',
              fontFamily: "'Nunito', sans-serif",
              color: '#6B7280',
              display: 'block',
            }}>
              per unit
            </small>
          </div>
          <button
            style={{
              width: '36px',
              height: '36px',
              background: '#D4A017',
              border: 'none',
              borderRadius: '8px',
              color: '#fff',
              fontSize: '18px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#1B6B3A';
              e.target.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#D4A017';
              e.target.style.transform = 'scale(1)';
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
