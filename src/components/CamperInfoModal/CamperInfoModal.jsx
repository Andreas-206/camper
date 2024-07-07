import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useLockBodyScroll } from "react-use";
import {
  Backdrop,
  ButtonClose,
  ButtonDetail,
  CalleryImg,
  CloseIcon,
  Container,
  Description,
  DetailsContainer,
  HeaderModal,
  IconLocation,
  IconStar,
  ImgCamper,
  ImgContainer,
  InfoCamper,
  InfoContainer,
  LocationCamper,
  NameCamper,
  PriceCamper,
  ReviewsCamper,
  TabDetailItem,
  TabDetailsList,
} from "./CamperInfoModal.styled";
import icons from "../../img/sprite.svg";
import clsx from "clsx";
import { Form } from "../Form/Form";
import { Features } from "../Features/Features";
import { Reviews } from "../Reviews/Reviews";
import { nanoid } from "nanoid";

const modalRoot = document.querySelector("#modal");

const CamperInfoModal = ({ onClose, adverd }) => {
  useLockBodyScroll(true);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const onEscPress = (e) => {
      if (e.code === "Escape") onClose();
    };

    window.addEventListener("keydown", onEscPress);

    return () => {
      window.removeEventListener("keydown", onEscPress);
    };
  }, [onClose]);

  const handleClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handleClick}>
      <Container>
        <ButtonClose type="button" onClick={onClose} aria-label="Close">
          <CloseIcon>
            <use href={`${icons}#icon-cross`}></use>
          </CloseIcon>
        </ButtonClose>
        <HeaderModal>
          <NameCamper>{adverd.name}</NameCamper>
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
          <PriceCamper>{adverd.price.toFixed(2)}</PriceCamper>
        </HeaderModal>
        <InfoContainer>
          <CalleryImg>
            {adverd.gallery.map((imgUrl) => (
              <ImgContainer key={nanoid()}>
                <ImgCamper src={imgUrl} alt={adverd.name} />
              </ImgContainer>
            ))}
          </CalleryImg>
          <Description>{adverd.description}</Description>

          <TabDetailsList>
            <TabDetailItem>
              <ButtonDetail
                type="button"
                className={clsx(isActive && "active")}
                onClick={() => setIsActive(true)}
              >
                Features
              </ButtonDetail>
            </TabDetailItem>
            <TabDetailItem>
              <ButtonDetail
                type="button"
                className={clsx(!isActive && "active")}
                onClick={() => setIsActive(false)}
              >
                Reviews
              </ButtonDetail>
            </TabDetailItem>
          </TabDetailsList>
          <DetailsContainer>
            {isActive ? (
              <Features adverd={adverd} />
            ) : (
              <Reviews adverd={adverd} />
            )}
            <Form />
          </DetailsContainer>
        </InfoContainer>
      </Container>
    </Backdrop>,
    modalRoot,
  );
};

export default CamperInfoModal;
