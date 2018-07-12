const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const marketSchema = new Schema({
    Address: {
        type: String,
        required: true
    },
    ZipCode: {
        type: String,
        required: true
    },
    Benefits: {
        Federal: {
            type: Boolean,
            required: true
        },
        State: {
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