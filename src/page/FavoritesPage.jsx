import { useSelector } from "react-redux";
import { favoriteSelector } from "../redux/adverts/advertsSelectors";
import { CatalogContainer } from "./CatalogPage.styled";
import { AsvertsFilter } from "../components/AsvertsFilter/AsvertsFilter";
import { AsvertsList } from "../components/AdvertsList/AsvertsList";
import { Message } from "./FavoritesPage.styled";

export const FavoritesPage = () => {
  const favorite = useSelector(favoriteSelector);
  return (
    <>
      {favorite.length > 0 ? (
        <CatalogContainer>
          <AsvertsFilter />
          <AsvertsList adverds={favorite} />
        </CatalogContainer>
      ) : (
        <Message>No favorite campers yet. Start adding your favorites now!</Message>
      )}
    </>
  );
};
