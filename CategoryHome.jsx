import React from 'react';
import Hero from '../components/Hero';
import { businessCategories, featuredProducts } from '../data/businesses';

export default function CategoryHome({ setActive }) {
  const handleCategoryClick = (categoryId) => {
    setActive(`category-${categoryId}`);
  };

  return (
    <div>
      {/* Hero Section */}
      <Hero setActive={setActive} />

      {/* Business Categories Grid */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '60px 20px',
      }}>
        <div style={{
          marginBottom: '40px',
        }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: '800',
            fontFamily: "'Syne', sans-serif",
            color: '#1A1A2E',
            marginBottom: '8px',
          }}>
            Browse <span style={{ color: '#FF6B35' }}>All Categories</span>
          </h2>
          <p style={{
            fontSize: '16px',
            color: '#6B7280',
            marginBottom: '24px',
          }}>
            Find products and services from sellers across Uganda
          </p>
        </div>

        {/* Categories Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px',
        }}>
          {businessCategories.map((category) => (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              style={{
                background: '#fff',
                border: '2px solid #E2DDD4',
                borderRadius: '14px',
                padding: '24px',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.15)';
                e.currentTarget.style.borderColor = category.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = '#E2DDD4';
              }}
            >
              {/* Icon */}
              <div style={{
                width: '70px',
                height: '70px',
                background: category.bgColor,
                borderRadius: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '40px',
                marginBottom: '16px',
              }}>
                {category.emoji}
              </div>

              {/* Name */}
              <h3 style={{
                fontSize: '18px',
                fontWeight: '700',
                color: '#1A1A2E',
                marginBottom: '8px',
                fontFamily: "'Syne', sans-serif",
              }}>
                {category.name}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: '13px',
                color: '#6B7280',
                lineHeight: '1.5',
                marginBottom: '16px',
                flex: 1,
              }}>
                {category.description}
              </p>

              {/* CTA Button */}
              <button style={{
                background: category.color,
                color: '#fff',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.2s',
                fontFamily: "'Nunito', sans-serif",
                alignSelf: 'center',
              }}
              onMouseOver={(e) => e.target.style.opacity = '0.9'}
              onMouseOut={(e) => e.target.style.opacity = '1'}
              >
                Browse →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section style={{
        background: '#F9F9F9',
        padding: '60px 20px',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          <div style={{
            marginBottom: '40px',
          }}>
            <h2 style={{
              fontSize: '32px',
              fontWeight: '800',
              fontFamily: "'Syne', sans-serif",
              color: '#1A1A2E',
              marginBottom: '8px',
            }}>
              Featured <span style={{ color: '#FF6B35' }}>Products</span>
            </h2>
            <p style={{
              fontSize: '16px',
              color: '#6B7280',
            }}>
              Popular items from across all categories
            </p>
          </div>

          {/* Featured Products Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '20px',
          }}>
            {featuredProducts.map((product) => (
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
                      background: '#FF6B35',
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
                      color: '#FF6B35',
                    }}>
                      UGX {product.price.toLocaleString()}
                    </span>
                    <button style={{
                      width: '32px',
                      height: '32px',
                      background: '#FF6B35',
                      border: 'none',
                      borderRadius: '8px',
                      color: '#fff',
                      fontSize: '16px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.2s',
                    }}
                    onMouseOver={(e) => {
                      e.target.style.background = '#004E89';
                      e.target.style.transform = 'scale(1.1)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.background = '#FF6B35';
                      e.target.style.transform = 'scale(1)';
                    }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: 'linear-gradient(135deg, #FF6B35 0%, #004E89 100%)',
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
            Ready to Start Selling?
          </h2>
          <p style={{
            fontSize: '16px',
            marginBottom: '24px',
            opacity: 0.95,
          }}>
            Join thousands of sellers on UGConnect and reach millions of customers across Uganda.
          </p>
          <button
            onClick={() => setActive('sell')}
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
            Get Started Now →
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
                UGConnect is Uganda's leading online marketplace connecting buyers with sellers
              </p>
            </div>
            <div>
              <h3 style={{ marginBottom: '12px', fontWeight: '700' }}>Quick Links</h3>
              <ul style={{ listStyle: 'none', fontSize: '14px', opacity: 0.8 }}>
                <li style={{ marginBottom: '6px' }}><a href="#" style={{ color: '#FF6B35', textDecoration: 'none' }}>Browse</a></li>
                <li style={{ marginBottom: '6px' }}><a href="#" style={{ color: '#FF6B35', textDecoration: 'none' }}>Sell</a></li>
                <li><a href="#" style={{ color: '#FF6B35', textDecoration: 'none' }}>Community</a></li>
              </ul>
            </div>
            <div>
              <h3 style={{ marginBottom: '12px', fontWeight: '700' }}>Support</h3>
              <ul style={{ listStyle: 'none', fontSize: '14px', opacity: 0.8 }}>
                <li style={{ marginBottom: '6px' }}><a href="#" style={{ color: '#FF6B35', textDecoration: 'none' }}>Help Center</a></li>
                <li style={{ marginBottom: '6px' }}><a href="#" style={{ color: '#FF6B35', textDecoration: 'none' }}>Contact Us</a></li>
                <li><a href="#" style={{ color: '#FF6B35', textDecoration: 'none' }}>Privacy</a></li>
              </ul>
            </div>
          </div>
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '20px',
            opacity: 0.6,
            fontSize: '14px',
          }}>
            © 2026 UGConnect. Connecting Uganda.
          </div>
        </div>
      </footer>
    </div>
  );
}
