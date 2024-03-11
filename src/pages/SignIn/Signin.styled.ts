import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 110px;
  padding: 0 10px;

  > img {
    width: 60px;
    height: 60px;
    margin-bottom: 15px;
  }

  > h1 {
    color: ${({ theme }) => theme.COLORS.white};
    text-align: center;
    font-size: 19px;
  }

  > h3 {
    color: ${({ theme }) => theme.COLORS.white};
    text-align: center;
    font-size: 15px;
    font-weight: 400;
    color: #c4c4c4;
  }

  > form {
    display: flex;
    max-width: 100%;
    margin-top: 50px;
    flex-direction: column;
    gap: 15px;
  }

  > div {
    display: flex;
    align-items: center;
    max-width: 100%;
    flex-wrap: nowrap;
    overflow: inherit;
    margin-top: 10px;
    gap: 5px;

    > p {
      color: #c4c4c4;
      font-size: 14px;
      text-overflow: ellipsis;
    }

    > a {
      text-decoration: none;
      color: ${({ theme }) => theme.COLORS.green600};
      font-size: 14px;
    }
  }
`;

export const FormArea = styled.form`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  padding: 0 15px;
  margin: 50px auto;
`;

export const HaveAccountMessageContainer = styled.div`
  color: ${({ theme }) => theme.COLORS.white};
  text-align: center;
  margin-top: 10px;
  font-size: 13px;
`;

export const CreateAccountLink = styled(Link)`
  color: ${({ theme }) => theme.COLORS.green600};
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    opacity: 0.9;
  }
`;
