import styled from "styled-components";
import { CardProps } from "./index";

import { CurrencyCircleDollar, ArrowCircleUp, ArrowCircleDown } from "@phosphor-icons/react";

export const CardAreaContainer = styled.div<CardProps>`
   display: flex;
   flex-direction: column;
   max-width: 100%;
   width: 250px;
   margin: 20px 15px;
   padding: 20px 30px;
   background-color: #1A1A1A;
   border-radius: 2rem;
   cursor: pointer;
   border: 1px solid	#c4c4c4;

   &:hover {
      opacity: 0.7;
   }
`

export const CardTitle = styled.div`
   display: flex;
   gap: 5px;
   align-items: center;
`

export const CardSubTitle = styled.h3`
   color: ${({ theme }) => theme.COLORS.white};
`

export const CardIcon = styled.div`

`

export const DollarIcon = styled(CurrencyCircleDollar).attrs({
   size: 25,
})`
color: ${({ theme }) => theme.COLORS.neutral300};
`;

export const UpCircle = styled(ArrowCircleUp).attrs({
   size: 25,
})`
   color: ${({ theme }) => theme.COLORS.green600}
`;

export const DownCircle = styled(ArrowCircleDown).attrs({
   size: 25,
})`
   color: ${({ theme }) => theme.COLORS.red700}
`;

export const CardValue = styled.h2`
   color: ${({ theme }) => theme.COLORS.neutral300};
`