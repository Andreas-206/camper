import styled from "styled-components";

export const FilterContainer = styled.div`
  min-width: 360px;
`;
export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 32px;
`;
export const Label = styled.label`
  color: rgba(16, 24, 40, 0.6);
`;
export const InputContainer = styled.div`
  position: relative;
`;
export const Input = styled.input`
  border-radius: 10px;
  border: none;
  padding: 18px 40px 18px;
  background-color: var(--color-inputs);
  font-size: 16px;
  line-height: 1.25;
  color: var(--color-main);
  outline: none;
  width: 78%;

  &:focus + svg {
    opacity: 1;
  }

  &::placeholder {
    color: rgba(16, 24, 40, 0.6);
  }
`;
export const SvgMap = styled.svg`
  position: absolute;
  fill: transparent;
  stroke: var(--color-main);
  opacity: 0.6;
  left: 18px;
  top: 32%;
`;
export const FilterSection = styled.div`
  margin-bottom: 64px;
`;
export const FilterTitle = styled.h3`
  margin-bottom: 14px;
  font-weight: 500;
`;
export const EquipmentList = styled.ul`
  display: flex;
  gap: 8px 10px;
  flex-wrap: wrap;
  margin-bottom: 32px;
`;
export const EquipmentTitle = styled.h2`
  margin-bottom: 48px;
`;
export const TypeTitle = styled.h2`
  margin-bottom: 48px;
`;
export const TypeList = styled.ul`
  display: flex;
  gap: 10px;
`;
export const ButtonSearch = styled.button`
  border-radius: 200px;
  padding: 16px 60px;
  width: 173px;
  background-color: var(--color-button);
  font-size: 16px;
  line-height: 1.5;
  color: #fff;
  border: none;

  &:is(:hover),
  &:is(:focus) {
    background-color: var(--color-button-hover);
  }
`;
