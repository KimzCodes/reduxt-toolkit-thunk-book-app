import React, { Fragment, useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../../store/BookSlice';
import BookInfo from './BookInfo';
import BooksList from './BooksList';

import './book.css';

const BookContainer = () => {
  const [selectedData, setSelectedData] = useState(null);
  const dispatch = useDispatch();

  const { loading, books, error } = useSelector((state) => state.books);
  const { loggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const getBookHandler = useCallback((data) => {
    if (data) {
      setSelectedData(data);
    }
  }, []);

  return (
    <Fragment>
      <hr className='my-5' />
      <div className='row'>
        <div className='col'>
          <BooksList
            loading={loading}
            books={books}
            error={error}
            dispatch={dispatch}
            getBook={getBookHandler}
            isloggedIn={loggedIn}
          />
        </div>
        <div className='col side-line'>
          <BookInfo data={selectedData} />
        </div>
      </div>
    </Fragment>
  );
};

export default BookContainer;
