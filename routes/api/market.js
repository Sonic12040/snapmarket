const express = require('express');
const router = express.Router();
const marketController = require('../../controllers/marketController');

//Controller Routes start here
// matches with /api/getallmarkets
router.get('/getallmarkets', marketController.getAllMarkets);
router.post('/handlesearch', marketController.handleSearch);




//Export
module.exports = router;