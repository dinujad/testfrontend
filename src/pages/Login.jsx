import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn, User, Lock, ArrowRight } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('https://testbackend-production-c5e4.up.railway.app/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Save token to localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        navigate('/dashboard');
      } else {
        setError(data.message || 'Login failed. Please check your credentials.');
      }
    } catch (err) {
      setError('Unable to connect to the server.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>

      <div className="login-container glass-panel">
        <div className="login-header">
          <div className="login-logo">
            <LogIn color="white" size={28} />
          </div>
          <h1 className="login-title">Welcome Back</h1>
          <p className="login-subtitle">Sign in to access your dashboard</p>
        </div>

        <form onSubmit={handleLogin}>
          {error && (
            <div style={{ padding: '0.875rem', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: '12px', color: '#ef4444', marginBottom: '1.5rem', fontSize: '0.875rem', textAlign: 'center' }}>
              {error}
            </div>
          )}

          <div className="input-group">
            <label className="input-label" htmlFor="email">Email Address</label>
            <div style={{ position: 'relative' }}>
              <User style={{ position: 'absolute', left: '16px', top: '14px', color: 'rgba(255,255,255,0.4)', pointerEvents: 'none' }} size={20} />
              <input
                id="email"
                type="email"
                className="input-field"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: '100%', paddingLeft: '44px', boxSizing: 'border-box' }}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label className="input-label" htmlFor="password">Password</label>
            <div style={{ position: 'relative' }}>
              <Lock style={{ position: 'absolute', left: '16px', top: '14px', color: 'rgba(255,255,255,0.4)', pointerEvents: 'none' }} size={20} />
              <input
                id="password"
                type="password"
                className="input-field"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: '100%', paddingLeft: '44px', boxSizing: 'border-box' }}
                required
              />
            </div>
          </div>

          <button type="submit" disabled={loading} className="btn btn-primary" style={{ width: '100%', marginTop: '1rem', height: '48px', opacity: loading ? 0.7 : 1 }}>
            <span>{loading ? 'Please Wait...' : 'Sign In'}</span>
            {!loading && <ArrowRight size={18} />}
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
