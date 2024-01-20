import React from "react";
import * as S from "./Card.styled"

export type CardProps = {
   type?: "total" | "entrada" | "saída";
   icon?: "total" | "entrada" | "saída";
   value?: string | undefined | number;
}

export const Card: React.FC<CardProps> = ({ type, icon, value }) => {
   return (
      <S.CardAreaContainer>
         <S.CardTitle>
            {icon === 'total' && <S.DollarIcon />}
            {icon === 'entrada' && <S.UpCircle />}
            {icon === 'saída' && <S.DownCircle />}
            <S.CardSubTitle>{type}</S.CardSubTitle>
         </S.CardTitle>
         <S.CardValue>{value}</S.CardValue>
      </S.CardAreaContainer>
   )
}