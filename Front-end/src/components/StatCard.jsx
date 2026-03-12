import React from 'react'

const StatCard = ({ value, unit, label, emoji }) => {
   return (
    <div className="stat-card">
      <div className="stat-card__top">
        <span className="stat-card__value">{value}</span>
        <span className="stat-card__emoji">{emoji}</span>
      </div>
      <p className="stat-card__label">{label}</p>
    </div>
  );
}

export default StatCard