import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk(
  'post/fetchPosts',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch('http://localhost:3001/posts');
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const insertPost = createAsyncThunk(
  'post/insertPost',
  async (postData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const res = await fetch('http://localhost:3001/posts', {
        method: 'POST',
        body: JSON.stringify(postData),
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

export const deletePost = createAsyncThunk(
  'post/deletePost',
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch(`http://localhost:3001/posts/${data.id}`, {
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
    [deletePost.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [deletePost.fulfilled]: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload.id);
      state.loading = false;
    },
    [deletePost.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export default postSlice.reducer;
