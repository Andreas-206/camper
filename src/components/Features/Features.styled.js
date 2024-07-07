import styled from "styled-components";

export const FeaturesContainer = styled.div`
  width: 430px;
`;
export const TypeCartList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 44px;
`;
export const TitleDetails = styled.h3`
  font-size: 20px;
  line-height: 1.2;
  position: relative;
  margin-bottom: 48px;

  &::after {
    content: "";
    position: absolute;
    background-color: rgba(16, 24, 40, 0.1);
    top: 46px;
    height: 1px;
    width: 100%;
    border-radius: 1px;
    display: block;
  }
`;

export const DetailsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
export const DetailItem = styled.li`
  display: flex;
  justify-content: space-between;
  & span {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.3;
  }
`;
