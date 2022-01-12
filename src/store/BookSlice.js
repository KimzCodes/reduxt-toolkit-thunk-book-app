import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchBooks = createAsyncThunk(
  'book/fetchBooks',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch('http://localhost:3001/books');
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
    const { rejectWithValue, getState } = thunkAPI;
    bookData.auther = getState().auth.name;

    try {
      const res = await fetch('http://localhost:3001/books', {
        method: 'POST',
        body: JSON.stringify(bookData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteBook = createAsyncThunk(
  'book/deleteBook',
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch(`http://localhost:3001/books/${data.id}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      //const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const BookSlice = createSlice({
  name: 'book',
  initialState: { books: [], loading: false, error: null },
  reducers: {},
  extraReducers: {
    //fetch
    [fetchBooks.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [fetchBooks.fulfilled]: (state, action) => {
      state.books = action.payload;
      state.loading = false;
    },
    [fetchBooks.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    //insert
    [insertBook.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [insertBook.fulfilled]: (state, action) => {
      state.books.push(action.payload);
      state.loading = false;
    },
    [insertBook.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    //delete
    [deleteBook.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [deleteBook.fulfilled]: (state, action) => {
      state.books = state.books.filter((el) => el.id !== action.payload.id);
      state.loading = false;
    },
    [deleteBook.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export default BookSlice.reducer;
