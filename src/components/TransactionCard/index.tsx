import React from "react"
import * as S from "./TransactionCard.styled"

export interface TransactionCardProps {
   financeName?: string
   type?: 'entrada' | 'saída'
   date?: string
   value?: string
}

export const TransactionCard: React.FC<TransactionCardProps> = ({ date, financeName, type, value }) => {
   return (
      <S.TransactionCard>
         {date && <p>{date}</p>}
         <div>
            {type === 'entrada' ? <S.CashEntraceIcon /> : <S.CashOutFlowIcon />}
            <div>
               <span>{financeName}</span>
               {type === 'entrada' && <S.Entrace>{value}</S.Entrace>}
               {type === 'saída' && <S.OutFlow>{value}</S.OutFlow>}
            </div>
         </div>
      </S.TransactionCard>
   )
}