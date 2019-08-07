const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);
mongoose.Promise = Promise;

const start = Date.now();
const opts = {
  useNewUrlParser: true,
  connectTimeoutMS: 3000,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0
}
mongoose.connect(process.env.MONGO_URI, opts).then(
  () => { console.log('Connected to MongoDB') },
  error => { console.log(`Caught "${error.message}" after ${Date.now() - start}`) });

// Un comment the code belowonce you have a schema 
// setup in one of your blueprints
//module.exports.{'Name'} = require('./blueprints/{insert blueprint directory}/model/schema');