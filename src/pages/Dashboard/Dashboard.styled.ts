import styled from "styled-components";

export const DashboardContainerr = styled.div`
  display: flex;
  height: 100vh;
`;

export const DashboardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; 
  padding-left: 180px;
  width: 100vw;
  height: 100vh;

  @media (max-width: 975px) {
    flex-direction: column;
    margin-top: 100px;
    
  }

`;