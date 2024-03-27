import styled from "styled-components";

export const NoTransactionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 80vw;
  justify-content: center;
  padding: 30px;
  border: 1px solid #c4c4c4;
  border-radius: 15px;

  > div {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }

  > h1 {
    color: #c4c4c4;
    font-size: 16px;
    font-weight: 500;
  }
`;
