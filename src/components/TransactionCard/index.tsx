import React from "react";
import * as S from "./TransactionCard.styled";

import { currencyFormatter } from "../../utils/currencyFormatter";

export interface TransactionCardProps {
  financeName?: string;
  type?: "entrada" | "saída";
  date?: string;
  value?: string;
  onClick: () => void;
}

export const TransactionCard: React.FC<TransactionCardProps> = ({
  date,
  financeName,
  type,
  value = "",
  onClick,
}) => {
  return (
    <S.TransactionCard onClick={onClick}>
      {date && <p>{date}</p>}
      <div>
        {type === "entrada" ? <S.CashEntraceIcon /> : <S.CashOutFlowIcon />}
        <div>
          <span>{financeName}</span>
          {type === "entrada" && (
            <S.Entrace>{currencyFormatter(value)}</S.Entrace>
          )}
          {type === "saída" && (
            <S.OutFlow>{currencyFormatter(value)}</S.OutFlow>
          )}
        </div>
      </div>
    </S.TransactionCard>
  );
};
