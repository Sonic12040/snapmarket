const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const marketSchema = new Schema({
    MarketName: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    Coordinates: {
        Latitude: {
            type: String,
            required: true
        },
        Longitude: {
            type: String,
            required: true
        }
    },
    ZipCode: {
        type: String,
        required: true
    },
    Benefits: {
        type: [String],
        required: true
    },
    Items: {
        type: [String],
        required: true
    },
});

const Market = mongoose.model("Market", marketSchema);

module.exports = Market;