import React, { Fragment } from 'react';
import Postinfo from './PostInfo';
import Postlist from './PostList';
import './post.css';

const Posts = () => {
  return (
    <Fragment>
      <hr className='mt-2 mb-3' />
      <div className='row'>
        <div className='col'>
          <Postlist />
        </div>
        <div className='col side-line'>
          <Postinfo />
        </div>
      </div>
    </Fragment>
  );
};

export default Posts;
