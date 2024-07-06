import { TypeCardItem } from "../TypeCardItem/TypeCardItem";
import icons from "../../img/sprite.svg";
import styles from "./AdvertsCardItem.module.css";
import { useState } from "react";
import CamperInfoModal from "../CamperInfoModal/CamperInfoModal";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorites,
  removeFavorites,
} from "../../redux/adverts/advertsSlice";
import { favoriteSelector } from "../../redux/adverts/advertsSelectors";
import clsx from "clsx";

export const AdvertsCardItem = ({ advert }) => {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const favorites = useSelector(favoriteSelector);

  const switchFavorite = () => {
    const isCardFavorite = isFavorite();
    isCardFavorite
      ? dispatch(removeFavorites(advert._id))
      : dispatch(addFavorites(advert));
  };

  const isFavorite = () => {
    return favorites.some((item) => item._id === advert._id);
  };

  const onClose = () => {
    setModal(false);
  };

  const onOpen = () => {
    setModal(true);
  };

  return (
    <li className={styles.item}>
      <img className={styles.imgCamper} src={advert.gallery[0]} alt={advert.name} />
      <div className={styles.infoContainer}>
        <div className={styles.headerCamper}>
          <h2 className={styles.nameCamper}>{advert.name}</h2>
          <p className={styles.priceCamper}>€{advert.price.toFixed(2)}</p>
          <button type="button">
            <svg className={styles.iconHard} onClick={switchFavorite}>
              <use
                href={`${icons}#${clsx(
                  { "icon-heart-default": !isFavorite() },
                  { "icon-heart-fill": isFavorite() },
                )}`}
              ></use>
            </svg>
          </button>
        </div>
        <div className={styles.infoCamper}>
          <p className={styles.reviewsCamper}>
            <svg className={styles.iconStar}>
              <use href={`${icons}#icon-star`}></use>
            </svg>
            <u>
              {advert.rating}({advert.reviews.length} Reviews)
            </u>
          </p>
          <p className={styles.locationCamper}>
            <svg className={styles.iconLocation}>
              <use href={`${icons}#icon-map-pin`}></use>
            </svg>
            {adverd.location}
          </p>
        </div>
        <p className={styles.description}>{advert.description}</p>
        <ul className={styles.tapyCardList}>
          <TypeCardItem icon="adults" text="adults" value={advert.adults} />
          <TypeCardItem icon="transmission" text="Automatic" />
          <TypeCardItem icon="engine" text="Petrol" />
          <TypeCardItem icon="kitchen" text="Kitchen" />
          <TypeCardItem icon="beds" text="beds" value={advert.details.beds} />
          <TypeCardItem icon="airConditioner" text="AC" />
        </ul>
        <button type="button" className={styles.buttonShowMore} onClick={onOpen}>
          Show more
        </button>
      </div>
      {modal && <CamperInfoModal onClose={onClose} adverd={advert} />}
    </li>
  );
};