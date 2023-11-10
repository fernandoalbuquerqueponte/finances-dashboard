import styled, { css } from "styled-components";
import { ButtonProps } from ".";

export const Button = styled.button<ButtonProps>`
   border: none;
   font-weight: 400;
   color: ${({ theme }) => theme.COLORS.white};
   border-radius: 6px;
   width: ${props => props.width}px;
   max-width: 100%;
   height: ${props => props.height}px;
   cursor: pointer;
   transition: ease-in 1.5;
   &:hover{
      opacity: 0.7;   
   }

     ${({ color, theme }) => color === 'primary' && css`
        background-color: ${theme.COLORS.violet900};
    `} 

    ${({ color, theme }) => color === 'success' && css`
        background-color: ${theme.COLORS.green600};
    `} 

    ${({ color, theme }) => color === 'danger' && css`
        background-color: ${theme.COLORS.red700};
    `}
`