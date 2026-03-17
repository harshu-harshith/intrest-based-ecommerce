const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MySQL connection setup
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root123', // ✅ Update this as needed
  database: 'sample1'
});

// Connect to MySQL and create table if needed
db.connect(err => {
  if (err) {
    console.error('MySQL connection error:', err);
    return;
  }
  console.log('✅ Connected to MySQL');

  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS likes (
      id INT AUTO_INCREMENT PRIMARY KEY,
      userid VARCHAR(50),
      password VARCHAR(50),
      hashtags TEXT,
      timestamp DATETIME
    )
  `;

  db.query(createTableQuery, (err, result) => {
    if (err) {
      console.error('⚠️ Table creation failed:', err);
    } else {
      console.log('✅ likes table is ready');
    }
  });
});

// POST /like - insert like info into database
app.post('/like', (req, res) => {
  const { userid, password, hashtags, timestamp } = req.body;

  if (!userid || !password || !hashtags || !timestamp) {
    return res.status(400).json({ success: false, error: 'Missing required fields' });
  }

  const formattedTimestamp = new Date(timestamp).toISOString().slice(0, 19).replace('T', ' ');

  const query = `
    INSERT INTO likes (userid, password, hashtags, timestamp)
    VALUES (?, ?, ?, ?)
  `;

  db.query(query, [userid, password, hashtags, formattedTimestamp], (err, result) => {
    if (err) {
      console.error('❌ Insert error:', err);
      return res.status(500).json({ success: false, error: 'Database error' });
    }

    res.json({ success: true, message: '✅ Like recorded successfully' });
  });
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running at: http://localhost:${port}`);
});
