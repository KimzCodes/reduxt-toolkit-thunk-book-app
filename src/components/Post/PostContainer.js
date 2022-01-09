import React, { Fragment } from 'react';
import PostInfo from './PostInfo';
import PostList from './PostList';
import './post.css';

const PostContainer = () => {
  return (
    <Fragment>
      <hr className='my-5' />
      <div className='row'>
        <div className='col'>
          <PostList />
        </div>
        <div className='col side-line'>
          <PostInfo />
        </div>
      </div>
    </Fragment>
  );
};

export default PostContainer;
