import { createSelector } from "@reduxjs/toolkit";

export const advertsSelector = (state) => state.camper.adventers;
export const favoriteSelector = (state) => state.camper.favorites;

export const gerFavoriteSelector = createSelector(
  [advertsSelector, favoriteSelector],
  (adverts, favorite) => {
    return adverts.filter((advert) => {
      return favorite.includes(advert._id);
    });
  },
);
