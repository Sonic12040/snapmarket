//Database Seeds go here, if Applicable
const mongoose = require('mongoose');
const db = require('../models');
mongoose.Promise = global.Promise;

//This file empties the Market Database and inserts the Market seeds.

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/snapmarket',
    {
        useMongoClient: true
    }
);

const marketSeed = [
    {
        MarketName: 'Alabama Gulf Coast Market',
        Address: '22250 Perdido Beach Boulevard, Gulf Shores, Alabama',
        Coordinates: {
            Latitude: '30.250746',
            Longitude: '-87.65585'
        },
        ZipCode: '36542',
        Benefits: {
            Wic: false,
            Wiccash: false,
            Snap: false,
            SFMNP: true
        },
        Items: ['Baked Goods', 'Eggs', 'Vegetables', 'Honey', 'Jams', 'Soap', 'Fruits', 'Grains']
    },
    {
        MarketName: 'Buckeye Farmer\'s Market',
        Address: '22865 West Lower Buckeye Road, Buckeye, Arizona',
        Coordinates: {
            Latitude: '33.4205344',
            Longitude: '-112.5421815'
        },
        ZipCode: '85326',
        Benefits: {
            Wic: false,
            Wiccash: false,
            Snap: false,
            SFMNP: false
        },
        Items: ['Vegetables','Jams','Fruits']
    },
]

db.Market
    .remove({})
    .then(() => db.Market.collection.insertMany(marketSeed))
    .then(data => {
        consolelog(`${data.insertedIds.length} records inserted!`);
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
