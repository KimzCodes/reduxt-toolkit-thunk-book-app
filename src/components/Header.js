import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
const Header = () => {
  const { error } = useSelector((state) => state.posts);
  return (
    <Fragment>
      {error && (
        <div className='alert alert-danger mb-0' role='alert'>
          {error}
        </div>
      )}

      <nav className='navbar navbar-dark bg-dark'>
        <span className='navbar-brand mb-0 h1'>My Books</span>

        <button className='btn btn-outline-primary' type='submit'>
          Log In
        </button>
      </nav>
    </Fragment>
  );
};

export default Header;
