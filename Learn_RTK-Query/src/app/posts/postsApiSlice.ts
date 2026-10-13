import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postsApiSlice = createApi({
  // reducerPath: 'posts',
  // tagTypes: ['Posts'],
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => `posts`,
    }),
    getPost: builder.query({
      query: (arg)=> {
        return `posts/${arg}`;
      },
    })
  }),
});

export const {useGetPostsQuery, useGetPostQuery} = postsApiSlice;
export default postsApiSlice;