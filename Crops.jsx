import React, { useState } from 'react';
import { crops } from '../data';

const categories = ['All','Cereals','Legumes','Cash Crops','Fruits','Vegetables','Tubers'];

export default function Crops() {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered = crops.filter(c => {
    const matchCat = activeTab === 'All' || c.category === activeTab;
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.desc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  if (selected) {
    return (
      <div style={{ fontFamily:"'DM Sans', sans-serif", paddingBottom:'90px' }}>
        <div style={{ position:'relative' }}>
          <img src={selected.img} alt={selected.name} style={{ width:'100%', height:'240px', objectFit:'cover' }}/>
          <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }}/>
          <button onClick={() => setSelected(null)} style={{
            position:'absolute', top:'54px', left:'16px',
            background:'rgba(255,255,255,0.9)', border:'none', borderRadius:'50%',
            width:'38px', height:'38px', cursor:'pointer', fontSize:'18px',
            display:'flex', alignItems:'center', justifyContent:'center',
          }}>←</button>
          <div style={{ position:'absolute', bottom:'16px', left:'16px', right:'16px' }}>
            <div style={{ background:'rgba(255,255,255,0.2)', backdropFilter:'blur(4px)', display:'inline-block', padding:'3px 10px', borderRadius:'10px', marginBottom:'6px' }}>
              <span style={{ fontSize:'11px', color:'#fff', fontWeight:'500' }}>{selected.category}</span>
            </div>
            <h1 style={{ fontSize:'26px', fontWeight:'800', color:'#fff', fontFamily:"'Fraunces', serif" }}>{selected.emoji} {selected.name}</h1>
          </div>
        </div>

        <div style={{ padding:'20px' }}>
          <p style={{ fontSize:'14px', color:'#4a5e4a', lineHeight:'1.7', marginBottom:'20px' }}>{selected.desc}</p>

          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px', marginBottom:'24px' }}>
            {[
              { label:'Season', val:selected.season, icon:'📅' },
              { label:'Soil Type', val:selected.soil, icon:'🌍' },
              { label:'Water Needs', val:selected.water, icon:'💧' },
              { label:'Time to Harvest', val:selected.days, icon:'⏱️' },
            ].map(item => (
              <div key={item.label} style={{
                background:'#f4faf4', borderRadius:'14px', padding:'14px',
                border:'1px solid #e0eed0',
              }}>
                <div style={{ fontSize:'18px', marginBottom:'6px' }}>{item.icon}</div>
                <div style={{ fontSize:'11px', color:'#7a8c7a', fontWeight:'600', letterSpacing:'0.5px', marginBottom:'3px' }}>{item.label.toUpperCase()}</div>
                <div style={{ fontSize:'13px', fontWeight:'600', color:'#1a2e1a' }}>{item.val}</div>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize:'16px', fontWeight:'700', color:'#1a2e1a', marginBottom:'12px' }}>🌿 Farming Tips</h3>
          <div style={{ display:'flex', flexDirection:'column', gap:'8px' }}>
            {selected.tips.map((tip, i) => (
              <div key={i} style={{
                display:'flex', gap:'12px', alignItems:'flex-start',
                background:'#fff', borderRadius:'12px', padding:'12px',
                border:'1px solid #eef2ee',
              }}>
                <div style={{
                  width:'24px', height:'24px', borderRadius:'50%',
                  background:'#2d6a4f', color:'#fff', fontSize:'12px',
                  fontWeight:'700', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0,
                }}>{i+1}</div>
                <span style={{ fontSize:'14px', color:'#3a4e3a', lineHeight:'1.6' }}>{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ fontFamily:"'DM Sans', sans-serif", paddingBottom:'90px' }}>
      {/* Header */}
      <div style={{ background:'linear-gradient(160deg, #1b4332, #2d6a4f)', padding:'56px 20px 24px' }}>
        <div style={{ display:'flex', alignItems:'center', gap:'12px', marginBottom:'6px' }}>
          <div style={{ width:'36px', height:'36px', background:'rgba(255,255,255,0.15)', borderRadius:'12px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'18px' }}>🌱</div>
          <div>
            <h1 style={{ fontSize:'22px', fontWeight:'800', color:'#fff', fontFamily:"'Fraunces', serif" }}>Crop Guide</h1>
            <p style={{ fontSize:'12px', color:'rgba(255,255,255,0.65)' }}>Search any crop for a full farming guide</p>
          </div>
        </div>
        {/* Search */}
        <div style={{ marginTop:'16px', position:'relative' }}>
          <span style={{ position:'absolute', left:'14px', top:'50%', transform:'translateY(-50%)', fontSize:'16px' }}>🔍</span>
          <input value={search} onChange={e=>setSearch(e.target.value)}
            placeholder="Search any crop or fruit..."
            style={{
              width:'100%', background:'rgba(255,255,255,0.95)', border:'none',
              borderRadius:'50px', padding:'12px 16px 12px 42px', fontSize:'14px',
              outline:'none', fontFamily:"'DM Sans', sans-serif", color:'#1a2e1a',
            }}/>
        </div>
      </div>

      {/* Category Filter */}
      <div style={{ padding:'16px 0 0', overflowX:'auto' }}>
        <div style={{ display:'flex', gap:'8px', padding:'0 20px', width:'max-content' }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveTab(cat)} style={{
              padding:'8px 16px', borderRadius:'50px', border:'none',
              background: activeTab===cat ? '#2d6a4f' : '#f0f4f0',
              color: activeTab===cat ? '#fff' : '#4a5e4a',
              fontSize:'13px', fontWeight:'600', cursor:'pointer',
              fontFamily:"'DM Sans', sans-serif", whiteSpace:'nowrap',
            }}>{cat}</button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div style={{ padding:'16px 20px 0', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px' }}>
        {filtered.map(crop => (
          <div key={crop.id} onClick={() => setSelected(crop)} style={{
            borderRadius:'16px', overflow:'hidden', background:'#fff',
            boxShadow:'0 2px 14px rgba(0,0,0,0.07)', cursor:'pointer',
          }}>
            <div style={{ position:'relative' }}>
              <img src={crop.img} alt={crop.name} style={{ width:'100%', height:'130px', objectFit:'cover' }}/>
              <div style={{
                position:'absolute', bottom:'8px', left:'8px',
                background:'rgba(255,255,255,0.92)', borderRadius:'8px',
                padding:'3px 8px', fontSize:'10px', fontWeight:'600', color:'#2d6a4f',
              }}>{crop.category}</div>
            </div>
            <div style={{ padding:'12px' }}>
              <div style={{ fontSize:'15px', fontWeight:'700', color:'#1a2e1a', marginBottom:'3px' }}>{crop.name}</div>
              <div style={{ fontSize:'12px', color:'#7a8c7a', lineHeight:'1.4' }}>{crop.desc}</div>
              <div style={{ marginTop:'8px', fontSize:'11px', color:'#2d6a4f', fontWeight:'600', display:'flex', alignItems:'center', gap:'4px' }}>
                📅 {crop.season}
              </div>
            </div>
          </div>
        ))}
      </div>
      {filtered.length === 0 && (
        <div style={{ textAlign:'center', padding:'40px 20px', color:'#7a8c7a' }}>
          <div style={{ fontSize:'40px', marginBottom:'10px' }}>🌾</div>
          <div style={{ fontSize:'15px' }}>No crops found. Try a different search.</div>
        </div>
      )}
    </div>
  );
}
