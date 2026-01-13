const mongoose = require("mongoose");

const Post = new mongoose.Schema(
  {
    title: { type: String, default: null },
    status: { type: Number, default: 200 },
    source: { type: String, default: null },
    view_count: { type: Number, default: 0 },
    like_count: { type: Number, default: 0 },
    thumbnail: { type: String, default: null },
    downloadCount: { type: Number, default: 0 },
    url: { type: String, required: true, unique: true },
    medias: [
      {
        id: { type: String },
        type: { type: String },
        width: { type: Number },
        height: { type: Number },
        quality: { type: String },
        mimeType: { type: String },
        resolution: { type: String },
        qualityLabel: { type: String },
        url: { type: String, required: true },
        fileId: { type: String, required: true },
        extension: { type: String, default: null },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", Post);
