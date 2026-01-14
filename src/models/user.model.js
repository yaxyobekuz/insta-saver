const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    lang: { type: String },
    lastName: { type: String },
    username: { type: String },
    chatId: { type: Number, required: true },
    firstName: { type: String, required: true },
    role: { type: String, enum: ["user", "owner"], default: "user" },
    stats: {
      total: { type: Number, default: 0, min: 0 },
      failed: { type: Number, default: 0, min: 0 },
      success: { type: Number, default: 0, min: 0 },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", User);
