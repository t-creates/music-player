/* eslint-disable */
import { configureStore } from '@reduxjs/toolkit';
import globalReducer from './features/globalSlice';
import themeReducer from './features/themeSlice';

import { scApi } from '../api/shazamCore';
import { shazamApi } from '../api/shazam';
import { userLocation } from '../api/location';
import selectedCountryReducer from '../redux/features/selectedCountry';

export default configureStore({
  // Specify What Kind of Data we are dealing with
  reducer: {
    start: globalReducer,
    theme: themeReducer,
    [scApi.reducerPath]: scApi.reducer,
    [shazamApi.reducerPath]: shazamApi.reducer,
    [userLocation.reducerPath]: userLocation.reducer,
    selectedCountry: selectedCountryReducer,
  },
});
