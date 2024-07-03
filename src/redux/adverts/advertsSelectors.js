import { createSelector } from '@reduxjs/toolkit';

export const advertsSelector = state => state.camper.adventers;
export const favoriteSelector = state => state.camper.favorites;

export const getFavoriteSelector = createSelector(
  [advertsSelector, favoriteSelector],
  (adventers, favorites) => {
    return adverts.filter(advert => {
      return favorites.includes(advert._id)
    })
    }
)