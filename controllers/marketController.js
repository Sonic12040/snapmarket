const db = require('../models');

module.exports = {
// methods for the marketController will go here
  getAllMarkets(req, res) {
    db.Market
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  handleSearch(req, res) {
    db.Market
      .find({ ZipCode: req.body.query })
      .then(foundMarkets => res.json(foundMarkets));
  },
};
