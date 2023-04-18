import React, { useState } from 'react'
import useBooksContext from '../hooks/use-books-context';


function BookEdit({book, onSubmit}) {
  const [title, setTitle] = useState(book.title);
  const {editTitleById} = useBooksContext();

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    
    onSubmit();
    editTitleById(book.id, title);
  };

  return (
    <form action="book-edit" onSubmit={handleSubmit}>
      <label htmlFor="">Title</label>
      <input type="text" className='input' value={title} onChange={handleChange} />
      <button className='button is-primary'  >
        Save
      </button>
    </form>
  )
}

export default BookEdit