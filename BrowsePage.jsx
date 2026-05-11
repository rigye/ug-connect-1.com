import React, { useEffect, useState } from 'react';
import { businessCategories } from '../data/businesses';
import { API_BASE } from '../api';

export default function BrowsePage({ setActive }) {
  const [categories, setCategories] = useState(businessCategories);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCategories() {
      try {
        const response = await fetch(`${API_BASE}/api/categories`);
        if (response.ok) {
          const data = await response.json();
          setCategories(data);
        }
      } catch (error) {
        console.error('Failed to load categories:', error);
      } finally {
        setLoading(false);
      }
    }

    loadCategories();
  }, []);

  return (
    <div style={{ background: '#f3f7fb', minHeight: '100vh', paddingBottom: '90px' }}>
      <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontSize: '34px', margin: 0, color: '#102a43' }}>Marketplace</h1>
              <p style={{ margin: '10px 0 0', maxWidth: '720px', color: '#5b6c7b', lineHeight: 1.8 }}>
                Browse Uganda’s best product and service categories in one place. Agriculture, fashion, electronics, real estate, education, and more.
              </p>
            </div>
            <button onClick={() => setActive('home')} style={{ border: 'none', background: '#004e89', color: '#fff', borderRadius: '18px', padding: '14px 24px', fontWeight: 700, cursor: 'pointer' }}>
              Back to Feed
            </button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '18px' }}>
            {categories.map((category) => (
              <div key={category.id} style={{ padding: '18px 20px', background: '#f4f7fb', borderRadius: '20px', color: '#102a43', fontWeight: 700, border: '1px solid #d9e2ec' }}>
                {category.name}
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
          {businessCategories.map((category) => (
            <button key={category.id} onClick={() => setActive(`category-${category.id}`)} style={{
              background: '#fff', border: '1px solid #e2e8f0', borderRadius: '24px', padding: '26px 22px', textAlign: 'left', cursor: 'pointer', boxShadow: '0 18px 40px rgba(16, 42, 67, 0.04)', transition: 'transform 0.2s',
            }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '18px', background: category.bgColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginBottom: '18px' }}>
                {category.emoji}
              </div>
              <h2 style={{ margin: '0 0 10px', fontSize: '20px', color: '#102a43' }}>{category.name}</h2>
              <p style={{ margin: 0, color: '#627d98', lineHeight: 1.8 }}>{category.description}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
