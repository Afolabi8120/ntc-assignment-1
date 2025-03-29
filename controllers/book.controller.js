import Book from '../models/book.model.js';

// get a book using book id
export const getBook = async (req, res) => {
    try {
        const id = req.params.id;
        const book = await Book.findById(id);

        if(!book) {
            return res.status(404).json({
                success: false,
                message: "Book not found"
            });
        }

        res.status(200).json({
            success: true,
            data: book
        });
    } catch(err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

// get all books
export const getBooks = async (req, res) => {
    try {
        const books = await Book.find({});

        res.status(200).json({
            success: true,
            data: books
        });
    } catch(err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

// add new book
export const addBook = async (req, res) => {

    try {
        const { title, author, rating, comment } = req.body;

        // Check if a book with same title already exists
        const existingBook = await Book.findOne({title});

        if (existingBook) {
            return res.status(409).json({
                success: false,
                message: "Book with same title already exist"
            });

        }

        const bookData = { 
            title: title,
            author: author,
            rating: rating,
            comment: comment
        }

        const newBook = await Book.create([bookData]);

        res.status(201).json({ 
            success: true,
            message: "New book created successfully",
            data: newBook
        });
    } catch (err) {
        res.status(500).json({ 
            success: false,
            message: err.message
        });
    }

};

// update a book using its id
export const updateBook = async (req, res) => {

    try {
        const id = req.params.id;

        // Check if a book with same title already exists
        const existingBook = await Book.findById(id);
        console.log(existingBook);
        if (!existingBook) {
            return res.status(409).json({
                success: false,
                message: `Book with id: ${id} does not exist`
            });

        }

        const bookData = { 
            title: req.body.title,
            author: req.body.author,
            rating: req.body.rating,
            comment: req.body.comment
        }

        const newBook = await Book.findByIdAndUpdate({ _id: id }, { ...bookData });

        if(!newBook) {
            return res.status(404).json({
                success: false,
                message: "Failed to update"
            });
        }

        res.status(201).json({ 
            success: true,
            message: "Book updated successfully",
            data: newBook
        });
    } catch (err) {
        res.status(500).json({ 
            success: false,
            message: err.message
        });
    }

};

// delete a book using its id
export const deleteBook = async (req, res) => {
    try {
        const id = req.params.id;
        const book = await Book.findById(id);

        if(!book) {
            return res.status(404).json({
                success: false,
                message: `Book with id: ${id} not found`
            });
        }

        const deleteBook = await Book.findByIdAndDelete(id);

        if(deleteBook) {
            res.status(200).json({
                success: true,
                message: "Book deleted successfully"
            });
        }
        
    } catch(err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

// delete all book 
export const deleteBooks = async (req, res) => {
    try {

        const deleteBook = await Book.deleteMany();

        if(deleteBook) {
            res.status(200).json({
                success: true,
                message: "Books deleted successfully"
            });
        }
        
    } catch(err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

