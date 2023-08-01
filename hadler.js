
const AuthorModel = require('./Author')
const BookModel = require('./model')
const viewbook = (req, res) =>{
    //listbooks
    const {id} =req.params
    if (id) {
        BookModel.find({author:id}).then( books =>{
            res.json({data: books})
        }).catch(err =>console.log(err))
    } else {
        BookModel.find().then( books =>{
            res.json({data: books})
        }).catch(err =>console.log(err))
    }

   
}
const createbook = (req, res) =>{
    //createbooks
    const {title, author, description} = req.body
    const book = new BookModel({title, author, description})
    book.save().then(result =>{
        res.json({message: 'create successful', data: result})
    }).catch(err =>console.log(err))
   
}

const updatebook = (req, res) =>{
    //updatebooks
    const {id, title, author, description} = req.body
    BookModel.findById(id).then(book =>{
        if (book) {
            book.title = title
            book.author = author
            book.description = description

            book.save()

            res.json({message: "update Successfull", data: book})

        }
        res.json({message: "Book Cannot be found"})
    }).catch(err =>console.log(err))

}

const deletebook = (req, res) =>{
    //deletebooks
    const {id} = req.body
     BookModel.findByIdAndRemove(id).then(deletedbook =>{
    if (deletedbook) {
        AuthorModel.deleteMany({bookId: deletedbook._id}).then(result =>{
            res.json({message: "book deleted", data: deletedbook})
        }).catch(err =>console.log(err))
        
        return
    }
    res.json({message: "Book Cannot be found"})
   }).catch(err =>console.log(err))

}
const AddAuthor = (req, res) =>{
    const {name, email, country,bookId} = req.body
    const author = new AuthorModel({name, email, country,bookId})

    author.save().then(result =>{
        if (result) {
            res.json({message: "Author Added", data: result})
        
        }
        else{
            res.json({message: "Fail to add Author"})
        }
    })
}
const ListAuthors = (req, res) =>{
    AuthorModel.find()
    .populate('bookId', 'title author description')
    .then(authors =>{{
        res.json({data: authors})
    }}).catch(err =>console.log(err))
}
module.exports = {
   viewbook,
    createbook,
   updatebook,
     deletebook,
     AddAuthor,
     ListAuthors,
}