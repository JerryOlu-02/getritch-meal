import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from './slices/appSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query/react';
import { categoryApi } from './apis/categoryApi';
import { userReducer } from './slices/userSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      categoryApi.middleware
    ),
});

setupListeners(store.dispatch);

export * from './slices/appSlice';
export * from './slices/userSlice';

export {
  useFetchCategoriesQuery,
  useFetchOneCategoryMutation,
  useSearchMealMutation,
  useGetMealDetailQuery,
} from './apis/categoryApi';
