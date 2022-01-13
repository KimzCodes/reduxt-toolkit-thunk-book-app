import { configureStore } from '@reduxjs/toolkit';
import books from './bookSlice';

export default configureStore({
  reducer: { books },
});
