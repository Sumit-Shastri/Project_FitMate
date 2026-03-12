import React from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const WorkoutActivity = ({workoutData}) => {
   return (
      <div className="card workout-activity">
        <div className="card__header">
          <h3>Workout Activity</h3>
          <div className="workout-activity__legend">
            <span className="legend-dot legend-dot--online" /> Online
            <span className="legend-dot legend-dot--offline" /> Offline
          </div>
        </div>
        <ResponsiveContainer width="100%" height={160}>
          <AreaChart data={workoutData}>
            <defs>
              <linearGradient id="colorOnline" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#c6f135" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#c6f135" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorOffline" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1a1a2e" stopOpacity={0.5} />
                <stop offset="95%" stopColor="#1a1a2e" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="day" tick={{ fontSize: 11, fill: "#999" }} axisLine={false} tickLine={false} />
            <YAxis hide />
            <Tooltip
              contentStyle={{ background: "#1a1a2e", border: "none", borderRadius: 8, color: "#fff", fontSize: 12 }}
            />
            <Area type="monotone" dataKey="online" stroke="#c6f135" strokeWidth={2} fill="url(#colorOnline)" dot={false} />
            <Area type="monotone" dataKey="offline" stroke="#1a1a2e" strokeWidth={2} fill="url(#colorOffline)" dot={false} />
          </AreaChart>
        </ResponsiveContainer>
        <div className="workout-activity__badge">57 kg</div>
      </div>
    );
}

export default WorkoutActivity