const express = require('express');
const router = express.Router();
const marketController = require('../../controllers/marketController');

//Controller Routes start here
router.get('/api/getallmarkets', marketController.getAllMarkets);



//Export
module.exports = router;