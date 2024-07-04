import styled from "styled-components";

export const Backdrop = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--backdrop-color);
  overflow-y: auto;
  z-index: 2;
`;

export const Container = styled.div`
  display: inline-block;
  width: 982px;
  height: 720px;
  margin: auto;
  padding: 40px;
  border-radius: 10px;
  background-color: #fff;
  position: relative;
`;
export const ButtonClose = styled.button`
  position: absolute;
  top: 41px;
  right: 41px;
  padding: 0;
  line-height: 0.6;
  color: var(--color-main);
  border: none;
  background: none;
  cursor: pointer;
`;
export const CloseIcon = styled.svg`
  width: 32px;
  height: 32px;
  stroke: var(--color-main);
`;
export const HeaderModal = styled.div``;
export const NameCamper = styled.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.25;
  margin-bottom: 10px;
`;
export const InfoCamper = styled.div`
  display: flex;
  gap: 18px;
  margin-bottom: 16px;
`;
export const ReviewsCamper = styled.p`
  display: flex;
  align-items: center;
  gap: 4px;
`;
export const IconStar = styled.svg`
  width: 16px;
  height: 16px;
  fill: var(--color-rating);
  stroke: var(--color-rating);
`;
export const LocationCamper = styled.p`
  display: flex;
  align-items: center;
  gap: 4px;
`;
export const IconLocation = styled.svg`
  width: 16px;
  height: 16px;
  fill: transparent;
  stroke: var(--color-main);
`;
export const PriceCamper = styled.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.25;
  margin-bottom: 24px;
`;
export const InfoContainer = styled.div`
  overflow-y: scroll;
  max-height: 507px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #d9d9d9;
    border-radius: 7px;
  }
`;
export const CalleryImg = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`;
export const ImgContainer = styled.div`
  width: 290px;
  height: 310px;
`;
export const ImgCamper = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
`;
export const Description = styled.p`
  color: var(--color-text);
  margin-bottom: 44px;
`;
export const TabDetailsList = styled.ul`
  position: relative;
  display: flex;
  gap: 40px;
  margin-bottom: 68px;
  &::after {
    content: "";
    position: absolute;
    background-color: rgba(16, 24, 40, 0.2);
    top: 40px;
    height: 1px;
    width: 100%;
    border-radius: 1px;
    display: block;
  }
`;
export const TabDetailItem = styled.li``;
export const ButtonDetail = styled.button`
  position: relative;
  &.active {
    &::after {
      content: "";
      position: absolute;
      background-color: var(--color-button);
      top: 38px;
      height: 5px;
      width: 100%;
      border-radius: 2px;
      display: block;
      z-index: 99;
    }
  }
`;
export const DetailsContainer = styled.div`
  display: flex;
  gap: 24px;
`;
