import React from 'react';

const BooksList = ({ isLoading, books, isLoggedIn, getBook }) => {
  const bookList =
    books.length > 0
      ? books.map((item) => (
          <li
            className='list-group-item d-flex  justify-content-between align-items-center'
            key={item.id}
          >
            <div>{item.title}</div>
            <div className='btn-group' role='group'>
              <button
                type='button'
                className='btn btn-primary'
                onClick={() => getBook(item, 'read')}
              >
                Read
              </button>
              <button
                type='button'
                className='btn btn-success'
                onClick={() => getBookId(item.id)}
              >
                Udate
              </button>
              <button
                type='button'
                className='btn btn-danger'
                disabled={!isLoggedIn}
                onClick={() => getBook(item, 'delete')}
              >
                Delete
              </button>
            </div>
          </li>
        ))
      : 'There is no books available!';

  return (
    <div>
      <h2>Books List</h2>
      {isLoading ? 'loading...' : <ul className='list-group'>{bookList}</ul>}
    </div>
  );
};

export default BooksList;
