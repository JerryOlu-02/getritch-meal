import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from './slices/appSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query/react';
import { categoryApi } from './apis/categoryApi';
import { userReducer } from './slices/userSlice';
import { savesReducer } from './slices/savesSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
    saves: savesReducer,
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

export * from './slices/savesSlice';

export {
  useFetchCategoriesQuery,
  useFetchOneCategoryMutation,
  useSearchMealMutation,
  useGetMealDetailQuery,
} from './apis/categoryApi';
