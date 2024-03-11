import styled from "styled-components";

export const NewContainer = styled.div`
  > form {
    display: flex;
    gap: 3px;
    flex-direction: column;
    margin: 10px auto;
    padding: 0 20px;
    max-width: 700px;
    > div {
      display: flex;
      color: #fafafa;
      margin: 5px 0;
      > div {
        display: flex;
        align-items: center;
        > input[type="radio"] {
          width: 20px;
          height: 20px;
          border-radius: 25%;
          border: 1px solid #c4c4c4;
          outline: none;
          cursor: pointer;
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          &:checked {
            background-color: ${({ theme }) => theme.COLORS.green600};
          }
        }

        > span {
          padding: 0 10px;
        }
      }
    }
    > label {
      color: ${({ theme }) => theme.COLORS.white};
      font-size: 18px;
      margin-bottom: 5px;
    }

    > textarea {
      max-width: 100%;
      min-width: 100%;
      max-height: 150px;
      background-color: #1e1e1e;
      color: #fafafa;
      font-size: 16px;
      padding: 10px;
      height: 124px;
      border-radius: 7px;
      border: none;
    }
  }
`;
