import React from 'react'

const Subscription = () => {
   return (
    <div className="card subscription-card">
      <div className="subscription-card__content">
        <p className="subscription-card__plan-label">Active Plan</p>
        <p className="subscription-card__plan-name">Standard - Monthly</p>
        <button className="btn btn--primary btn--full">⬆ Upgrade to Pro</button>
      </div>
      <div className="subscription-card__illustration">💪</div>
    </div>
  );
}

export default Subscription