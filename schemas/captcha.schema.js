const Mongoose = require('mongoose');

const captchaSchema = Mongoose.Schema({
    id: String,
    key: String,
    lock: String,
    door: String
});

module.exports = captchaSchema;