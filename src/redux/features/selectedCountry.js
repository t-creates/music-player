import { createSlice } from '@reduxjs/toolkit';

export const selectedCountry = createSlice({
  name: 'selectedCountry',
  initialState: {
    selectedCountryName: '',
    searchQuery: '',
  },
  reducers: {
    selectCountry: (state, action) => {
      state.selectedCountryName = action.payload;
      state.searchQuery = '';
    },
  },
});

export const { selectCountry } = selectedCountry.actions;

export default selectedCountry.reducer;
