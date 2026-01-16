// Agenda
const Agenda = require("agenda");

// Create agenda instance
const agenda = new Agenda({
  maxConcurrency: 20,
  processEvery: "10 seconds",
  db: {
    collection: "agendaJobs",
    address: process.env.MONGODB_URL,
    options: { useNewUrlParser: true, useUnifiedTopology: true },
  },
});

// Graceful shutdown
const graceful = () => {
  agenda.stop(() => {
    process.exit(0);
  });
};

process.on("SIGTERM", graceful);
process.on("SIGINT", graceful);

module.exports = agenda;
