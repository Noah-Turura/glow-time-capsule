const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());


  
app.get('/', (req, res) => {
    res.send('Welcome to the Glow Time Capsule API');
  });
  app.get('/characters', (req, res) => {
    db.all('SELECT * FROM characters', [], (err, rows) => {
      if (err) {
        console.log("Error:", err.message);
        res.status(500).json({ error: err.message });
      } else {
        console.log("Rows returned:", rows.length);
        res.json(rows);
      }
    });
  });
  

app.get('/characters/:id/items', (req, res) => {
    const characterId = req.params.id;
    
    db.all('SELECT * FROM items WHERE character_id = ?', [characterId], (err, rows) => {
        if (err) {
        res.status(500).json({ error: err.message });
        } else {
        res.json(rows);
        }
    });
    });

app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
    