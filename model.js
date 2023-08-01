const mongoose = require('mongoose')
const Schema = mongoose.Schema


const BookSchema = new Schema({
    title : String,
    author : String,
    description : String,
    authors: [
        {
            authorId: {required: true, type: Schema.Types.ObjectId, ref : "Author"}
        }
    ]
})

 const BookModel = mongoose.model("books", BookSchema)

module.exports = BookModel;