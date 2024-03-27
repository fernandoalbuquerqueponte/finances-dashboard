import styled from "styled-components";

export const DashboardContainer = styled.div`
  max-width: 100%;
  overflow-x: hidden;
`;

export const DatePickerContainer = styled.div`
  position: absolute;
  top: 100px;
`;

export const WelcomeButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  > div {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 0 10px;
  }

  > a {
    text-decoration: none;
  }
`;

export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.neutral300};
  > div {
    margin-bottom: 10px;
    > p {
      text-transform: capitalize;
      font-size: 17px;
      font-weight: 500;
      margin-bottom: 7px;
    }
  }
  h1 {
    font-size: 20px;
  }
`;

export const CardValuesContainer = styled.div`
  display: flex;
  gap: 15px;
  width: 100%;
  padding: 0 15px;
  justify-content: center;
  margin: 60px auto 30px;
  overflow-x: scroll;

  @media (max-width: 693px) {
    justify-content: flex-start;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const NoTransactionsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 30px 15px;
`;

export const LoadingContainer = styled.div`
  margin: 70px auto;
`;

export const TransactionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  margin-bottom: 50px;
`;

export const TransactionsCardContainer = styled.div`
  margin: 10px auto;
  > h1 {
    color: ${({ theme }) => theme.COLORS.gray700};
    text-transform: uppercase;
    padding-left: 20px;
    font-size: 15px;
    max-width: 150px;
  }
`;
