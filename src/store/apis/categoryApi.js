import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const categoryApi = createApi({
  reducerPath: 'categories',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.themealdb.com/api/json/v1/1/',
  }),

  endpoints: (builder) => {
    return {
      fetchCategories: builder.query({
        query: () => {
          return {
            url: 'categories.php',
            method: 'GET',
          };
        },
        // transformResponse: (response) => response.data,
      }),

      fetchOneCategory: builder.mutation({
        query: (category) => {
          return {
            url: `filter.php?c=${category}`,
            method: 'GET',
          };
        },
      }),

      searchMeal: builder.mutation({
        query: (searchParam) => {
          return {
            url: `search.php?s=${searchParam}`,
            method: 'GET',
          };
        },
      }),

      getMealDetail: builder.query({
        query: (mealId) => {
          return {
            url: `lookup.php?i=${mealId}`,
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const {
  useFetchCategoriesQuery,
  useFetchOneCategoryMutation,
  useSearchMealMutation,
  useGetMealDetailQuery,
} = categoryApi;
