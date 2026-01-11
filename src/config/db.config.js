const mongoose = require("mongoose");
const mongoDbUrl = process.env.MONGODB_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoDbUrl);
    console.log("Mango Baza ulandi! ✅🥭🗿");
  } catch (err) {
    console.error("Mango Baza ulanmadi ❌🥭🗿", err);
    process.exit(1);
  }
};

module.exports = connectDB;
