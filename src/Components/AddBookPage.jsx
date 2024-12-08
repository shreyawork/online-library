import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../redux/action';


const AddBookPage = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState("");
    const [category, setCategory] = useState("fiction");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const validateform=() =>{
        if(!title||!author ||!description||!rating){
            alert("all field are required.");
        return false; //prevent submission if any field is empty

    }
    if(isNaN(rating)|| rating <1 || rating>5){
        alert("rating must be a number between 1 and 5");
        return false;//prevent   submission if rating  is valid
    }
    return true;//allow submission if validation passes
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(validateform()){
            const newBook ={
                id:Date.now(),
                title,author,description,rating,category,
            };
          dispatch(addBook(newBook));
          navigate('./browse');// navigate to browse page after adding the book
        }
    };
    
    return (
        <div className='container'>
            <h1>Add a new Book/</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Book Title'
                    id='title-input'
                    name='title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type='text'
                    placeholder='Book Author'
                    id='author-input'
                    name='author'
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <textarea
                    placeholder='   Description'
                    id='description-input'
                    name='description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input
                    type='number'
                    placeholder='Rating'
                    id='rating-input'
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                       min="1"
                       max="5"
               />
                <select  
                id ='category'
                name='category'
                 value={category} 
                onChange={(e) =>
                    setCategory(e.target.value)
                }>
                    <option value="friction">Friction</option>
                    <option value="non-friction">non-Friction</option>
                    <option value="sci-fi">sci-fi</option>


                </select>
                <button type='submit'>Add Book</button>
            </form>

        </div>
    );
};
    

export default AddBookPage;
