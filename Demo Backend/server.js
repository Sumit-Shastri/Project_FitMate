// backend/server.js
const express    = require("express");
const mongoose   = require("mongoose");
const cors       = require("cors");
const dotenv     = require("dotenv");

dotenv.config();

const authRoutes       = require("./routes/auth");
const statsRoutes      = require("./routes/stats");
const workoutRoutes    = require("./routes/workouts");
const attendanceRoutes = require("./routes/attendance");
const n8nRoutes        = require("./routes/n8n");        // ← NEW

const app  = express();
const PORT = process.env.PORT || 3000;

// ─── CORS ─────────────────────────────────────────────────────────────────────
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "https://real-world-project-delta.vercel.app",
  "https://project-fitmate.onrender.com/api/n8n/users-stats",
  process.env.CLIENT_URL,
].filter(Boolean);

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    callback(new Error("Not allowed by CORS: " + origin));
  },
  credentials:    true,
  methods:        ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));
app.use(express.json());

// ─── Routes ───────────────────────────────────────────────────────────────────
app.use("/api/auth",       authRoutes);
app.use("/api/stats",      statsRoutes);
app.use("/api/workouts",   workoutRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/n8n",        n8nRoutes);                   // ← NEW

app.get("/api/health", (req, res) =>
  res.json({ status: "OK", port: PORT })
);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message || "Something went wrong" });
});

// ─── Start ────────────────────────────────────────────────────────────────────
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Atlas connected");
    app.listen(PORT, () =>
      console.log(`🚀 Server running on http://localhost:${PORT}`)
    );
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  });
