//require express and bodyparser
const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require('mongoose')
const {createbook,viewbook, updatebook,deletebook, AddAuthor, ListAuthors} = require('./hadler')

//create instances
const app = express()


//middlewares
app.use(bodyParser.json())


//handles

//routes
//view books
app.get('/book/:id?',viewbook)
//create books
app.post('/book',createbook)
//update
app.put('/book',updatebook)
//delete
app.delete('/book',deletebook)
//add author
app.post('/author', AddAuthor)
//List authors
app.get('/author', ListAuthors)




//port
app.listen(3000, function () {
    mongoose.connect("mongodb+srv://CodetrainUser:Amish@cluster0.00dyl8q.mongodb.net/?retryWrites=true&w=majority",)
    .then(result =>{
        console.log("server started on port 3000")
    })
    
})