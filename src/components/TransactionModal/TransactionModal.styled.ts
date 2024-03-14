import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 15%;
  bottom: 0;
  right: 0;
  left: 0;
  max-width: 100%;
  width: 700px;
  height: 400px;
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
    margin: 0 auto;
    text-align: center;
    padding: 0;
    color: #c4c4c4;
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
    th,
    td {
      overflow: ellipsis;
      border: 1px solid #c4c4c4;
      padding: 10px;
      text-transform: capitalize;
    }
  }
  @media screen and (max-width: 600px) {
    table {
      border: 0;
    }

    table thead {
      border: none;
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }

    table tr {
      display: block;
      margin-bottom: 0.6em;
    }

    table td {
      border-bottom: 1px solid #ddd;
      display: block;
      font-size: 0.8em;
      text-align: right;
    }

    table td::before {
      content: attr(data-label);
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }
  }

  div {
    display: flex;
    justify-content: space-around;
    margin-top: 15px;
  }
`;
