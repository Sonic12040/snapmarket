const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');
// API Routes
router.use('/api', apiRoutes);

// HTML Routes
router.get('/error', (req, res) => {
  res.sendFile(path.join(__dirname, '../error.html'));
});
router.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Export
module.exports = router;
