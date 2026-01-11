const mongoose = require("mongoose");

const Video = new mongoose.Schema(
  {
    url: { type: String, required: true, unique: true },
    fileId: { type: String, required: true },
    downloadCount: { type: Number, default: 1, min: 1 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Video", Video);
