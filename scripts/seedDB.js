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
    {
        MarketName: 'Arkansas Local Food Network Online Farmers Market',
        Address: '509 Scott St. Little Rock, Arkansas',
        Coordinates: {
            Latitude: '34.743076',
            Longitude: '-92.269599'
        },
        ZipCode: '72201',
        Benefits: {
            Wic: false,
            Wiccash: false,
            Snap: false,
            SFMNP: false
        },
        Items: ['Organic','Baked Goods','Cheese','Crafts','Flowers','Eggs','Herbs','Vegetables','Honey','Jams','Meat','Nuts','Plants','Poultry','Prepared','Soap','Trees','Coffee','Beans','Fruits','Juices','Mushrooms','Pet Food','Wild Harvested']
    },
    {
        MarketName: 'Berryessa Farmers\' Market',
        Address: '1376 Piedmont Road, San Jose, California',
        Coordinates: {
            Latitude: '37.40204',
            Longitude: '-121.847368'
        },
        ZipCode: '95132',
        Benefits: {
            Wic: true,
            Wiccash: false,
            Snap: true,
            SFMNP: false
        },
        Items: ['Organic','Baked Goods','Flowers','Seafood','Vegetables','Honey','Plants','Poultry','Prepared','Trees','Fruits','Mushrooms']
    },
];

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
