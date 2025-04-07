const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./timecapsule.db');

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS characters (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      bio TEXT,
      personality TEXT,
      why_preserve TEXT,
      avatar_url TEXT
    )
  `);
  db.run(`
    CREATE TABLE IF NOT EXISTS items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      character_id INTEGER,
      title TEXT,
      description TEXT,
      type TEXT,
      url TEXT,
      FOREIGN KEY(character_id) REFERENCES characters(id)
    )
  `);
});

module.exports = db;
