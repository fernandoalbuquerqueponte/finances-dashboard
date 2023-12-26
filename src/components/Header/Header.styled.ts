import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   height: 100vh;
   align-content: center;
   background-color: ${({ theme }) => theme.COLORS.gray900};
   position: fixed;
   z-index: 10000;

   > svg {
      display: flex;
      position: fixed;
      color: #c4c4c4;
      width: 30px;
      height: 30px;
      margin-top: 32px;
      margin-left: 32px;
      cursor: pointer;
   }
`;