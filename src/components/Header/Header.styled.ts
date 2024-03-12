import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 95px;
  border-bottom: 1px solid #c4c4c4;
  padding: 0 30px;

  > a {
    > img {
      width: 50px;
      height: 50px;
    }
  }

  > img {
    width: 55px;
    height: 55px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    gap: 15px;
    > a {
      text-decoration: none;
      color: #c4c4c4;
    }
    > a:hover {
      color: ${({ theme }) => theme.COLORS.green600};
    }
  }

  @media (max-width: 412px) {
    > img {
      display: none;
    }
  }
`;
