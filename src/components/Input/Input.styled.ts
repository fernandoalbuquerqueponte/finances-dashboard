import styled from "styled-components";
import { InputProps } from "./index";

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.COLORS.white};
  max-width: 100%;
  font-size: 16px;
  justify-content: flex-end;
  padding-left: 0.6rem;
`;

export const Input = styled.input<InputProps>`
  height: 45px;
  background-color: #1e1e21;
  padding: 1rem;
  border-radius: 7px;
  border: none;
  color: ${({ theme }) => theme.COLORS.white};
  outline: none;

  &:focus {
    border: 2px solid
      ${({ theme, hasError }) =>
        hasError ? theme.COLORS.red700 : theme.COLORS.green600};
  }

  &::placeholder {
    color: #7c7c8a;
    font-size: 15px;
  }
`;
