import React from 'react';

const Postlist = () => {
  return (
    <div>
      <h2>Post List</h2>
      <ul className='list-group'>
        <li className='list-group-item d-flex  justify-content-between align-items-center'>
          <div>Cras justo odio</div>
          <div className='btn-group' role='group'>
            <button type='button' className='btn btn-primary'>
              Read
            </button>
            <button type='button' className='btn btn-danger'>
              Delete
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Postlist;
