import React from 'react'

const ProfileCard = () => {
    return (
        <div className="profile-card">
            <div className="profile-card__top">
                <img src="https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Tracy" className="profile-card__avatar" />
                <div>
                    <h3 className="profile-card__name">Alerbt Einstein</h3>
                    <p className="profile-card__age">26 Years</p>
                </div>
            </div>
            <div className="profile-card__stats">
                <div><span className="profile-stat__value">5.10 inch</span><span className="profile-stat__label">Height</span></div>
                <div><span className="profile-stat__value">62 kg</span><span className="profile-stat__label">Weight</span></div>
                <div><span className="profile-stat__value">Male</span><span className="profile-stat__label">Gender</span></div>
            </div>
        </div>
    );
}

export default ProfileCard