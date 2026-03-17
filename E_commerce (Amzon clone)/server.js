const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root123',
  database: 'sample1',
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database');
});

app.post('/login', (req, res) => {
    const { userid, password } = req.body;
    console.log('[Backend] Data received from frontend - userid:', userid, 'password:', password);
  
    const query = 'SELECT hashtags FROM likes WHERE userid = ? AND password = ?';
    console.log('[Backend] Sending query to MySQL:', query);
  
    db.execute(query, [userid, password], (err, results) => {
      if (err) {
        console.error('[Backend] Database error:', err);
        return res.status(500).json({ success: false, message: 'Database error' });
      }
  
      if (results.length > 0) {
        const hashtags = results[0].hashtags.split(',');
        console.log('[Backend] Data fetched from MySQL:', hashtags);
        console.log('[Backend] Sending hashtags to frontend:', hashtags);
        return res.json({ success: true, hashtags });
      } else {
        console.log('[Backend] No matching data found for user');
        return res.status(401).json({ success: false, message: 'Invalid userid or password' });
      }
    });
  });

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
