const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5173;
const DATA_FILE = path.join(__dirname, 'data', 'results.json');

app.use(express.json());
app.use(express.static('public'));

// Load results from file
function loadResults() {
  if (!fs.existsSync(DATA_FILE)) return [];
  const data = fs.readFileSync(DATA_FILE, 'utf-8');
  return JSON.parse(data || '[]');
}

// Save results to file
function saveResults(results) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(results, null, 2));
}

// Save a quiz result
app.post('/api/results', (req, res) => {
  const { name, score, total, answers, timeSpent } = req.body;
  if (!name || score === undefined || !total) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const results = loadResults();
  results.push({
    id: Date.now(),
    name,
    score,
    total,
    percentage: Math.round((score / total) * 100),
    answers,
    timeSpent,
    date: new Date().toISOString()
  });
  saveResults(results);
  res.json({ success: true });
});

// Get all results (for teacher view)
app.get('/api/results', (req, res) => {
  const results = loadResults();
  res.json(results);
});

// Delete all results
app.delete('/api/results', (req, res) => {
  saveResults([]);
  res.json({ success: true });
});

app.listen(PORT, '::', () => {
  console.log(`Quiz server running on port ${PORT}`);
});
