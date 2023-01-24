const Author = require('../models/authors.models')
// author model import above

module.exports = {
    findAll: (req, res) => {
        Author.find()
            .then((allAuthors) => res.json(allAuthors))
            .catch((err) => res.status(400).json({message: "Something went wrong", error: err})
            );
    },
    findOne: (req, res) => {
        console.log("params id", req.params.id)
        Author.findById(req.params.id)
        .then((author) => {res.json(author); console.log(Author)})
        .catch((err) => res.status(400).json({message: "Something went wrong", error: err})
        );
    },
    create: (req, res) => {
        Author.create(req.body)
        .then((newAuthor) => res.json(newAuthor))
        .catch((err) => res.status(400).json({message: "Something went wrong", error: err})
        );
    },
    update: (req, res) => {
        Author.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators: true})
        .then((updatedAuthor)=> res.json(updatedAuthor))
        .catch ((err)=>res.status(400).json({message:"Something Went Wrong", error: err})
        );

    },
    deleteAuthor:(req, res) => {
        Author.findByIdAndDelete(req.params.id)
        .then((deletedAuthors) => res.json(deletedAuthors))
        .catch((err) => res.status(400).json({message:"Something went wrong", error: err})
        );
    }

}
