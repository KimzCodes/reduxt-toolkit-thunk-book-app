import React, { Fragment } from 'react';
import BookInfo from './BookInfo';
import BookList from './BookList';

import './book.css';

const PostContainer = () => {
  return (
    <Fragment>
      <hr className='my-5' />
      <div className='row'>
        <div className='col'>
          <BookList />
        </div>
        <div className='col side-line'>
          <BookInfo />
        </div>
      </div>
    </Fragment>
  );
};

export default PostContainer;
