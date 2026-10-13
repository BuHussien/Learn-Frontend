import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { IPost, PostsResponse } from "../../interfaces/IPost";
import axiosInstance from "../../config/axios";
import type { RootState } from "../store";
import axios from "axios";

type PostsState = {
  count: number;
  loading: boolean;
  posts: IPost[];
  error: string | null;
};

const initialState: PostsState = {
  count: 0,
  loading: true,
  posts: [],
  error: null,
};

export const getPosts = createAsyncThunk<IPost[], void, { rejectValue: string }>(
  "posts/getPosts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axiosInstance.get<PostsResponse>("posts");
      return data.posts; 
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message || "Failed to fetch posts");
      }
      return rejectWithValue("Something went wrong");
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.count = 0;
        state.loading = true;
        state.error = null;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.count = action.payload.length;
        state.loading = false;
        state.error = null;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.posts = [];
        state.count = 0;
        state.loading = false;
        state.error = action.payload ?? "Something went wrong";
      });
  },
});

export const {} = postsSlice.actions;
export const postsSelector = ({ posts }: RootState) => posts;
export default postsSlice.reducer;
