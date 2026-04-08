// frontend/src/components/Sidebar.jsx
import { useApp } from "../context/AppContext.jsx";

const NAV = [
  { icon: "🏠", label: "Dashboard" },
  { icon: "📊", label: "Stats"     },
  { icon: "📅", label: "Schedule"  },
  { icon: "📋", label: "Workouts"  },
  { icon: "👤", label: "Profile"   },
  { icon: "⚙️", label: "Settings"  },
];

export default function Sidebar() {
  const { state, dispatch } = useApp();

  function handleLogout() {
    localStorage.removeItem("token");
    dispatch({ type: "LOGOUT" });
  }

  return (
    <aside className="sidebar">
      <div className="sidebar__logo">
        <div className="sidebar__logo-icon">▽</div>
      </div>

      <nav className="sidebar__nav">
        {NAV.map((item, i) => (
          <button
            key={i}
            className={`sidebar__nav-btn ${state.activeNav === i ? "sidebar__nav-btn--active" : ""}`}
            onClick={() => dispatch({ type: "SET_NAV", payload: i })}
            title={item.label}
          >
            <span className="sidebar__nav-icon">{item.icon}</span>
            <span className="sidebar__nav-label">{item.label}</span>
          </button>
        ))}
      </nav>

      <button className="sidebar__logout" onClick={handleLogout} title="Logout">
        <span className="sidebar__nav-icon">🚪</span>
        <span className="sidebar__nav-label">Logout</span>
      </button>
    </aside>
  );
}
