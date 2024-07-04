import styled from "styled-components";

export const ReviewsList = styled.ul`
  max-width: 430px;
`;
export const ReviewsHeader = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 16px;
`;
export const Avatar = styled.div`
  width: 60px;
  height: 60px;
  background: var(--color-block-features);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-weight: 600;
  font-size: 24;
  color: var(--color-button);
`;
export const NameUser = styled.p`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.3;
`;
export const RatingStarList = styled.ul`
  display: flex;
  gap: 4px;
`;
export const Comment = styled.p`
  margin-bottom: 24px;
`;
