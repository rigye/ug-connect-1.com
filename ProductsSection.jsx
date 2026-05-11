import React, { useState } from 'react';
import ProductCard from './ProductCard';

export default function ProductsSection({ items, title, description }) {
  const [activeCategory, setActiveCategory] = useState('All');

  // Get unique categories
  const categories = ['All', ...new Set(items.map(item => item.category))];

  // Filter items by category
  const filteredItems = activeCategory === 'All' 
    ? items 
    : items.filter(item => item.category === activeCategory);

  return (
    <section style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '60px 20px',
    }}>
      {/* Section Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '32px',
        flexWrap: 'wrap',
        gap: '12px',
      }}>
        <div>
          <h2 style={{
            fontSize: '28px',
            fontWeight: '800',
            fontFamily: "'Syne', sans-serif",
            color: '#1A1A2E',
          }}>
            {title} <span style={{ color: '#1B6B3A' }}>Guide</span>
          </h2>
          <p style={{
            color: '#6B7280',
            fontSize: '15px',
            marginTop: '4px',
          }}>
            {description}
          </p>
        </div>
      </div>

      {/* Category Tabs */}
      <div style={{
        display: 'flex',
        gap: '10px',
        flexWrap: 'wrap',
        marginBottom: '32px',
      }}>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            style={{
              padding: '10px 20px',
              borderRadius: '30px',
              border: '2px solid #E2DDD4',
              background: activeCategory === category ? '#1B6B3A' : '#FFFFFF',
              color: activeCategory === category ? '#fff' : '#1A1A2E',
              fontWeight: '700',
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'all 0.2s',
              fontFamily: "'Nunito', sans-serif",
              borderColor: activeCategory === category ? '#1B6B3A' : '#E2DDD4',
            }}
            onMouseEnter={(e) => {
              if (activeCategory !== category) {
                e.target.style.borderColor = '#1B6B3A';
                e.target.style.color = '#1B6B3A';
              }
            }}
            onMouseLeave={(e) => {
              if (activeCategory !== category) {
                e.target.style.borderColor = '#E2DDD4';
                e.target.style.color = '#1A1A2E';
              }
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        gap: '20px',
      }}>
        {filteredItems.map((item) => (
          <ProductCard 
            key={item.id} 
            product={{
              name: item.name,
              price: item.id * 10000,
              seller: item.category,
              location: 'East Africa',
              emoji: item.emoji,
              badge: item.category === 'Cash Crops' ? 'Premium' : 'Fresh'
            }}
          />
        ))}
      </div>
    </section>
  );
}
