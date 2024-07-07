import { AdvertsCardItem } from "../AdvertsCardItem/AdvertsCardItem";

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