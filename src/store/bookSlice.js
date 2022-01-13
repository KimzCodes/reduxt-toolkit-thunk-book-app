import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getBooks = createAsyncThunk(
  'book/getBooks',
  async (_, thunkAPI) => {
    try {
      const res = await fetch('http://localhost:3005/books');
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const bookSlice = createSlice({
  name: 'book',
  initialState: { books: null },
  extraReducers: {
    [getBooks.pending]: (state, action) => {
      console.log(action);
    },
    [getBooks.fulfilled]: (state, action) => {
      console.log(action);
    },
    [getBooks.rejected]: (state, action) => {
      console.log(action);
    },
  },
});

export default bookSlice.reducer;
