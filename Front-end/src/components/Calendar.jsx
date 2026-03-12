import React from 'react'

const Calendar = ({calendarDays}) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <div className="card calendar">
      <div className="card__header">
        <h3>Attendance</h3>
        <span className="calendar__month">June 2021 ▾</span>
      </div>
      <div className="calendar__grid-header">
        {days.map((d) => <span key={d}>{d}</span>)}
      </div>
      <div className="calendar__grid">
        {calendarDays.map((d, i) => (
          <span
            key={i}
            className={`calendar__day ${d.active ? "calendar__day--active" : ""} ${d.today ? "calendar__day--today" : ""} ${d.highlight ? "calendar__day--highlight" : ""} ${!d.date ? "calendar__day--empty" : ""}`}
          >
            {d.date || ""}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Calendar