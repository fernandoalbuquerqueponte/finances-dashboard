import styled from "styled-components";

import { TitleAreaProps } from ".";

export const TitleArea = styled.div<TitleAreaProps>`
   display: flex;
   background-color: ${({ theme }) => theme.COLORS.violet900};
   width: 100vw;
   height: 145px;
   z-index: 9999;
`

export const NameTitle = styled.h4`
   display: flex;
   color: ${({ theme }) => theme.COLORS.white};
   margin: 0 auto;
   align-items: center;
`