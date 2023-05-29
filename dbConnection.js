const { MongoClient } = require('mongodb');
const uri = 'mongodb+srv://palashshah315:palashshah315@cluster0.i0bhvhx.mongodb.net/test?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(err => {
    if (!err) {
        console.log('Mongo DB connected');
    } else {
        console.log('Error: ', err);
        process.exit(1);
    }
});

module.exports = client;