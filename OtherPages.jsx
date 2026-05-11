import React, { useEffect, useState } from 'react';
import { seasons, chatChannels } from '../data';
import { API_BASE } from '../api';

/* ─── CHAT ─── */
export function Chat({ user }) {
  const [channel, setChannel] = useState('General');
  const [messages, setMessages] = useState([
    { id:1, user:'Sarah K.', avatar:'S', text:'Anyone know the best time to plant maize in Jinja?', time:'2m ago', channel:'General' },
    { id:2, user:'Moses O.', avatar:'M', text:'Usually start of March rains. Make sure soil is warm enough!', time:'1m ago', channel:'General' },
    { id:3, user:'Aisha N.', avatar:'A', text:'I treat my dairy cows with this mineral supplement — massive improvement in milk yield.', time:'5m ago', channel:'Livestock' },
    { id:4, user:'David M.', avatar:'D', text:'Coffee prices at Kampala market are up this week — good time to sell!', time:'10m ago', channel:'Market' },
  ]);
  const [input, setInput] = useState('');

  useEffect(() => {
    async function loadMessages() {
      try {
        const response = await fetch(`${API_BASE}/api/messages`);
        if (response.ok) {
          const data = await response.json();
          setMessages(data);
        }
      } catch (error) {
        console.error('Failed to load messages:', error);
      }
    }
    loadMessages();
  }, []);

  const visible = messages.filter(m => m.channel === channel);

  const send = async () => {
    if (!input.trim()) return;
    const authorName = user ? user.name : 'You';
    try {
      const response = await fetch(`${API_BASE}/api/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: input, user: authorName, channel }),
      });
      if (response.ok) {
        const data = await response.json();
        setMessages((prev) => [...prev, data]);
        setInput('');
      }
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };

  return (
    <div style={{ fontFamily:"'DM Sans', sans-serif", display:'flex', flexDirection:'column', height:'100vh', paddingBottom:'90px' }}>
      {/* Header */}
      <div style={{ background:'linear-gradient(160deg, #1a237e, #283593)', padding:'56px 20px 20px' }}>
        <div style={{ display:'flex', alignItems:'center', gap:'12px', marginBottom:'4px' }}>
          <div style={{ width:'36px', height:'36px', background:'rgba(255,255,255,0.15)', borderRadius:'12px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'18px' }}>💬</div>
          <div>
            <h1 style={{ fontSize:'22px', fontWeight:'800', color:'#fff', fontFamily:"'Fraunces', serif" }}>Community Chat</h1>
            <p style={{ fontSize:'12px', color:'rgba(255,255,255,0.6)' }}>Share ideas • messages expire after 2 days</p>
          </div>
        </div>
      </div>

      {/* Channels */}
      <div style={{ overflowX:'auto', background:'#fff', borderBottom:'1px solid #eef2ee' }}>
        <div style={{ display:'flex', gap:'0', padding:'0', width:'max-content' }}>
          {chatChannels.map(ch => (
            <button key={ch} onClick={() => setChannel(ch)} style={{
              padding:'12px 18px', border:'none',
              background:'none', cursor:'pointer',
              fontFamily:"'DM Sans', sans-serif", fontSize:'13px', fontWeight:'600',
              color: channel===ch ? '#2d6a4f' : '#9aaa98',
              borderBottom: channel===ch ? '2px solid #2d6a4f' : '2px solid transparent',
              whiteSpace:'nowrap',
            }}>{ch}</button>
          ))}
        </div>
      </div>

      {/* Messages */}
      <div style={{ flex:1, overflowY:'auto', padding:'16px 20px', background:'#f8faf8', display:'flex', flexDirection:'column', gap:'12px' }}>
        {visible.length === 0 ? (
          <div style={{ textAlign:'center', padding:'40px 0', color:'#9aaa98' }}>
            <div style={{ fontSize:'48px', marginBottom:'10px' }}>💬</div>
            <div style={{ fontSize:'15px' }}>No messages yet. Start the conversation!</div>
          </div>
        ) : visible.map(msg => (
          <div key={msg.id} style={{
            display:'flex', gap:'10px', alignItems:'flex-start',
            flexDirection: msg.user==='You' ? 'row-reverse' : 'row',
          }}>
            {msg.user !== 'You' && (
              <div style={{
                width:'36px', height:'36px', borderRadius:'50%',
                background:'#2d6a4f', color:'#fff', display:'flex',
                alignItems:'center', justifyContent:'center', fontSize:'14px',
                fontWeight:'700', flexShrink:0,
              }}>{msg.avatar}</div>
            )}
            <div style={{ maxWidth:'75%' }}>
              {msg.user !== 'You' && <div style={{ fontSize:'11px', color:'#7a8c7a', marginBottom:'3px', fontWeight:'600' }}>{msg.user}</div>}
              <div style={{
                background: msg.user==='You' ? '#2d6a4f' : '#fff',
                color: msg.user==='You' ? '#fff' : '#1a2e1a',
                padding:'10px 14px', borderRadius: msg.user==='You' ? '16px 4px 16px 16px' : '4px 16px 16px 16px',
                fontSize:'14px', lineHeight:'1.5',
                boxShadow:'0 2px 8px rgba(0,0,0,0.06)',
              }}>{msg.text}</div>
              <div style={{ fontSize:'10px', color:'#b0bab0', marginTop:'3px', textAlign: msg.user==='You' ? 'right' : 'left' }}>{msg.time}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div style={{
        position:'fixed', bottom:'74px', left:0, right:0,
        background:'#fff', padding:'12px 16px',
        borderTop:'1px solid #eef2ee', display:'flex', gap:'10px',
      }}>
        <input value={input} onChange={e=>setInput(e.target.value)}
          onKeyDown={e => e.key==='Enter' && send()}
          placeholder="Type your message..."
          style={{
            flex:1, background:'#f4faf4', border:'1px solid #e0eed0',
            borderRadius:'50px', padding:'11px 18px', fontSize:'14px',
            outline:'none', fontFamily:"'DM Sans', sans-serif",
          }}/>
        <button onClick={send} style={{
          width:'44px', height:'44px', borderRadius:'50%', background:'#2d6a4f',
          border:'none', cursor:'pointer', display:'flex', alignItems:'center',
          justifyContent:'center', flexShrink:0, fontSize:'18px',
        }}>➤</button>
      </div>
    </div>
  );
}

/* ─── WEATHER ─── */
export function Weather() {
  const [location, setLocation] = useState('Kampala, Uganda');
  const locations = ['Kampala, Uganda','Gulu, Uganda','Mbarara, Uganda','Jinja, Uganda','Fort Portal, Uganda'];
  const [open, setOpen] = useState(false);

  const weatherData = {
    temp:'26°C', feels:'28°C', humidity:'72%', wind:'12 km/h',
    condition:'Partly Cloudy', icon:'⛅',
  };

  return (
    <div style={{ fontFamily:"'DM Sans', sans-serif", paddingBottom:'90px' }}>
      <div style={{ background:'linear-gradient(160deg, #0d47a1, #1565c0, #1976d2)', padding:'56px 20px 28px' }}>
        <div style={{ display:'flex', alignItems:'center', gap:'12px', marginBottom:'20px' }}>
          <div style={{ width:'36px', height:'36px', background:'rgba(255,255,255,0.15)', borderRadius:'12px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'18px' }}>⛅</div>
          <div>
            <h1 style={{ fontSize:'22px', fontWeight:'800', color:'#fff', fontFamily:"'Fraunces', serif" }}>Weather & Seasons</h1>
            <p style={{ fontSize:'12px', color:'rgba(255,255,255,0.65)' }}>Plan your farming with weather info</p>
          </div>
        </div>

        {/* Location selector */}
        <div style={{ position:'relative' }}>
          <button onClick={() => setOpen(!open)} style={{
            width:'100%', background:'rgba(255,255,255,0.15)', backdropFilter:'blur(8px)',
            border:'1px solid rgba(255,255,255,0.25)', borderRadius:'50px',
            padding:'12px 18px', color:'#fff', fontSize:'14px', fontWeight:'500',
            cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'space-between',
            fontFamily:"'DM Sans', sans-serif",
          }}>
            <span>📍 {location}</span><span style={{ opacity:0.7 }}>▾</span>
          </button>
          {open && (
            <div style={{
              position:'absolute', top:'calc(100% + 8px)', left:0, right:0,
              background:'#fff', borderRadius:'16px', overflow:'hidden',
              boxShadow:'0 8px 32px rgba(0,0,0,0.2)', zIndex:10,
            }}>
              {locations.map(loc => (
                <button key={loc} onClick={() => { setLocation(loc); setOpen(false); }} style={{
                  width:'100%', padding:'13px 18px', textAlign:'left', border:'none',
                  background: location===loc ? '#e8f5ee' : '#fff', cursor:'pointer',
                  fontSize:'14px', color:'#1a2e1a', fontFamily:"'DM Sans', sans-serif",
                  borderBottom:'1px solid #f0f4f0',
                }}>{loc}</button>
              ))}
            </div>
          )}
        </div>

        {/* Current weather card */}
        <div style={{
          marginTop:'20px', background:'rgba(255,255,255,0.12)', backdropFilter:'blur(12px)',
          borderRadius:'20px', padding:'20px', border:'1px solid rgba(255,255,255,0.2)',
        }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
            <div>
              <div style={{ fontSize:'52px', fontWeight:'800', color:'#fff', lineHeight:'1', fontFamily:"'Fraunces', serif" }}>{weatherData.temp}</div>
              <div style={{ fontSize:'14px', color:'rgba(255,255,255,0.8)', marginTop:'4px' }}>{weatherData.condition}</div>
            </div>
            <div style={{ fontSize:'64px' }}>{weatherData.icon}</div>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'12px', marginTop:'16px' }}>
            {[
              { label:'Feels Like', val:weatherData.feels, icon:'🌡️' },
              { label:'Humidity', val:weatherData.humidity, icon:'💧' },
              { label:'Wind', val:weatherData.wind, icon:'💨' },
            ].map(item => (
              <div key={item.label} style={{ textAlign:'center' }}>
                <div style={{ fontSize:'18px' }}>{item.icon}</div>
                <div style={{ fontSize:'13px', fontWeight:'600', color:'#fff' }}>{item.val}</div>
                <div style={{ fontSize:'10px', color:'rgba(255,255,255,0.6)' }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Seasons */}
      <div style={{ padding:'24px 20px 0' }}>
        <div style={{ display:'flex', alignItems:'center', gap:'8px', marginBottom:'16px' }}>
          <span style={{ fontSize:'18px' }}>📅</span>
          <h2 style={{ fontSize:'18px', fontWeight:'700', color:'#1a2e1a' }}>East African Farming Seasons</h2>
        </div>
        <div style={{ display:'flex', flexDirection:'column', gap:'12px' }}>
          {seasons.map((s, i) => (
            <div key={i} style={{
              background:s.bg, borderRadius:'16px', padding:'18px',
              border:`1px solid ${s.color}30`,
            }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'8px' }}>
                <div>
                  <div style={{ fontSize:'15px', fontWeight:'700', color:s.color }}>{s.icon} {s.name}</div>
                  <div style={{ fontSize:'12px', color:s.color, opacity:0.8, marginTop:'2px' }}>{s.months}</div>
                </div>
              </div>
              <p style={{ fontSize:'13px', color:'#3a4e3a', lineHeight:'1.6', marginBottom:'10px' }}>{s.desc}</p>
              <div style={{ display:'flex', flexWrap:'wrap', gap:'6px' }}>
                {s.crops.map(crop => (
                  <span key={crop} style={{
                    background:'rgba(255,255,255,0.7)', color:s.color,
                    padding:'3px 10px', borderRadius:'20px', fontSize:'11px', fontWeight:'600',
                  }}>{crop}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── PROFILE ─── */
export function Profile() {
  const [activities, setActivities] = useState([
    { id:1, text:'Planting rice', date:'2026-05-05', status:'planned', icon:'🌱' },
    { id:2, text:'Vaccinate dairy cows', date:'2026-05-10', status:'planned', icon:'💉' },
  ]);
  const [tab, setTab] = useState('activities');
  const [showAdd, setShowAdd] = useState(false);
  const [newActivity, setNewActivity] = useState({ text:'', date:'', icon:'🌱' });
  const [loading, setLoading] = useState(false);
  const icons = ['🌱','🐄','🌾','💧','🔬','✂️','📦','💉','🏗️','🌿'];

  useEffect(() => {
    async function loadActivities() {
      setLoading(true);
      try {
        const response = await fetch(`${API_BASE}/api/activities`);
        if (response.ok) {
          const data = await response.json();
          setActivities(data);
        }
      } catch (error) {
        console.error('Failed to load activities:', error);
      } finally {
        setLoading(false);
      }
    }
    loadActivities();
  }, []);

  const addActivity = async () => {
    if (!newActivity.text.trim()) return;
    try {
      const response = await fetch(`${API_BASE}/api/activities`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newActivity),
      });
      if (response.ok) {
        const data = await response.json();
        setActivities((prev) => [data, ...prev]);
        setNewActivity({ text:'', date:'', icon:'🌱' });
        setShowAdd(false);
      }
    } catch (error) {
      console.error('Failed to add activity:', error);
    }
  };

  const statusColors = { planned:'#e8f0fe', completed:'#e8f5ee', 'in-progress':'#fff8e1' };
  const statusTextColors = { planned:'#1565c0', completed:'#2d6a4f', 'in-progress':'#d4860a' };

  const toggleStatus = (id) => {
    setActivities(prev => prev.map(a => a.id===id ? {
      ...a, status: a.status==='planned' ? 'in-progress' : a.status==='in-progress' ? 'completed' : 'planned'
    } : a));
  };

  const deleteActivity = (id) => setActivities(prev => prev.filter(a => a.id!==id));

  return (
    <div style={{ fontFamily:"'DM Sans', sans-serif", paddingBottom:'90px' }}>
      {/* Header */}
      <div style={{ background:'linear-gradient(160deg, #1b4332, #2d6a4f)', padding:'56px 20px 24px' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'12px' }}>
            <div style={{ width:'36px', height:'36px', background:'rgba(255,255,255,0.15)', borderRadius:'12px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'18px' }}>👤</div>
            <div>
              <h1 style={{ fontSize:'22px', fontWeight:'800', color:'#fff', fontFamily:"'Fraunces', serif" }}>My Farm</h1>
              <p style={{ fontSize:'12px', color:'rgba(255,255,255,0.65)' }}>Track your activities</p>
            </div>
          </div>
          <button style={{ background:'rgba(255,255,255,0.12)', border:'1px solid rgba(255,255,255,0.2)', color:'#fff', padding:'8px 14px', borderRadius:'20px', fontSize:'12px', cursor:'pointer', fontFamily:"'DM Sans', sans-serif" }}>
            ↪ Logout
          </button>
        </div>
      </div>

      {/* User Card */}
      <div style={{ margin:'20px 20px 0', background:'#fff', borderRadius:'20px', padding:'18px', boxShadow:'0 2px 14px rgba(0,0,0,0.07)', display:'flex', alignItems:'center', gap:'14px' }}>
        <div style={{
          width:'54px', height:'54px', borderRadius:'50%', background:'linear-gradient(135deg, #2d6a4f, #40916c)',
          display:'flex', alignItems:'center', justifyContent:'center', fontSize:'22px', fontWeight:'700', color:'#fff',
        }}>R</div>
        <div>
          <div style={{ fontSize:'17px', fontWeight:'700', color:'#1a2e1a' }}>Ronald Barigye</div>
          <div style={{ fontSize:'13px', color:'#7a8c7a' }}>ronaldbarigye64@gmail.com</div>
          <div style={{ marginTop:'4px', display:'flex', gap:'8px' }}>
            <span style={{ background:'#e8f5ee', color:'#2d6a4f', fontSize:'11px', fontWeight:'600', padding:'2px 8px', borderRadius:'8px' }}>🌱 {activities.filter(a=>a.status==='planned').length} planned</span>
            <span style={{ background:'#e8f5ee', color:'#40916c', fontSize:'11px', fontWeight:'600', padding:'2px 8px', borderRadius:'8px' }}>✅ {activities.filter(a=>a.status==='completed').length} done</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ margin:'16px 20px 0', background:'#f0f4f0', borderRadius:'50px', padding:'4px', display:'flex' }}>
        {['activities','favorites'].map(t => (
          <button key={t} onClick={() => setTab(t)} style={{
            flex:1, padding:'10px', borderRadius:'50px', border:'none',
            background: tab===t ? '#fff' : 'transparent',
            color: tab===t ? '#1a2e1a' : '#7a8c7a', fontSize:'14px', fontWeight:'600',
            cursor:'pointer', fontFamily:"'DM Sans', sans-serif", textTransform:'capitalize',
            boxShadow: tab===t ? '0 2px 8px rgba(0,0,0,0.08)' : 'none',
          }}>{t}</button>
        ))}
      </div>

      {tab==='activities' && (
        <div style={{ padding:'16px 20px 0' }}>
          <button onClick={() => setShowAdd(!showAdd)} style={{
            display:'flex', alignItems:'center', gap:'8px', background:'#2d6a4f',
            color:'#fff', border:'none', borderRadius:'50px', padding:'11px 20px',
            fontSize:'14px', fontWeight:'600', cursor:'pointer', marginBottom:'16px',
            fontFamily:"'DM Sans', sans-serif",
          }}>+ Add Activity</button>

          {showAdd && (
            <div style={{ background:'#fff', borderRadius:'16px', padding:'16px', marginBottom:'16px', boxShadow:'0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ marginBottom:'12px' }}>
                <div style={{ fontSize:'12px', color:'#7a8c7a', fontWeight:'600', marginBottom:'6px' }}>ACTIVITY</div>
                <input value={newActivity.text} onChange={e=>setNewActivity(p=>({...p,text:e.target.value}))}
                  placeholder="e.g. Planting maize"
                  style={{ width:'100%', border:'1px solid #e0eed0', borderRadius:'10px', padding:'10px 12px', fontSize:'14px', outline:'none', fontFamily:"'DM Sans', sans-serif" }}/>
              </div>
              <div style={{ marginBottom:'12px' }}>
                <div style={{ fontSize:'12px', color:'#7a8c7a', fontWeight:'600', marginBottom:'6px' }}>DATE</div>
                <input type="date" value={newActivity.date} onChange={e=>setNewActivity(p=>({...p,date:e.target.value}))}
                  style={{ width:'100%', border:'1px solid #e0eed0', borderRadius:'10px', padding:'10px 12px', fontSize:'14px', outline:'none', fontFamily:"'DM Sans', sans-serif" }}/>
              </div>
              <div style={{ marginBottom:'14px' }}>
                <div style={{ fontSize:'12px', color:'#7a8c7a', fontWeight:'600', marginBottom:'8px' }}>ICON</div>
                <div style={{ display:'flex', flexWrap:'wrap', gap:'8px' }}>
                  {icons.map(ic => (
                    <button key={ic} onClick={() => setNewActivity(p=>({...p,icon:ic}))} style={{
                      width:'36px', height:'36px', borderRadius:'10px', border:'2px solid',
                      borderColor: newActivity.icon===ic ? '#2d6a4f' : '#e0eed0',
                      background: newActivity.icon===ic ? '#e8f5ee' : '#fff',
                      fontSize:'18px', cursor:'pointer',
                    }}>{ic}</button>
                  ))}
                </div>
              </div>
              <div style={{ display:'flex', gap:'8px' }}>
                <button onClick={addActivity} style={{ flex:1, background:'#2d6a4f', color:'#fff', border:'none', borderRadius:'10px', padding:'12px', fontSize:'14px', fontWeight:'600', cursor:'pointer', fontFamily:"'DM Sans', sans-serif" }}>Save</button>
                <button onClick={() => setShowAdd(false)} style={{ flex:1, background:'#f0f4f0', color:'#4a5e4a', border:'none', borderRadius:'10px', padding:'12px', fontSize:'14px', fontWeight:'600', cursor:'pointer', fontFamily:"'DM Sans', sans-serif" }}>Cancel</button>
              </div>
            </div>
          )}

          <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
            {activities.map(a => (
              <div key={a.id} style={{ background:'#fff', borderRadius:'14px', padding:'14px', display:'flex', alignItems:'center', gap:'12px', boxShadow:'0 2px 8px rgba(0,0,0,0.05)' }}>
                <div style={{ width:'38px', height:'38px', borderRadius:'12px', background:'#f4faf4', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'20px', flexShrink:0 }}>{a.icon}</div>
                <div style={{ flex:1 }}>
                  <div style={{ fontSize:'14px', fontWeight:'600', color:'#1a2e1a' }}>{a.text}</div>
                  <div style={{ fontSize:'12px', color:'#9aaa98', marginTop:'2px' }}>📅 {a.date}</div>
                </div>
                <button onClick={() => toggleStatus(a.id)} style={{
                  background:statusColors[a.status], color:statusTextColors[a.status],
                  border:'none', borderRadius:'20px', padding:'4px 10px',
                  fontSize:'11px', fontWeight:'600', cursor:'pointer', fontFamily:"'DM Sans', sans-serif",
                }}>{a.status}</button>
                <button onClick={() => deleteActivity(a.id)} style={{ background:'none', border:'none', color:'#ccc', fontSize:'16px', cursor:'pointer' }}>🗑</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab==='favorites' && (
        <div style={{ textAlign:'center', padding:'50px 20px', color:'#9aaa98' }}>
          <div style={{ fontSize:'48px', marginBottom:'12px' }}>⭐</div>
          <div style={{ fontSize:'16px', fontWeight:'600', marginBottom:'6px', color:'#4a5e4a' }}>No favorites yet</div>
          <div style={{ fontSize:'14px' }}>Browse crops or livestock and tap ⭐ to save them here.</div>
        </div>
      )}
    </div>
  );
}
