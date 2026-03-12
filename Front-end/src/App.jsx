import { useState } from "react";

import "./App.scss";
import Sidebar from "./components/Sidebar";
import StatCard from "./components/StatCard";
import WorkoutActivity from "./components/WorkoutActivity";
import Progress from "./components/Progress";
import Subscription from "./components/Subscription";
import Payment from "./components/Payment";
import OfflineExercises from "./components/OfflineExercises";
import ProfileCard from "./components/ProfileCard";
import Calendar from "./components/Calendar";
import VideoActivity from "./components/VideoActivity";
import MostTrending from "./components/MostTrending";
// ─── Mock Data ────────────────────────────────────────────────
const workoutData = [
  { day: "Sun", online: 20, offline: 40 },
  { day: "Mon", online: 45, offline: 25 },
  { day: "Tue", online: 30, offline: 55 },
  { day: "Wed", online: 57, offline: 20 },
  { day: "Thu", online: 40, offline: 45 },
  { day: "Fri", online: 55, offline: 30 },
  { day: "Sat", online: 50, offline: 40 },
];

const calendarDays = [
  { date: null, label: "" },
  { date: 1 },
  { date: 2 },
  { date: 3 },
  { date: 4 },
  { date: 5 },
  { date: 6 },
  { date: 7, active: true },
  { date: 8, active: true },
  { date: 9, highlight: true },
  { date: 10, today: true },
  { date: 11 },
  { date: 12 },
  { date: 13 },
  { date: 14 },
  { date: 15 },
  { date: 16 },
  { date: 17 },
  { date: 18 },
  { date: 19 },
  { date: 20 },
  { date: 21 },
  { date: 22 },
  { date: 23 },
  { date: 24 },
  { date: 25 },
  { date: 26 },
  { date: 27 },
  { date: 28 },
  { date: 29 },
  { date: 30 },
];

const navItems = [
  { icon: "🏠", label: "Home", active: true },
  { icon: "📊", label: "Stats" },
  { icon: "📅", label: "Schedule" },
  { icon: "📋", label: "Plans" },
  { icon: "👤", label: "Profile" },
  { icon: "⚙️", label: "Settings" },
];



export default function App() {
  return (
    <div className="dashboard">
      <Sidebar navItems={navItems}/>
      <main className="dashboard__main">
        {/* Header */}
        <header className="dashboard__header">
          <div>
            <h1 className="dashboard__greeting">Good Morning, Albert</h1>
            <p className="dashboard__sub">Let's do some workout today...</p>
          </div>
          <div className="dashboard__header-actions">
            <button className="btn btn--pill">Weekly ▾</button>
            <button className="icon-btn">🔍</button>
            <button className="icon-btn">🔔</button>
          </div>
        </header>

        {/* Stat Cards */}
        <div className="stats-row">
          <StatCard value="1.2" label="Water liters" emoji="💧" />
          <StatCard value="2.54" label="Kilo Calories" emoji="🔥" />
          <StatCard value="124" label="Beats per minute" emoji="❤️" />
          <StatCard value="13" label="Hours Sleeping" emoji="⏰" />
        </div>

        {/* Middle Row */}
        <div className="middle-row">
          <WorkoutActivity  workoutData={workoutData}/>
          <Progress />
        </div>

        {/* Bottom Row */}
        <div className="bottom-row">
          <Subscription />
          <Payment />
          <OfflineExercises />
        </div>
      </main>

      {/* Right Panel */}
      <aside className="right-panel">
        <ProfileCard/>
        <Calendar calendarDays={calendarDays}/>
        <VideoActivity />
        <MostTrending />
      </aside>
    </div>
  );
}
