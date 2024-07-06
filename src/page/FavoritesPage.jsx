import { useSelector } from "react-redux";
import { favoriteSelector } from "../redux/adverts/advertsSelectors";
import { CatalogContainer } from "./CatalogPage.styled";
import { AsvertsFilter } from "../components/AsvertsFilter/AsvertsFilter";
import { AdvertsList } from "../components/AdvertsList/AdvertsList";
import { Message } from "./FavoritesPage.styled";

export const FavoritesPage = () => {
  const favorite = useSelector(favoriteSelector);
  return (
    <>
      {favorite.length > 0 ? (
        <CatalogContainer>
          <AsvertsFilter />
          <AdvertsList adverts={favorite} />
        </CatalogContainer>
      ) : (
        <Message>You have no favorites yet</Message>
      )}
    </>
  );
};
