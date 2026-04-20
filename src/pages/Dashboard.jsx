import { useNavigate } from 'react-router-dom';
import { Home, BarChart2, Users, Settings, LogOut, Bell, Search, LayoutDashboard } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real app, clear tokens, user state, etc.
    navigate('/login');
  };

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="sidebar-logo-small">
            <LayoutDashboard color="white" size={20} />
          </div>
          <h2 className="sidebar-title">Nexus</h2>
        </div>
        
        <nav className="nav-links">
          <a href="#" className="nav-item active">
            <Home size={20} />
            Overview
          </a>
          <a href="#" className="nav-item">
            <BarChart2 size={20} />
            Analytics
          </a>
          <a href="#" className="nav-item">
            <Users size={20} />
            Customers
          </a>
          <a href="#" className="nav-item">
            <Settings size={20} />
            Settings
          </a>
        </nav>
        
        <div style={{ padding: '1.5rem 1rem' }}>
          <button 
            className="nav-item" 
            style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', color: '#ef4444' }}
            onClick={handleLogout}
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="topbar">
          <h1 className="page-title">Dashboard Overview</h1>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ position: 'relative', width: '250px' }}>
              <Search style={{ position: 'absolute', left: '12px', top: '10px', color: 'rgba(255,255,255,0.4)' }} size={18} />
              <input 
                type="text" 
                className="input-field" 
                placeholder="Search..." 
                style={{ width: '100%', padding: '0.6rem 1rem 0.6rem 2.5rem', borderRadius: '100px', boxSizing: 'border-box' }}
              />
            </div>
            
            <button className="btn" style={{ background: 'var(--surface-color)', padding: '0.6rem', borderRadius: '50%' }}>
              <Bell size={20} color="var(--text-secondary)" />
            </button>
            
            <div className="user-profile">
              <div className="avatar"></div>
              <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>Admin User</span>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="dashboard-grid">
          <div className="stat-card glass-panel">
            <div className="stat-header">
              <span>Total Revenue</span>
              <BarChart2 size={20} color="var(--accent-color)" />
            </div>
            <h3 className="stat-value">$124,563.00</h3>
            <div className="stat-change change-positive">
              +14.5% from last month
            </div>
          </div>

          <div className="stat-card glass-panel">
            <div className="stat-header">
              <span>Active Users</span>
              <Users size={20} color="#a855f7" />
            </div>
            <h3 className="stat-value">8,342</h3>
            <div className="stat-change change-positive">
              +5.2% from last week
            </div>
          </div>

          <div className="stat-card glass-panel">
            <div className="stat-header">
              <span>System Status</span>
              <Settings size={20} color="#10b981" />
            </div>
            <h3 className="stat-value" style={{ color: '#10b981' }}>Healthy</h3>
            <div className="stat-change" style={{ background: 'rgba(255,255,255,0.05)' }}>
              All services operational
            </div>
          </div>
        </div>
        
        {/* Decorative elements for the dashboard */}
        <div className="blob blob-1" style={{ width: '600px', height: '600px', top: '-20%', right: '-10%', left: 'auto', background: 'rgba(99, 102, 241, 0.15)' }}></div>
        <div className="blob blob-2" style={{ width: '400px', height: '400px', bottom: '-10%', left: '-5%', background: 'rgba(168, 85, 247, 0.1)' }}></div>
      </main>
    </div>
  );
};

export default Dashboard;
