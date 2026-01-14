const mongoose = require("mongoose");

const InvitedUserSchema = new mongoose.Schema(
  {
    inviteLinkId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "InviteLink",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    chatId: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

// Indexes
InvitedUserSchema.index({ inviteLinkId: 1, createdAt: -1 });
InvitedUserSchema.index({ userId: 1 }, { unique: true });
InvitedUserSchema.index({ chatId: 1 });

module.exports = mongoose.model("InvitedUser", InvitedUserSchema);
