import React from 'react';

const BooksList = () => {
  return (
    <div>
      <h2>Books List</h2>
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

export default BooksList;
