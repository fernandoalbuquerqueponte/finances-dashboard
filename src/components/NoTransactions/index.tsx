import { Link } from "react-router-dom";
import { Button } from "../Button";
import * as S from "./NoTransactions.styled";

interface NoTransactionsProps {
  name: string | undefined;
}
export const NoTransactions = ({ name }: NoTransactionsProps) => {
  return (
    <S.NoTransactionsContainer>
      <h1>
        {name &&
          `Olá ${name}! Você não possui finanças. Clique no botão abaixo para adicionar.`}
      </h1>
      <div>
        <Link to="/new">
          <Button
            width={150}
            height={50}
            color="primary"
            name="Criar nova finança"
          />
        </Link>
      </div>
    </S.NoTransactionsContainer>
  );
};
