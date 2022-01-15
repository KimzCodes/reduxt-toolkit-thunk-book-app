import { configureStore } from '@reduxjs/toolkit';
import books from './bookSlice';
import auth from './authSlice';

export default configureStore({
  reducer: { books, auth },
});
