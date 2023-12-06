import React from "react";
import * as S from "./Card.styled"

export type CardProps = {
   type?: "Total" | "Entrada" | "Saída";
   icon?: "Total" | "Entrada" | "Saída";
   value?: string | undefined;
}

export const Card = ({ type, icon, value }: CardProps) => {
   return (
      <S.CardAreaContainer>
         <S.CardTitle>
            {icon === 'Total' && <S.DollarIcon />}
            {icon === 'Entrada' && <S.UpCircle />}
            {icon === 'Saída' && <S.DownCircle />}
            <S.CardSubTitle>{type}</S.CardSubTitle>
         </S.CardTitle>
         <S.CardValue>{value}</S.CardValue>
      </S.CardAreaContainer>
   )
}