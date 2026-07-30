import Database from "better-sqlite3";

const db = new Database("qa-copilot.db");

db.exec(`
CREATE TABLE IF NOT EXISTS execution_history(

id INTEGER PRIMARY KEY AUTOINCREMENT,

execution_date TEXT,

total INTEGER,

passed INTEGER,

failed INTEGER,

skipped INTEGER,

ai_summary TEXT

);

CREATE TABLE IF NOT EXISTS failure_history(

id INTEGER PRIMARY KEY AUTOINCREMENT,

error_message TEXT,

classification TEXT,

ai_analysis TEXT,

created_at TEXT

);
`);

export default db;