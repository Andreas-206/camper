import { createSlice } from '@reduxjs/toolkit';
import { getAdverts } from './advertsOperations.js';

const initialState = {
  isLoading: false,
  adventers: [],
  favorites: [],
}

const adventerSlice = createSlice({
name:'camper',
initialState,
reducers:{
  addFavorite: (state, {payload}) => {
    state.favorites.push(payload)
},

  removeFavorite: (state, {payload}) => {
    state.favorites = state.favorites.filter(camper => camper._id !== payload)
  },

  resetAdventers: (state) => {
    state.adventers = initialState.adventers;
  },
},

  extraReducers: (builder) => {
  builder
  .addCase(getAdverts.fulfilled, (state, {payload}) => {
    state.adventers = [...payload]
  })
  .addCase(getAdverts.rejected, (state) => {
state.adventers = initialState.adventers
})
  }
})

export const adventerReducer = adventerSlice.reducer
export const {addFavorite, removeFavorite, resetAdventers} = adventerSlice.actions