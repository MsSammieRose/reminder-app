module.exports = {
    "up": "ALTER TABLE reminders RENAME COLUMN displayName TO display_name",
    "down": "ALTER TABLE reminders RENAME COLUMN display_name TO displayName",
}
