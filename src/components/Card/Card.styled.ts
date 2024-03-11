import styled from "styled-components";
import { CardProps } from "./index";

import {
  CurrencyCircleDollar,
  ArrowCircleUp,
  ArrowCircleDown,
} from "@phosphor-icons/react";

export const CardAreaContainer = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 105px;
  width: 240px;
  padding: 20px 30px;
  white-space: nowrap;
  border-radius: 1.3rem;
  cursor: pointer;
  border: 1px solid #c4c4c4;

  > div {
    display: flex;
    gap: 5px;
    align-items: center;

    > h3 {
      color: ${({ theme }) => theme.COLORS.white};
      font-weight: 400;
    }
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const CardSubTitle = styled.h3``;

export const CardPriceContainer = styled.div`
  color: ${({ theme }) => theme.COLORS.neutral300};

  > h2 {
    font-weight: 400;
    font-size: 20px;
  }
`;

export const DollarIcon = styled(CurrencyCircleDollar).attrs({
  size: 25,
})`
  color: ${({ theme }) => theme.COLORS.neutral300};
`;

export const UpCircle = styled(ArrowCircleUp).attrs({
  size: 25,
})`
  color: ${({ theme }) => theme.COLORS.green600};
`;

export const DownCircle = styled(ArrowCircleDown).attrs({
  size: 25,
})`
  color: ${({ theme }) => theme.COLORS.red700};
`;
