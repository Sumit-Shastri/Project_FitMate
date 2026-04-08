// backend/routes/n8n.js
// This route is called by n8n on a schedule
// It returns all users with their today's stats + goals
// Protected by a simple secret key (not JWT) since n8n is server-to-server

const express   = require("express");
const User      = require("../models/User");
const DailyStat = require("../models/DailyStat");

const router = express.Router();

// Simple middleware — check secret key header sent by n8n
function n8nAuth(req, res, next) {
  const secret = req.headers["x-n8n-secret"];
  if (!secret || secret !== process.env.N8N_SECRET) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
}

// ─── GET /api/n8n/users-stats ─────────────────────────────────────────────────
// Returns array of users with today's stats + default goals
// n8n calls this, loops through each user, checks goals, sends email if needed
router.get("/users-stats", n8nAuth, async (req, res) => {
  try {
    const today = new Date().toISOString().split("T")[0];

    // Get all users
    const users = await User.find({}).select("name email").lean();

    // For each user, get today's stats
    const result = await Promise.all(
      users.map(async (user) => {
        const stat = await DailyStat.findOne({
          user: user._id,
          date: today,
        }).lean();

        return {
          userId:   user._id,
          name:     user.name,
          email:    user.email,
          date:     today,
          // Today's actual values (0 if not logged yet)
          water:    stat?.water    ?? 0,
          calories: stat?.calories ?? 0,
          bpm:      stat?.bpm      ?? 0,
          sleep:    stat?.sleep    ?? 0,
          // Default goals (you can make these per-user later)
          goals: {
            water:    3,
            calories: 2000,
            bpm:      80,
            sleep:    8,
          },
          // Pre-computed flags so n8n IF nodes are simple
          needsWater:    (stat?.water    ?? 0) < 3,
          needsCalories: (stat?.calories ?? 0) < 1400,  // below 70% of goal
          highBpm:       (stat?.bpm      ?? 0) > 100,
          needsSleep:    (stat?.sleep    ?? 0) < 6,
        };
      })
    );

    res.json(result);
  } catch (err) {
    console.error("n8n route error:", err);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
