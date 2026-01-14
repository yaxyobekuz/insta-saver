const mongoose = require("mongoose");

const Stats = new mongoose.Schema(
  {
    total: { type: Number, default: 0, min: 0 },
    users: { type: Number, default: 0, min: 0 },
    failed: { type: Number, default: 0, min: 0 },
    success: { type: Number, default: 0, min: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Stats", Stats);
