import React from 'react'

const Progress = () => {
   return (
    <div className="card progress-card">
      <h3 className="card__title">Progress</h3>
      <div className="progress-card__body">
        <div className="progress-card__stats">
          <div className="progress-stat">
            <span className="progress-stat__value">56 kms</span>
            <span className="progress-stat__label">Weekly distance</span>
            <div className="progress-bar"><div className="progress-bar__fill" style={{ width: "56%" }} /></div>
          </div>
          <div className="progress-stat">
            <span className="progress-stat__value">236 kms</span>
            <span className="progress-stat__label">Total distance covered</span>
            <div className="progress-bar"><div className="progress-bar__fill" style={{ width: "78%" }} /></div>
          </div>
          <div className="progress-stat">
            <span className="progress-stat__value">10 hrs</span>
            <span className="progress-stat__label">Cardio offline</span>
            <div className="progress-bar"><div className="progress-bar__fill" style={{ width: "40%" }} /></div>
          </div>
        </div>
        <div className="progress-card__avatar">
          <img src="https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Running" />
        </div>
      </div>
    </div>
  );
}

export default Progress