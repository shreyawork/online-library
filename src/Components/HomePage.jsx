import React from 'react';
import { Link } from 'react-router-dom';
const HomePage = () => {
  return (
    <div>
      <h1>welcome to the book library</h1>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/browse">Browse Books</Link></li>
            <li><Link to="/add-book">Add Book</Link></li>


          </ul>


        </nav>
        <h2>
          Book Categories
          
        </h2>
        <ul>
        <li><Link to="/books/fiction">Fiction</Link></li>
    <li><Link to="/books/non-fiction">Non-Fiction</Link></li>
    <li><Link to="/books/sci-fi">Sci-Fi</Link></li>

        </ul>
      </div>
      <div>
        <h2> Popular Books</h2>
        <ul>
          <li><Link to="/book/1">The great gateby</Link></li>
          <li><Link to="/book/2">1984</Link></li>
          <li><Link to="/book/3">dune</Link></li>


        </ul>
      </div>



    </div>
  )
}

export default HomePage