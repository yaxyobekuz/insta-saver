// ENV config
require("dotenv").config();

// Db connection
const connectDB = require("./src/config/db");

(async () => {
  await connectDB();
  require("./src/bot");
})();
