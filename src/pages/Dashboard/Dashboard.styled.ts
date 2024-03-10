import styled from "styled-components";

export const DashboardContainer = styled.div`
  height: 100vh;
`;

export const CardValuesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding-left: 180px; */
  margin: 50px 0;

  @media (max-width: 975px) {
    flex-direction: column;
  }
`;

export const NoTransactionsContainer = styled.div`
  display: flex;
  max-width: 100%;
  justify-content: center;
  margin: 0 15px;
`;

export const TransactionContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* padding-left: 180px; */
  justify-content: center;
`;
