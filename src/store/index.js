import { configureStore } from '@reduxjs/toolkit';
import posts from './postSlice';

export default configureStore({ reducer: { posts } });
