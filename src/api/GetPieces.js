import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(()   
 => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:27017/api/natural_instinct/pieces');   
 // Replace with your MongoDB API endpoint
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      {books.map((book) => (
        <div key={book._id}>   

          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <p>{book.description}</p>
        </div>
      ))}
    </div>
  );
};

export default BookList;