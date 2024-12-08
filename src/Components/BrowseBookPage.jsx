import React,{useState} from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import BookCard from './BookCard';
const BrowseBookPage = () => {
    const {category}=useParams();
    const books = useSelector((state) =>state.books);
    const [search, setSearch] = useState('');
    // filter book by category and search
    const filterBooks = books.filter(
        (book) =>
          (category ? book.category === category : true) && 
        (book.title.toLowerCase().includes (search.toLowerCase())||
       book.author.toLowerCase().includes(search.toLowerCase()))
);
  return (
    <div>
      <h1>Browse Book</h1>
      <input
      type='text'
      placeholder='Search by title or author'
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      />
      <div className='book-list'>
       {filterBooks.length ===0?(
        <p> no books found</p>
       ):(
        filterBooks.map((book) => (
          <BookCard key ={book.id} book ={book} />
          ))
        )}
 </div>
    </div>
  );

};

export default BrowseBookPage;
