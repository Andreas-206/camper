import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCampars } from "../../services/api";

export const getAdverts = createAsyncThunk(
  "camper/getAdverts",
  async (page, thunkAPI) => {
    try {
      const adverts = await getCampars(page);
      return adverts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
