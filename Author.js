const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    name: {
        type: String,
        required : true
    },
    email: {
        type: String,
        required : true
    },
    country:{
        type: String,
        required : true
    },
    bookId: {
        type: Schema.Types.ObjectId,
        ref: "books",
        required: true
    }
});

const AuthorModel=  mongoose.model('Author', AuthorSchema);

module.exports = AuthorModel