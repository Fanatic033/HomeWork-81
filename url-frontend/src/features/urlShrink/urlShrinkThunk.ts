import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi.ts';

export const shortenUrl = createAsyncThunk(
  'url/shortenUrl',
  async (originalUrl: string, {rejectWithValue}) => {
    try {
      const response = await axiosApi.post('/links', {originalUrl});
      return response.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
