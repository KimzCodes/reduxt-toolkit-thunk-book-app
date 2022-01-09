import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk(
  'post/fetchPosts',
  async (_, thunkAPI) => {
    try {
      const res = await fetch('http://localhost:3009/posts');
      const data = await res.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const insertPost = createAsyncThunk(
  'post/insertPost',
  async (postData, thunkAPI) => {
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
      console.error(error);
    }
  }
);

const postSlice = createSlice({
  name: 'post',
  initialState: { posts: [], loading: false },
  reducers: {},
  extraReducers: {
    //fetch
    [fetchPosts.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.loading = false;
    },
    [fetchPosts.rejected]: (state, action) => {
      state.loading = false;
    },
    //insert
    [insertPost.pending]: (state, action) => {
      state.loading = true;
    },
    [insertPost.fulfilled]: (state, action) => {
      state.posts.push(action.payload);
      state.loading = false;
    },
    [insertPost.rejected]: (state, action) => {
      console.log(action);
      state.loading = false;
    },
  },
});

export default postSlice.reducer;
