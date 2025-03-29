import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: [true, "Title is required"],
        trim: true,
        minLength: [3, "Title must be at least 3 characters long"],
        maxLength: [50, "Title must be at most 50 characters long"]
    },
    author: {
        type: String,
        required: [true, "Author is required"],
    },
    rating: {
        type: Number, 
        required: [true, "Rating is required"],
        minLength: [1, "Rating must be at least 1"],
        maxLength: [10, "Rating must be at most 10"]
    },
    comment: {
        type: String, 
        required: [true, "Comment is required"],
        minLength: [4, "Comment must be at least 4 characters long"],
        maxLength: [50, "Name must be at most 50 characters long"]
    },
},
{
    timestamps: true
});

const Book = mongoose.model("Book", bookSchema);

export default Book;

