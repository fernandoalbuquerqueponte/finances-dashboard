import styled from "styled-components";

import { TitleAreaProps } from ".";

export const TitleArea = styled.div<TitleAreaProps>`
   background-color: ${({ theme }) => theme.COLORS.violet900};
   display: flex;
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 130px;
   z-index: 9999;
`

export const NameTitle = styled.h2`
   display: flex;
   margin: 0 auto;
   align-items: center;
   color: ${({ theme }) => theme.COLORS.white};
`