import React from 'react'

const OfflineExercises = () => {
    const exercises = [
    { title: "Cardio Exercises", desc: "Boost your energy everyday at home", time: "1:36" },
    { title: "Single-leg stands", desc: "Daily Exercise with leg stands", time: "2:10" },
  ];
  return (
    <div className="card offline-exercises">
      <h3 className="card__title">Offline Exercises</h3>
      {exercises.map((ex, i) => (
        <div key={i} className="exercise-item">
          <div className="exercise-item__thumb">
            <span className="exercise-item__play">▶</span>
            <span className="exercise-item__time">{ex.time}</span>
          </div>
          <div className="exercise-item__info">
            <p className="exercise-item__title">{ex.title}</p>
            <p className="exercise-item__desc">{ex.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OfflineExercises