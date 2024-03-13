import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  max-width: 600px;
  height: 300px;
  position: fixed;
  top: 15%;
  margin: 0 auto;
  padding: 25px 20px;
  background-color: #121213;
  border-radius: 10px;
  padding-bottom: 10px;
`;

export const ModalNavbarContainer = styled.div`
  border-bottom: 1px solid #c4c4c4;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  margin-bottom: 30px;

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
  }
`;

export const ModalContentContainer = styled.div`
  table {
    border: 1px solid #c4c4c4;
    margin: 0;
    text-align: center;
    padding: 0;
    color: #c4c4c4;
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
    border-radius: 10px;
    th,
    td {
      border: 1px solid #c4c4c4;
      padding: 10px;
      text-transform: capitalize;
    }
  }

  div {
    display: flex;
    justify-content: space-around;
    margin-top: 15px;
  }
`;
