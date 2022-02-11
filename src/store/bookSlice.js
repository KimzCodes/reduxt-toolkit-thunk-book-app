import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { logInsert } from './reportSlice';

export const getBooks = createAsyncThunk(
  'book/getBooks',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch('http://localhost:3005/books');
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const insertBook = createAsyncThunk(
  'book/insertBook',
  async (bookData, thunkAPI) => {
    const { rejectWithValue, getState, dispatch } = thunkAPI;
    try {
      bookData.userName = getState().auth.name;
      //disptch
      // dispatch(deleteBook({ id: 5 }));
      const res = await fetch('http://localhost:3005/books', {
        method: 'POST',
        body: JSON.stringify(bookData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      //report
      const data = await res.json();
      dispatch(logInsert({ name: 'insertBook', status: 'success' }));
      return data;
    } catch (error) {
      dispatch(logInsert({ name: 'insertBook', status: 'failed' }));
      return rejectWithValue(error.message);
    }
  }
);

export const deleteBook = createAsyncThunk(
  'book/deleteBook',
  async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch(`http://localhost:3005/books/${item.id}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      return item;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const bookSlice = createSlice({
  name: 'book',
  initialState: { books: [], isLoading: false, error: null },
  extraReducers: {
    //get books
    [getBooks.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    },
    [getBooks.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //insert book
    [insertBook.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [insertBook.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books.push(action.payload);
    },
    [insertBook.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //delete book
    [deleteBook.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [deleteBook.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books = state.books.filter((el) => el.id !== action.payload.id);
    },
    [deleteBook.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default bookSlice.reducer;
