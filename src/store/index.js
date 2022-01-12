import { configureStore } from '@reduxjs/toolkit';
import books from './BookSlice';
import auth from './authSlice';

export default configureStore({ reducer: { books, auth } });
