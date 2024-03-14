import styled from "styled-components";
import { ArrowCircleUp, ArrowCircleDown } from "@phosphor-icons/react";

import { TransactionCardProps } from "./index";

export const TransactionCard = styled.div<TransactionCardProps>`
  display: flex;
  max-width: 100%;
  width: 750px;
  margin: 9px auto;
  flex-direction: column;
  padding: 0 10px;

  > div {
    display: flex;
    align-items: center;
    padding: 0 15px;
    max-width: 100%;
    height: 60px;
    margin: 5px 0;
    border-radius: 15px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.COLORS.neutral900};

    > div {
      display: flex;
      width: 100%;
      justify-content: space-between;
      padding: 0 16px;
      color: #c4c4c4;
    }
  }

  > p {
    color: ${({ theme }) => theme.COLORS.neutral300};
    font-size: 15px;
    margin: 10px 15px;
  }
`;

export const Entrace = styled.span`
  color: ${({ theme }) => theme.COLORS.green600};
  font-weight: 600;
`;

export const OutFlow = styled.span`
  color: ${({ theme }) => theme.COLORS.red700};
  font-weight: 600;
`;

export const CashOutFlowIcon = styled(ArrowCircleDown).attrs({
  size: 30,
})`
  color: ${({ theme }) => theme.COLORS.red700};
`;

export const CashEntraceIcon = styled(ArrowCircleUp).attrs({
  size: 30,
})`
  color: ${({ theme }) => theme.COLORS.green600};
`;
