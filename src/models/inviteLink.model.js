const mongoose = require("mongoose");

const InviteLinkSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: [
        /^[a-z0-9_-]+$/,
        "Havola nomi faqat harflar, raqamlar, - va _ dan iborat bo'lishi kerak",
      ],
    },
    description: {
      type: String,
      default: "",
      maxlength: 500,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    stats: {
      totalJoins: { type: Number, default: 0, min: 0 },
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Owner",
    },
  },
  { timestamps: true }
);

// Indexes
InviteLinkSchema.index({ name: 1 });
InviteLinkSchema.index({ isActive: 1, createdAt: -1 });

module.exports = mongoose.model("InviteLink", InviteLinkSchema);
