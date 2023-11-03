import styled from "styled-components";

export const Container = styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
`;

export const Title = styled.h1`
   color: ${({ theme }) => theme.COLORS.white};
`
export const SubTitle = styled.h5`
   color: ${({ theme }) => theme.COLORS.white};
`

export const WomanImage = styled.img`
   position: absolute;
   top: 336;
   bottom: 78px;
   right: 60px;
`;