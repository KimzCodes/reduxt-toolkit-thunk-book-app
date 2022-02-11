import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getBooks,
  deleteBook,
  selectedBook as selectedBookAction,
} from '../../store/bookSlice';
import BookInfo from './BookInfo';
import BooksList from './BooksList';

import './book.css';

const PostContainer = () => {
  const [selectedBook, setSelectedBook] = useState({});
  const { isLoading, books } = useSelector((state) => state.books);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const getBook = (item, type) => {
    switch (type) {
      case 'read':
        const selectedBook = books.find((el) => el.id === item.id);
        setSelectedBook((prev) => {
          return { ...prev, ...selectedBook };
        });
        break;
      case 'edit':
        dispatch(selectedBookAction(item));
        break;
      case 'delete':
        dispatch(deleteBook(item))
          .unwrap()
          .then((originalPromiseResult) => {
            console.log(originalPromiseResult);
          })
          .catch((rejectedValueOrSerializedError) => {
            console.log(rejectedValueOrSerializedError);
          });
        break;

      default:
        break;
    }
  };

  return (
    <Fragment>
      <hr className='my-5' />
      <div className='row'>
        <div className='col'>
          <BooksList
            isLoading={isLoading}
            books={books}
            isLoggedIn={isLoggedIn}
            getBook={getBook}
          />
        </div>
        <div className='col side-line'>
          <BookInfo info={selectedBook} />
        </div>
      </div>
    </Fragment>
  );
};

export default PostContainer;
