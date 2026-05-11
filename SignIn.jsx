import React, { useState } from 'react';
import { API_BASE } from '../api';

export default function SignIn({ onSignIn }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const submit = async (event) => {
    event.preventDefault();
    setError('');
    if (!name.trim() || !email.trim()) {
      setError('Please enter your name and email.');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${API_BASE}/api/auth/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim() }),
      });
      if (!response.ok) {
        const body = await response.json();
        throw new Error(body?.error || 'Sign in failed');
      }
      const user = await response.json();
      onSignIn(user);
    } catch (err) {
      console.error(err);
      setError(err.message || 'Unable to sign in.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f3f7fb', padding: '40px 20px' }}>
      <div style={{ width: '100%', maxWidth: '420px', background: '#fff', borderRadius: '28px', padding: '32px', boxShadow: '0 18px 45px rgba(16, 42, 67, 0.08)' }}>
        <h1 style={{ margin: 0, fontSize: '28px', color: '#102a43' }}>Sign in to UGConnect</h1>
        <p style={{ margin: '10px 0 24px', color: '#627d98' }}>Access job applications, course enrollment, and your profile activity.</p>
        <form onSubmit={submit} style={{ display: 'grid', gap: '18px' }}>
          <label style={{ display: 'grid', gap: '8px', fontSize: '14px', color: '#334e68' }}>
            Name
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" style={{ borderRadius: '16px', border: '1px solid #d9e2ec', padding: '14px 16px', fontSize: '14px', outline: 'none' }} />
          </label>
          <label style={{ display: 'grid', gap: '8px', fontSize: '14px', color: '#334e68' }}>
            Email
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" style={{ borderRadius: '16px', border: '1px solid #d9e2ec', padding: '14px 16px', fontSize: '14px', outline: 'none' }} />
          </label>
          {error && <div style={{ color: '#c2410c', fontSize: '13px' }}>{error}</div>}
          <button type="submit" disabled={loading} style={{ border: 'none', borderRadius: '18px', background: '#004e89', color: '#fff', padding: '14px 18px', fontWeight: 700, fontSize: '14px', cursor: 'pointer' }}>
            {loading ? 'Signing in…' : 'Continue'}
          </button>
        </form>
      </div>
    </div>
  );
}
