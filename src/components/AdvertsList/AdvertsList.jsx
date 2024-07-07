import React from 'react';
import { AdvertsCardItem } from "../AdvertsCardItem/AdvertsCardItem";
import styles from "./AdvertsList.module.css";

export const AdvertsList = ({ adverts }) => {
  return (
    <div className={styles.advertsContainer}>
      <ul className={styles.list}>
        {adverts.length > 0 &&
          adverts.map((advert) => (
            <AdvertsCardItem key={advert._id} advert={advert} />
          ))}
      </ul>
    </div>
  );
};