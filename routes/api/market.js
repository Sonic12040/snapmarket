const express = require('express');
const router = express.Router();
const marketController = require('../../controllers/marketController');

//Controller Routes start here
// matches with /api/getallmarkets
router.get('/getallmarkets', marketController.getAllMarkets);

// router.post('/handlesearch', marketController.handleSearch);
router.post('/handlesearch', function(req, res){
    console.log("HANDLE SEARCH",req)
});

router.get('/test', function(req, res){
    console.log("TEST");
})

router.post('/test', function(req, res){
    console.log("TEST");
})

//Export
module.exports = router;