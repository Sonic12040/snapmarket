const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const marketSchema = new Schema({
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
        Wic: {
            type: Boolean,
            required: true
        },
        WicCash: {
            type: Boolean,
            required: true
        },
        Snap: {
            type: Boolean,
            required: true
        },
        SFMNP: {
            type: Boolean,
            required: true
        }
    },
    Items: {
        type: [String],
        required: true
    },
});

const Market = mongoose.model("Market", marketSchema);

module.exports = Market;