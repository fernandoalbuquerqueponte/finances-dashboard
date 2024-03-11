import React from "react";
import * as S from "./Card.styled";

export type CardProps = {
  type?: "Total" | "Entrada" | "Saída";
  icon?: "Total" | "Entrada" | "Saída";
  value?: string;
};

export const Card: React.FC<CardProps> = ({ type, icon, value }) => {
  return (
    <S.CardAreaContainer>
      <div>
        {icon === "Total" && <S.DollarIcon />}
        {icon === "Entrada" && <S.UpCircle />}
        {icon === "Saída" && <S.DownCircle />}
        <h3>{type}</h3>
      </div>
      <S.CardPriceContainer>
        <h2>{value}</h2>
      </S.CardPriceContainer>
    </S.CardAreaContainer>
  );
};
