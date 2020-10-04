const {Flint} = require('@gooddollarcommons/gun-flint');
const GunMongoKey = require('./gun-mongo-key');
module.exports = Flint.register(GunMongoKey);