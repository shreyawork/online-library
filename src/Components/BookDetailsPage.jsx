import React from "react";
import {useNavigate,useParams} from 'react-router-dom'
import { useSelector } from "react-redux";
const BookDetailsPage =() =>{
    const {bookId} =useParams();
    const book = useSelector ((state) =>
    state.books.find((b) =>b.id === parseInt(bookId))
);
const navigate=useNavigate();
if(!book) return<div>Book not found</div>
 return(
    <div>
        <h1>{book.title}</h1>
        <p><strong>Author:</strong>{book.author}</p>
        <p><strong>Description:</strong>{book.description}</p>
        <p><strong>Rating</strong>{book.rating}</p>
        <button onClick={() =>navigate('./browse')}> Back to Browse</button>
    </div>
 );
};
export default BookDetailsPage;