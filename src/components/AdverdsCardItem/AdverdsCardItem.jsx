import { TypeCardItem } from "../TypeCardItem/TypeCardItem";
import icons from "../../img/sprite.svg";
import {
  Description,
  HeaderCamper,
  ImgCamper,
  Item,
  IconHard,
  NameCamper,
  PriceCamper,
  TapyCardList,
  IconStar,
  ReviewsCamper,
  InfoCamper,
  IconLocation,
  LocationCamper,
  ButtonShowMore,
} from "./AdverdsCardItem.styled";
import { useState } from "react";
import CamperInfoModal from "../CamperInfoModal/CamperInfoModal";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorites,
  removeFavorites,
} from "../../redux/adverts/advertsSlice";
import { favoriteSelector } from "../../redux/adverts/advertsSelectors";
import clsx from "clsx";

export const AdverdsCardItem = ({ adverd }) => {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const favorites = useSelector(favoriteSelector);

  const switchFavorite = () => {
    const isCardFavorite = isFavorite();
    isCardFavorite
      ? dispatch(removeFavorites(adverd._id))
      : dispatch(addFavorites(adverd));
  };
  const isFavorite = () => {
    return favorites.some((item) => item._id === adverd._id);
  };
  const onClose = () => {
    setModal(false);
  };
  const onOpen = () => {
    setModal(true);
  };

  return (
    <Item>
      <ImgCamper src={adverd.gallery[0]} alt={adverd.name} />
      <div className="info-container">
        <HeaderCamper>
          <NameCamper>{adverd.name}</NameCamper>
          <PriceCamper>€{adverd.price.toFixed(2)}</PriceCamper>
          <button type="button">
            <IconHard onClick={switchFavorite}>
              <use
                href={`${icons}#${clsx(
                  { "icon-heart-default": !isFavorite() },
                  { "icon-heart-fill": isFavorite() },
                )}`}
              ></use>
            </IconHard>
          </button>
        </HeaderCamper>
        <InfoCamper>
          <ReviewsCamper>
            <IconStar>
              <use href={`${icons}#icon-star`}></use>
            </IconStar>
            <u>
              {adverd.rating}({adverd.reviews.length} Reviews)
            </u>
          </ReviewsCamper>
          <LocationCamper>
            <IconLocation>
              <use href={`${icons}#icon-map-pin`}></use>
            </IconLocation>
            {adverd.location}
          </LocationCamper>
        </InfoCamper>
        <Description>{adverd.description}</Description>
        <TapyCardList>
          <TypeCardItem icon="adults" text="adults" value={adverd.adults} />
          <TypeCardItem icon="transmission" text="Automatic" />
          <TypeCardItem icon="engine" text="Petrol" />
          <TypeCardItem icon="kitchen" text="Kitchen" />
          <TypeCardItem icon="beds" text="beds" value={adverd.details.beds} />
          <TypeCardItem icon="airConditioner" text="AC" />
        </TapyCardList>
        <ButtonShowMore type="button" onClick={() => onOpen()}>
          Show more
        </ButtonShowMore>
      </div>
      {modal && <CamperInfoModal onClose={onClose} adverd={adverd} />}
    </Item>
  );
};
