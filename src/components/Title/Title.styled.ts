import styled from "styled-components";

import { TitleAreaProps } from ".";

export const TitleArea = styled.div<TitleAreaProps>`
   display: flex;
   background-color: ${({ theme }) => theme.COLORS.green900};
   position: relative;
   width: 100%;
   height: 110px;
   z-index: 9999;
`

export const NameTitle = styled.span`
   display: flex;
   color: ${({ theme }) => theme.COLORS.white};
   margin: 0 auto;
   align-items: center;
`