var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectID = Schema.ObjectId;

var User = new Schema({
    username:       { type: String },
    isPublic:       { type: Boolean },
    email:          { type: String },
    avatar_url:     { type: String },
    url:            { type: String },
    passwordDigest: { type: String },
    salt:           { type: Number }
});

module.exports = {
    User: mongoose.model('User', User)
};
