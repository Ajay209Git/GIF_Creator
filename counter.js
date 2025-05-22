const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;
const COUNT_FILE = 'pageviews.txt';

function getCount() {
  if (!fs.existsSync(COUNT_FILE)) return 0;
  return parseInt(fs.readFileSync(COUNT_FILE, 'utf-8')) || 0;
}

function setCount(count) {
  fs.writeFileSync(COUNT_FILE, count.toString(), 'utf-8');
}

app.get('/pageviews', (req, res) => {
  let count = getCount() + 1;
  setCount(count);
  res.json({ count });
});

app.listen(PORT, () => {
  console.log(`Counter server running on port ${PORT}`);
});