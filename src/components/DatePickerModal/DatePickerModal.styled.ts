import styled from "styled-components";

export const DatePickerModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: start; */
  max-width: 100%;
  height: 500px;
  background-color: #121214;
  border-radius: 10px;
  padding: 30px;
  > div {
    display: flex;
    max-width: 100%;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 15px;
    > h1 {
      font-size: 18px;
      font-weight: 500;
    }
    > svg {
      height: 25px;

      &:hover {
        opacity: 0.7;
      }
    }
  }
`;

export const DayPickerContainer = styled.div`
  border: 1px solid #c4c4c4;
  border-radius: 10px;
  margin: 0 auto;
`;
