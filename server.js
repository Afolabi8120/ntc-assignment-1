import express from 'express';
import { connectToDatabase } from './database/db.js';
import bookRouter from './routes/book.routes.js';
const app = express();  // create express app

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/v1/books', bookRouter);

app.get('/', (req, res) => {
    res.send("Welcome to NTC API");
})

app.listen(PORT, async () => {
    console.log(`Server is listening on http://127.0.0.1:${PORT}`);

    await connectToDatabase();
})

export default app;
