import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AdvertsList } from '../components/AdvertsList/AdvertsList';
import { AdvertsFilter } from '../components/AdvertsFilter/AdvertsFilter';
import styles from './CatalogPage.module.css';
import { advertsSelector } from '../redux/adverts/advertsSelectors';
import { getAdverts } from '../redux/adverts/advertsOperations';

export const CatalogPage = () => {
  const adverts = useSelector(advertsSelector);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdverts(page));
  }, [dispatch, page]);

  const handleClick = () => {
    setPage(page + 1);
  };

  return (
    <div className={styles.catalogContainer}>
      {adverts.length > 0 && (
        <>
          <AdvertsFilter />
          <div className={styles.listContainer}>
            <AdvertsList adverts={adverts} />
            <button className={styles.buttonLoadMore} onClick={handleClick}>
              Load more
            </button>
          </div>
        </>
      )}
    </div>
  );
};