import { useSelector } from 'react-redux';
import { favoriteSelector } from '../redux/adverts/advertsSelectors';
import { CatalogContainer } from './CatalogPage.styled';
import { AsvertsFilter } from '../components/AsvertsFilter/AsvertsFilter';
import { AsvertsList } from '../components/AdvertsList/AdvertsList';
import styles from './FavoritesPage.module.css';

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
        <p className={styles.message}>You haven't added any favorites yet.</p>
      )}
    </>
  );
};