const User = require("../models/User");
const Stats = require("../models/Stats");

/**
 * Update global statistics
 * @param {Object} updates - Updates object { total: 1, success: 1, ... }
 */
const updateGlobalStats = async (updates) => {
  try {
    // Check if stats not exist
    const stats = await Stats.findOne();
    if (!stats) {
      await Stats.create(updates);
      return;
    }

    // Update stats
    Object.keys(updates).forEach((key) => {
      if (stats[key] !== undefined) {
        stats[key] += updates[key];
      }
    });

    await stats.save();
  } catch (error) {
    console.error("Error updating global stats:", error);
  }
};

/**
 * Update user statistics
 * @param {Number} chatId - User chat ID
 * @param {Object} updates - Updates object { total: 1, success: 1, ... }
 */
const updateUserStats = async (chatId, updates) => {
  try {
    const user = await User.findOne({ chatId });
    if (!user) return;

    // Update user stats
    Object.keys(updates).forEach((key) => {
      if (user.stats[key] !== undefined) {
        user.stats[key] += updates[key];
      }
    });

    await user.save();
  } catch (error) {
    console.error("Error updating user stats:", error);
  }
};

/**
 * Track video download success
 * @param {Number} chatId - User chat ID
 */
const trackVideoSuccess = async (chatId) => {
  // Update global stats
  await updateGlobalStats({ total: 1, success: 1 });

  // Update user stats
  await updateUserStats(chatId, { total: 1, success: 1 });
};

/**
 * Track video download failure
 * @param {Number} chatId - User chat ID
 */
const trackVideoFailure = async (chatId) => {
  // Update global stats
  await updateGlobalStats({ total: 1, failed: 1 });

  // Update user stats
  await updateUserStats(chatId, { total: 1, failed: 1 });
};

/**
 * Get global statistics
 * @returns {Object} Stats object
 */
const getGlobalStats = async () => {
  try {
    const stats = await Stats.findOne();
    return stats || { total: 0, users: 0, success: 0, failed: 0 };
  } catch (error) {
    console.error("Error getting global stats:", error);
    return { total: 0, users: 0, success: 0, failed: 0 };
  }
};

/**
 * Get user statistics
 * @param {Number} chatId - User chat ID
 * @returns {Object} User stats object
 */
const getUserStats = async (chatId) => {
  try {
    const user = await User.findOne({ chatId });
    return user?.stats || { total: 0, success: 0, failed: 0 };
  } catch (error) {
    console.error("Error getting user stats:", error);
    return { total: 0, success: 0, failed: 0 };
  }
};

/**
 * Get top users
 * @param {Number} limit - Number of users to fetch (default: 10)
 * @returns {Array} Top users list
 */
const getTopUsers = async (limit = 10) => {
  try {
    const users = await User.find()
      .sort({ "stats.success": -1 })
      .limit(limit)
      .select("firstName lastName username stats");

    return users;
  } catch (error) {
    console.error("Error getting top users:", error);
    return [];
  }
};

module.exports = {
  getTopUsers,
  getUserStats,
  getGlobalStats,
  updateUserStats,
  trackVideoSuccess,
  trackVideoFailure,
  updateGlobalStats,
};
