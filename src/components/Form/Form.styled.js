import styled from "styled-components";

export const FormContainer = styled.div`
  padding: 24px;
  border: 1px solid #10182833;
  border-radius: 10px;
`;
export const FormHeader = styled.div``;
export const FormTitle = styled.h2``;
export const FormDesctiption = styled.p``;
export const InputsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 24px;
`;
export const Input = styled.input`
  border-radius: 10px;
  border: none;
  padding: 18px;
  background-color: var(--color-inputs);
  font-size: 16px;
  line-height: 1.25;
  color: var(--color-main);
  outline: none;

  &::placeholder {
    color: rgba(16, 24, 40, 0.6);
  }
`;
export const TextArea = styled.textarea`
  border-radius: 10px;
  border: none;
  padding: 18px;
  background-color: var(--color-inputs);
  font-size: 16px;
  line-height: 1.25;
  color: var(--color-main);
  outline: none;
  height: 114px;
  resize: none;

  &::placeholder {
    color: rgba(16, 24, 40, 0.6);
  }
`;
export const BtnSubmit = styled.button`
  border-radius: 200px;
  padding: 16px 60px;
  background-color: var(--color-button);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #fff;
  border: none;

  &:is(:hover),
  &:is(:focus) {
    background-color: var(--color-button-hover);
  }

  &:disabled {
    cursor: not-allowed;

    &:is(:hover),
    &:is(:focus) {
      background-color: var(--color-button);
    }
  }
`;
export const Message = styled.span`
  color: var(--secondary-red);
  font-size: 14px;
`;
