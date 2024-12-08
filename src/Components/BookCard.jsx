import React from 'react'
import { Link } from 'react-router'
const BookCard = ({book}) => {
  return (
    <div>
      <div className='book-card'>
        <h3>{book.title}</h3>
        <p><strong>Author:</strong>{book.author}</p>
        <p> <strong>  Category:</strong>{book.category}</p>
        <p><strong>Rating:</strong>{book.rating}</p>
        <Link to={`/book/${book.id}`}>View Details</Link>

      </div>
    </div>
  )
}

export default BookCard
