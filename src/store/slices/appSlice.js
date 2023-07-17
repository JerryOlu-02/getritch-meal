import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'appData',

  initialState: {
    ref: null,
    searchValue: '',
    searchedStatus: {
      isError: false,
      isLoading: false,
    },
    searchedMeals: [],
    currentPage: 1,
  },

  reducers: {
    setFooterRef(state, action) {
      state.ref = action.payload;
    },

    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },

    clearSearchValue(state) {
      state.searchValue = '';
    },

    setSearchedMeals(state, action) {
      state.searchedMeals = action.payload;
    },

    setSearchedStatus(state, action) {
      state.searchedStatus = action.payload;
    },

    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const appReducer = appSlice.reducer;

export const {
  setFooterRef,
  setSearchValue,
  setSearchedMeals,
  clearSearchValue,
  setSearchedStatus,
  setCurrentPage,
} = appSlice.actions;
