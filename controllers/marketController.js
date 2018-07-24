const db = require('../models');

module.exports = {
//methods for the marketController will go here
    getAllMarkets: function(req, res) {
        db.Market
            .find({})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    handleSearch: function(req, res) {
        
        console.log(req.body.query)
        db.Market 
            .find({ZipCode: req.body.query})
            .then(foundMarkets => {
                console.log(req.body.filter);

                return res.json(foundMarkets);

            })
    }
};