import React, { Fragment } from 'react';

const PostInfo = () => {
  return (
    <Fragment>
      <h2>Post Details</h2>
      <div className='alert alert-secondary' role='alert'>
        There is no post selected yet. Please select!
      </div>
      {/* <div>
        <p className='fw-bold'>Title:</p>
        <p className='fw-light'>Description:</p>
        <p className='fst-italic'>Price:</p>
      </div> */}
    </Fragment>
  );
};

export default PostInfo;
