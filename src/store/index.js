import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from './slices/appSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query/react';
import { categoryApi } from './apis/categoryApi';

export const store = configureStore({
  reducer: {
    app: appReducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      categoryApi.middleware
    ),
});

setupListeners(store.dispatch);

export * from './slices/appSlice';

export {
  useFetchCategoriesQuery,
  useFetchOneCategoryMutation,
  useSearchMealMutation,
} from './apis/categoryApi';
