import React from 'react'

const MostTrending = () => {
  const videos = [
    { thumb: "https://picsum.photos/seed/fit1/80/60", views: "12M" },
    { thumb: "https://picsum.photos/seed/fit2/80/60", views: "8M" },
    { thumb: "https://picsum.photos/seed/fit3/80/60", views: "36M" },
  ];
  return (
    <div className="card most-trending">
      <div className="card__header">
        <h3>Most Trending</h3>
        <button className="btn-link">View All</button>
      </div>
      <div className="most-trending__list">
        {videos.map((v, i) => (
          <div key={i} className="trending-video">
            <img src={v.thumb} alt="video" />
            <span className="trending-video__views">{v.views}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MostTrending