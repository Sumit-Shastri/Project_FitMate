import React from 'react'

const VideoActivity = () => {
  return (
    <div className="card video-activity">
      <h3 className="card__title">Video Activity</h3>
      <p className="video-activity__sub">Total hours watched</p>
      <div className="progress-bar">
        <div className="progress-bar__fill" style={{ width: "50%" }} />
        <span className="video-activity__pct">78%</span>
      </div>
    </div>
  );
}

export default VideoActivity