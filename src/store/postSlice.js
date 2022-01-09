import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk(
  'post/fetchPosts',
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch('http://localhost:3009/posts');
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue('customize error');
    }
  }
);

export const insertPost = createAsyncThunk(
  'post/insertPost',
  async (postData, { rejectWithValue }) => {
    try {
      const res = await fetch('http://localhost:3009/posts', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue('customize error');
    }
  }
);

const postSlice = createSlice({
  name: 'post',
  initialState: { posts: [], loading: false, error: null },
  reducers: {},
  extraReducers: {
    //fetch
    [fetchPosts.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.loading = false;
    },
    [fetchPosts.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    //insert
    [insertPost.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [insertPost.fulfilled]: (state, action) => {
      state.posts.push(action.payload);
      state.loading = false;
    },
    [insertPost.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    //delete
  },
});

export default postSlice.reducer;
