import styled from "styled-components";

import { TitleAreaProps } from ".";

export const TitleArea = styled.div<TitleAreaProps>`
   display: flex;
   background-color: ${({ theme }) => theme.COLORS.violet900};
   position: relative;
   padding-left: 180px;
   width: 100%;
   height: 145px;
   z-index: 9999;
`

export const NameTitle = styled.h2`
   display: flex;
   margin: 0 auto;
   align-items: center;
   color: ${({ theme }) => theme.COLORS.white};
`