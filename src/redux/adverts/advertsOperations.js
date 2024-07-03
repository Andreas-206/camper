import { createAsyncThunk } from '@reduxjs/toolkit';
import {getCampers} from '../../services/api';

export const getAdverts = createAsyncThunk(
  'camper/getAdverts',
  async (page, thunkAPI) => {
    try {
      const response = await getCampers(page);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)