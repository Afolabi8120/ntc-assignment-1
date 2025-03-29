import { Router } from 'express';
import { getBook, getBooks, addBook, deleteBook, updateBook, deleteBooks } from '../controllers/book.controller.js';

const bookRouter = Router();

// // Path: /api/v1/books/:id
bookRouter.get('/:id', getBook);

// // Path: /api/v1/books/
bookRouter.get('/', getBooks);

// // Path: /api/v1/books/
bookRouter.post('/', addBook);

// // Path: /api/v1/books/:id
bookRouter.put('/:id', updateBook);

// // Path: /api/v1/books/:id
bookRouter.delete('/:id', deleteBook);

// // Path: /api/v1/books/
bookRouter.delete('/', deleteBooks);

export default bookRouter;
