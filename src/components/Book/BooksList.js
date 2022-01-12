import React from 'react';
import { deleteBook } from '../../store/BookSlice';

const BooksList = ({ loading, books, dispatch, getBook, isloggedIn }) => {
  //delete handler
  const deleteBookHandler = (id) => {
    dispatch(deleteBook(id))
      .unwrap()
      .then((res) => {
        console.log(res);
      });
  };

  const bookList =
    books.length > 0
      ? books.map((book) => (
          <li
            className='list-group-item d-flex  justify-content-between align-items-center'
            key={book.id}
          >
            <div>{book.title}</div>
            <div className='btn-group' role='group'>
              <button
                type='button'
                className='btn btn-primary'
                onClick={() => getBook(book)}
              >
                Read
              </button>
              <button
                type='button'
                className='btn btn-danger'
                onClick={() => deleteBookHandler(book)}
                disabled={!isloggedIn}
              >
                Delete
              </button>
            </div>
          </li>
        ))
      : 'no books found';
  return (
    <div>
      <h2>Books List</h2>
      {loading ? 'loading...' : <ul className='list-group'>{bookList}</ul>}
    </div>
  );
};

export default BooksList;
