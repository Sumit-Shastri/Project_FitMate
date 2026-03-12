import React from 'react'

const Payment = () => {
    return (
    <div className="card payment-card">
      <h3 className="card__title">Payment</h3>
      <p className="payment-card__renew">Renew by <strong>22 December 2023</strong></p>
      <div className="payment-card__row">
        <span>Default Payment Method</span>
        <div className="payment-card__actions">
          <span className="payment-tag">Credit Card 0018</span>
          <button className="btn btn--outline">Change</button>
        </div>
      </div>
      <div className="payment-card__row">
        <span>Available Plans</span>
        <div className="payment-card__actions">
          <span className="payment-tag">Monthly | Yearly | Other</span>
          <button className="btn btn--outline">View</button>
        </div>
      </div>
      <button className="btn btn--primary payment-card__pay">Pay Now</button>
    </div>
  );
}

export default Payment