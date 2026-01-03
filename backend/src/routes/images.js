const express = require('express');
const router = express.Router();

// GET /images - placeholder list
router.get('/', (req, res) => {
  res.json({
    images: [
      { id: 1, filename: 'example1.jpg', url: '/uploads/example1.jpg' },
      { id: 2, filename: 'example2.jpg', url: '/uploads/example2.jpg' }
    ]
  });
});

module.exports = router;
