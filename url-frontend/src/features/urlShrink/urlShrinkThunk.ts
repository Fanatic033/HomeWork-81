import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi.ts';

export const shortenUrl = createAsyncThunk(
  'url/shortenUrl',
  async (originalUrl: string, {rejectWithValue}) => {
    try {
      const response = await axiosApi.post('/link', {originalUrl});
      return response.data.shortUrl;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
