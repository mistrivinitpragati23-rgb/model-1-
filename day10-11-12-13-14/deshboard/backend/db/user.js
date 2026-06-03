const mongoose = require('mongoose');

const user_schema = mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const user_model = mongoose.model("user", user_schema);

// Clearer standard export
module.exports = { user_model };