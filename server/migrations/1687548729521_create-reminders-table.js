module.exports = {
    "up": "CREATE TABLE reminders (id VARCHAR(255) PRIMARY KEY, displayName VARCHAR(255) NOT NULL, category VARCHAR(255), last_reminded TIMESTAMP, scheduling_type VARCHAR(255) NOT NULL, scheduling_interval INT NOT NULL)",
    "down": "DROP TABLE reminders",
};
