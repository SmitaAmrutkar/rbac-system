const express = require('express');
const router = express.Router();
const { authenticate, authorize } = require('../middleware/auth');

router.get('/admin-data', authenticate, authorize('admin'), (req, res) => {
  res.send('Admin content');
});

router.get('/user-data', authenticate, (req, res) => {
  res.send('User content');
});

module.exports = router;
