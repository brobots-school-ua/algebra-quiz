const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 5173;
const PUBLIC_DIR = path.join(__dirname, 'public');
const DATA_FILE = path.join(__dirname, 'data', 'results.json');

// Password for accessing results (teacher only)
const TEACHER_PASSWORD = 'math2024';

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
};

function loadResults() {
  if (!fs.existsSync(DATA_FILE)) return [];
  const data = fs.readFileSync(DATA_FILE, 'utf-8');
  return JSON.parse(data || '[]');
}

function saveResults(results) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(results, null, 2));
}

function readBody(req) {
  return new Promise((resolve) => {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => resolve(body));
  });
}

function sendJson(res, data, status = 200) {
  res.writeHead(status, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
}

function serveStatic(res, filePath) {
  if (!fs.existsSync(filePath)) {
    res.writeHead(404);
    res.end('Not found');
    return;
  }
  const ext = path.extname(filePath);
  const mime = MIME_TYPES[ext] || 'application/octet-stream';
  res.writeHead(200, { 'Content-Type': mime });
  fs.createReadStream(filePath).pipe(res);
}

function checkAuth(req) {
  const authHeader = req.headers['x-teacher-password'];
  return authHeader === TEACHER_PASSWORD;
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);

  // API: verify password
  if (url.pathname === '/api/auth' && req.method === 'POST') {
    const body = JSON.parse(await readBody(req));
    if (body.password === TEACHER_PASSWORD) {
      return sendJson(res, { success: true });
    }
    return sendJson(res, { error: 'Wrong password' }, 401);
  }

  // API: results
  if (url.pathname === '/api/results') {
    // POST - save result (no auth needed, students submit results)
    if (req.method === 'POST') {
      const body = JSON.parse(await readBody(req));
      const { name, score, total, answers, timeSpent } = body;
      if (!name || score === undefined || !total) {
        return sendJson(res, { error: 'Missing fields' }, 400);
      }
      const results = loadResults();
      results.push({
        id: Date.now(),
        name, score, total,
        percentage: Math.round((score / total) * 100),
        answers, timeSpent,
        date: new Date().toISOString()
      });
      saveResults(results);
      return sendJson(res, { success: true });
    }

    // GET and DELETE require teacher password
    if (!checkAuth(req)) {
      return sendJson(res, { error: 'Unauthorized' }, 401);
    }

    if (req.method === 'GET') {
      return sendJson(res, loadResults());
    }
    if (req.method === 'DELETE') {
      saveResults([]);
      return sendJson(res, { success: true });
    }
  }

  // Static files
  let filePath = path.join(PUBLIC_DIR, url.pathname);
  if (url.pathname === '/') filePath = path.join(PUBLIC_DIR, 'index.html');
  serveStatic(res, filePath);
});

server.listen(PORT, '::', () => {
  console.log(`Quiz server running on port ${PORT}`);
});
