import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { UserType } from "../../types/userType";
import { albumsUrl, postsUrl, usersUrl } from "../../static/urls";
import { PostType } from "../../types/postType";
import { AlbumsTypes } from "../../types/albumsTypes";

export interface UserState {
  error: any;
  user: UserType | any;
  userPosts: PostType[];
  userAlbums: AlbumsTypes[];
  loading: boolean;
}

export const getUser = createAsyncThunk(
  "user/get",
  async (id: number, thunkAPI) => {
    try {
      const res = await axios.get(`${usersUrl}/${id}`);
      return await res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

export const getUserPosts = createAsyncThunk(
  "user/getPosts",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`${postsUrl}`);
      return await res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

export const getUserAlbums = createAsyncThunk(
  "user/getAlbums",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`${albumsUrl}`);
      return await res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

const initialState: UserState = {
  error: null,
  user: {},
  userPosts: [],
  userAlbums: [],
  loading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUser.fulfilled, (state, { payload }) => {
      state.user = payload;
      state.loading = false;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.error = action.error;
      state.loading = false;
    });
    builder.addCase(getUserPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUserPosts.fulfilled, (state, { payload }) => {
      const user = JSON.parse(JSON.stringify(state.user));
      state.userPosts = payload.filter(
        (post: PostType) => post.userId === user.id
      );
      state.loading = false;
    });
    builder.addCase(getUserPosts.rejected, (state, action) => {
      state.error = action.error;
      state.loading = false;
    });
    builder.addCase(getUserAlbums.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUserAlbums.fulfilled, (state, { payload }) => {
      const user = JSON.parse(JSON.stringify(state.user));
      state.userAlbums = payload.filter(
        (album: PostType) => album.userId === user.id
      );
      state.loading = false;
    });
    builder.addCase(getUserAlbums.rejected, (state, action) => {
      state.error = action.error;
      state.loading = false;
    });
  },
});

export default userSlice.reducer;
