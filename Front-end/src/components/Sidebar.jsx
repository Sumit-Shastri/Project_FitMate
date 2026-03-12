import React, { useState } from 'react'

const Sidebar = ({navItems}) => {
     const [active, setActive] = useState(0);
    return (
    <aside className="sidebar">
      <div className="sidebar__logo">
        <div className="sidebar__logo-icon"><img src='finalLogo.png' alt="" /></div>
      </div>
      <nav className="sidebar__nav">
        {navItems.map((item, i) => (
          <button
            key={i}
            className={`sidebar__nav-btn ${i === active ? "sidebar__nav-btn--active" : ""}`}
            onClick={() => setActive(i)}
            title={item.label}
          >
            <span>{item.icon}</span>
          </button>
        ))}
      </nav>
      <button className="sidebar__help">?</button>
    </aside>
  );
}

export default Sidebar