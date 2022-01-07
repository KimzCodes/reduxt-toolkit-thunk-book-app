import React, { Fragment } from 'react';

const Postinfo = () => {
  return (
    <Fragment>
      <h2>Book Details</h2>
      <div class='alert alert-secondary' role='alert'>
        There is no post selected yet. Please select!
      </div>
      {/* <div>
        <p class='fw-bold'>Title:</p>
        <p class='fw-light'>Description:</p>
        <p class='fst-italic'>Price:</p>
      </div> */}
    </Fragment>
  );
};

export default Postinfo;
