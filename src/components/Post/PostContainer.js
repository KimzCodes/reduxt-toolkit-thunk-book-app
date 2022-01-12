import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../store/postSlice';
import PostInfo from './PostInfo';
import PostList from './PostList';
import './post.css';

const PostContainer = () => {
  const dispatch = useDispatch();

  const { loading, posts, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <Fragment>
      <hr className='my-5' />
      <div className='row'>
        <div className='col'>
          <PostList
            loading={loading}
            posts={posts}
            error={error}
            dispatch={dispatch}
          />
        </div>
        <div className='col side-line'>
          <PostInfo />
        </div>
      </div>
    </Fragment>
  );
};

export default PostContainer;
