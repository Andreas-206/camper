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
          <AsvertsList adverts={favorite} />
        </CatalogContainer>
      ) : (
        <Message>
        You haven't added any favorites yet. Explore our selection of campers and add your preferred options to your favorites list. This will help you easily compare and choose the perfect camper for your next adventure. Start browsing now and find the ideal match for your travel plans!
        </Message>
      )}
    </>
  );
};
