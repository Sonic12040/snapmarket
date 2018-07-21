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
        console.log("hello from handle search")
        db.Market 
            .find({ZipCode: req.body.query})
            .then(foundMarkets => {
                console.log(foundMarkets);
                if (req.body.filter.length > 0) {

                    const results = [];

                    for (let market of foundMarkets){
                        for (let benefit in market.Benefits) {
                            
                            for (let item of req.body.filter) {
                                if (market.Benefits[benefit].toUpperCase() === item) {
                                    results.push(market);
                                } 
                            }
                        }
                    }
                    console.log(results);
                    res.json(results);
                } else {
                    res.json(foundMarkets);
                }

            })
    }
};