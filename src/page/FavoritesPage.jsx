import { useSelector } from "react-redux";
import { favoriteSelector } from "../redux/adverts/advertsSelectors";
import { CatalogContainer } from "./CatalogPage.styled";
import { AdvertsFilter } from "../components/AdvertsFilter/AdvertsFilter";
import { AdvertsList } from "../components/AdvertsList/AdvertsList";
import { Message } from "./FavoritesPage.styled";

export const FavoritesPage = () => {
  const favorite = useSelector(favoriteSelector);
  return (
    <>
      {favorite.length > 0 ? (
        <CatalogContainer>
          <AdvertsFilter />
          <AdvertsList adverts={favorite} />
        </CatalogContainer>
      ) : (
        <Message>You have no favorites yet</Message>
      )}
    </>
  );
};
