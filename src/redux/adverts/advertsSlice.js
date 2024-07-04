import { createSlice } from "@reduxjs/toolkit";
import { getAdverts } from "./advertsOperations";

const initialState = {
  isLoading: false,
  adventers: [],
  favorites: [],
};

const adventerSlice = createSlice({
  name: "camper",
  initialState,
  reducers: {
    addFavorites: (state, { payload }) => {
      state.favorites.push(payload);
    },
    removeFavorites: (state, { payload }) => {
      state.favorites = state.favorites.filter((camper) => camper._id !== payload);
    },

    resetadventers: (state) => {
      state.adventers = initialState.adventers;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAdverts.fulfilled, (state, { payload }) => {
        state.adventers = [...payload];
      })
      .addCase(getAdverts.rejected, (state, { payload }) => {
        console.log("🚀 ~ builder.addCase ~ payload:", payload);
      });
  },
});

export const adventerReducer = adventerSlice.reducer;
export const { addFavorites, removeFavorites, resetadventers } =
  adventerSlice.actions;
