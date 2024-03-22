import styled, { css } from "styled-components";
import { ButtonProps } from ".";

export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.white};
  border-radius: 6px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  cursor: pointer;
  transition: ease-in 1.5;

  &:hover {
    opacity: 0.7;
  }

  ${({ color, theme }) =>
    color === "primary" &&
    css`
      background-color: ${theme.COLORS.violet900};
    `}

  ${({ color, theme }) =>
    color === "success" &&
    css`
      background-color: ${theme.COLORS.green600};
    `} 

    ${({ color, theme }) =>
    color === "danger" &&
    css`
      background-color: ${theme.COLORS.red700};
    `}
`;
