import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 15%;
  bottom: 0;
  right: 0;
  left: 0;
  max-width: 100%;
  width: 600px;
  max-height: 500px;
  margin: 0 auto;
  padding: 25px 20px;
  background-color: #121213;
  border-radius: 10px;
`;

export const ModalNavbarContainer = styled.div`
  border-bottom: 1px solid #c4c4c4;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  margin-bottom: 10px;

  > svg {
    color: #c4c4c4;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }

  > h1 {
    font-size: 19px;
    color: #fafafa;
    font-weight: 500;
  }
`;

export const ButtonsModalContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin: 20px 10px;
`;

export const ModalContentContainer = styled.div`
  display: flex;
  > div {
    div {
      display: flex;
      border: 1px solid #7c7c8a;
      align-items: center;
      gap: 10px;
      background-color: ${({ theme }) => theme.COLORS.neutral900};
      border-radius: 12px;
      margin: 10px 0;
      padding: 10px;
      p {
        color: #fafafa;
        font-size: 17px;
        text-transform: capitalize;
      }
    }
    h2 {
      color: #fafafa;
      font-size: 17px;
      font-weight: 500;
    }
  }
`;
