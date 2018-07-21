const router = require('express').Router();
const marketRoutes = require('./market');


//Market Routes
router.use('/market', marketRoutes);


module.exports = router;