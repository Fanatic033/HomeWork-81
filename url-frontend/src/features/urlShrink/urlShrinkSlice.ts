import {createSlice} from '@reduxjs/toolkit';
import {shortenUrl} from './urlShrinkThunk.ts';

interface UrlState {
  originalUrl: string;
  shortUrl: string;
  loading: boolean;
}

const initialState: UrlState = {
  originalUrl: '',
  shortUrl: '',
  loading: false,
};


const urlSlice = createSlice({
  name: 'url',
  initialState,
  reducers: {
    setOriginalUrl: (state, action) => {
      state.originalUrl = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(shortenUrl.pending, (state) => {
        state.loading = true;
      })
      .addCase(shortenUrl.fulfilled, (state, {payload: shortUrl}) => {
        state.loading = false;
        state.shortUrl = shortUrl;
      })
      .addCase(shortenUrl.rejected, (state,) => {
        state.loading = false;
      });
  },
});

export const {setOriginalUrl} = urlSlice.actions;

export const urlReducer = urlSlice.reducer;