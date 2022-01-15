import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logInOut } from '../store/authSlice';
const Header = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const { error } = useSelector((state) => state.books);

  return (
    <Fragment>
      {error && (
        <div class='alert alert-danger mb-0' role='alert'>
          {error}
        </div>
      )}
      <nav className='navbar navbar-dark bg-dark'>
        <span className='navbar-brand mb-0 h1'>My Books</span>

        <button
          className='btn btn-outline-primary'
          type='submit'
          onClick={() => dispatch(logInOut())}
        >
          {isLoggedIn ? 'Log Out' : ' Log In'}
        </button>
      </nav>
    </Fragment>
  );
};

export default Header;
