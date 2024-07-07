import styled from "styled-components";

export const Item = styled.li`
  padding: 24px;
  border: 1px solid #10182833;
  border-radius: 20px;
  display: flex;
  gap: 24px;
  max-width: 888px;
`;
export const ImgCamper = styled.img`
  width: 290px;
  height: 310px;
  border-radius: 10px;
  object-fit: cover;
`;
export const HeaderCamper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 11px;
  margin-bottom: 8px;
`;
export const NameCamper = styled.h2`
  flex-grow: 1;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.25;
`;
export const PriceCamper = styled.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.25;
`;
export const IconHard = styled.svg`
  width: 24px;
  height: 24px;
  fill: transparent;
  stroke: var(--color-main);
`;
export const InfoCamper = styled.div`
  display: flex;
  gap: 18px;
  margin-bottom: 24px;
`;
export const ReviewsCamper = styled.p`
  display: flex;
  align-items: center;
  gap: 4px;
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
export const IconStar = styled.svg`
  width: 16px;
  height: 16px;
  fill: var(--color-rating);
  stroke: var(--color-rating);
`;

export const Description = styled.p`
  width: 525px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--color-text);
  margin-bottom: 24px;
`;
export const TapyCardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;
export const ButtonShowMore = styled.button`
  padding: 16px 40px;
  background-color: var(--color-button);
  color: #ffffff;
  font-weight: 600;
  letter-spacing: -0.5%;
  border-radius: 200px;
`;
