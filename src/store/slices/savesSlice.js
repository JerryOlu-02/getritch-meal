import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { supabase } from '../../supabaseClient';

const fetchSaves = createAsyncThunk('save/fetch', async (userId) => {
  const { data, error } = await supabase
    .from('meals')
    .select('saved-meal')
    .eq('client_id', userId);

  if (error) throw new Error(error.message);

  return data;
});

const savesSlice = createSlice({
  name: 'save',
  initialState: {
    isLoading: false,
    savedMeals: null,
    isError: false,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchSaves.fulfilled, (state, action) => {
      state.savedMeals = action.payload;
      state.isLoading = false;
    });

    builder.addCase(fetchSaves.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchSaves.rejected, (state, action) => {
      state.isError = action.error;
      state.isLoading = false;
    });
  },
});

export const savesReducer = savesSlice.reducer;
export { fetchSaves };
