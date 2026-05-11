import React, { useEffect, useState } from 'react';
import { businessCategories, categoryProducts } from '../data/businesses';
import { API_BASE } from '../api';

export default function CategoryBrowse({ categoryId, setActive, user }) {
  const category = businessCategories.find(c => c.id === categoryId);
  const [products, setProducts] = useState(categoryProducts[categoryId] || []);
  const [activeFilter, setActiveFilter] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);
      try {
        const response = await fetch(`${API_BASE}/api/categories/${categoryId}/products`);
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
          setActiveFilter('All');
        }
      } catch (error) {
        console.error('Failed to load products:', error);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, [categoryId]);

  const requestQuote = async (product) => {
    if (!user) {
      alert('Please sign in to request a quote.');
      setActive('signin');
      return;
    }

    try {
      await fetch(`${API_BASE}/api/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: `I would like a quote for ${product.name} from ${product.seller}.`,
          user: user.name,
          channel: 'Market',
        }),
      });
      alert(`Request sent to ${product.seller}. Check Community Chat for updates.`);
    } catch (error) {
      console.error('Quote request failed:', error);
      alert('Could not send request. Please try again.');
    }
  };

  if (!category) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <p>Category not found</p>
        <button onClick={() => setActive('home')}>Back to Home</button>
      </div>
    );
  }

  // Get unique categories from products
  const categories = ['All', ...new Set(products.map(p => p.category))];

  // Filter products
  const filteredProducts = activeFilter === 'All' 
    ? products 
    : products.filter(p => p.category === activeFilter);

  return (
    <div>
      {/* Category Header */}
      <div style={{
        background: `linear-gradient(135deg, ${category.color} 0%, ${category.color}99 100%)`,
        color: '#fff',
        padding: '40px 20px',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          <button
            onClick={() => setActive('home')}
            style={{
              background: 'rgba(255,255,255,0.2)',
              border: 'none',
              color: '#fff',
              padding: '8px 16px',
              borderRadius: '8px',
              cursor: 'pointer',
              marginBottom: '16px',
              fontWeight: '600',
            }}
          >
            ← Back
          </button>
          <h1 style={{
            fontSize: '36px',
            fontWeight: '800',
            fontFamily: "'Syne', sans-serif",
            marginBottom: '8px',
          }}>
            {category.emoji} {category.name}
          </h1>
          <p style={{
            fontSize: '16px',
            opacity: 0.9,
          }}>
            {products.length} products available
          </p>
        </div>
      </div>

      {/* Category Content */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 20px',
      }}>
        {/* Filter Tabs */}
        <div style={{
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap',
          marginBottom: '32px',
        }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              style={{
                padding: '10px 20px',
                borderRadius: '30px',
                border: '2px solid #E2DDD4',
                background: activeFilter === cat ? category.color : '#FFFFFF',
                color: activeFilter === cat ? '#fff' : '#1A1A2E',
                fontWeight: '700',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                fontFamily: "'Nunito', sans-serif",
                borderColor: activeFilter === cat ? category.color : '#E2DDD4',
              }}
              onMouseEnter={(e) => {
                if (activeFilter !== cat) {
                  e.target.style.borderColor = category.color;
                  e.target.style.color = category.color;
                }
              }}
              onMouseLeave={(e) => {
                if (activeFilter !== cat) {
                  e.target.style.borderColor = '#E2DDD4';
                  e.target.style.color = '#1A1A2E';
                }
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '20px',
        }}>
          {loading ? (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px', color: '#6B7280' }}>Loading products…</div>
          ) : filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                style={{
                  background: '#fff',
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
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Product Image */}
                <div style={{
                  height: '180px',
                  background: 'linear-gradient(135deg, #F0EDE6, #E2DDD4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '48px',
                  position: 'relative',
                }}>
                  {product.emoji}
                  {product.badge && (
                    <div style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      background: category.color,
                      color: '#fff',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '11px',
                      fontWeight: '700',
                    }}>
                      {product.badge}
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div style={{
                  padding: '14px 16px',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                  <p style={{
                    fontSize: '12px',
                    color: '#6B7280',
                    fontWeight: '600',
                    marginBottom: '6px',
                  }}>
                    {product.seller}
                  </p>
                  <h4 style={{
                    fontSize: '16px',
                    fontWeight: '700',
                    color: '#1A1A2E',
                    marginBottom: '6px',
                  }}>
                    {product.name}
                  </h4>
                  <p style={{
                    fontSize: '12px',
                    color: '#6B7280',
                    marginBottom: '12px',
                  }}>
                    📍 {product.location}
                  </p>

                  {/* Footer with price */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '10px',
                    borderTop: '1px solid #E2DDD4',
                    marginTop: 'auto',
                  }}>
                    <span style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: '18px',
                      fontWeight: '800',
                      color: category.color,
                    }}>
                      UGX {product.price.toLocaleString()}
                    </span>
                    <button onClick={() => requestQuote(product)} style={{
                      border: 'none',
                      background: category.color,
                      color: '#fff',
                      borderRadius: '16px',
                      padding: '10px 14px',
                      fontSize: '13px',
                      fontWeight: '700',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}>
                      Request Quote
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px' }}>
              <p style={{ color: '#6B7280', fontSize: '16px' }}>No products found in this category</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
