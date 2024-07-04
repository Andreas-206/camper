import styled from "styled-components";

export const FilterCardItem = styled.li`
  border: 1px solid #10182833;
  border-radius: 10px;
  width: calc((100% - 20px) / 3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 95px;
`;
export const IconFilter = styled.svg`
  fill: transparent;
  stroke: var(--color-main);
  &.SM {
    width: 32px;
    height: 32px;
  }
  &.XL {
    width: 40px;
    height: 28px;
  }
`;
export const TextCard = styled.p`
  text-align: center;
`;
