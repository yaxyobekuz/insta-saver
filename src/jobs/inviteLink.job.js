const InviteLink = require("../models/inviteLink.model");
const InvitedUser = require("../models/invitedUser.model");

/**
 * Track invite link usage in background
 * @param {Object} agenda - Agenda instance
 */
const defineInviteLinkJob = (agenda) => {
  agenda.define("track invite link", async (job) => {
    const { inviteLinkName, userId, chatId } = job.attrs.data;

    try {
      // Find the invite link
      const inviteLink = await InviteLink.findOne({
        name: inviteLinkName,
        isActive: true,
      });

      if (!inviteLink) {
        console.log(`Invite link not found or inactive: ${inviteLinkName}`);
        return;
      }

      // Check if user already tracked
      const alreadyTracked = await InvitedUser.findOne({ userId });

      if (alreadyTracked) {
        console.log(`User ${userId} already tracked for invite links`);
        return;
      }

      // Create invited user record
      await InvitedUser.create({
        inviteLinkId: inviteLink._id,
        userId: userId,
        chatId: chatId,
      });

      // Increment invite link stats
      await InviteLink.findByIdAndUpdate(inviteLink._id, {
        $inc: { "stats.totalJoins": 1 },
      });

      console.log(
        `Successfully tracked invite link: ${inviteLinkName} for user ${userId}`
      );
    } catch (error) {
      console.error("Invite link tracking job error:", error.message);
      throw error; // Rethrow to let agenda handle retry
    }
  });
};

/**
 * Schedule invite link tracking job
 * @param {Object} agenda - Agenda instance
 * @param {String} inviteLinkName - Invite link name
 * @param {String} userId - User ID
 * @param {Number} chatId - Chat ID
 */
const scheduleInviteLinkTracking = async (
  agenda,
  inviteLinkName,
  userId,
  chatId
) => {
  try {
    await agenda.now("track invite link", {
      inviteLinkName,
      userId,
      chatId,
    });
    console.log(`Scheduled invite link tracking for: ${inviteLinkName}`);
  } catch (error) {
    console.error("Failed to schedule invite link tracking:", error.message);
  }
};

module.exports = { defineInviteLinkJob, scheduleInviteLinkTracking };
