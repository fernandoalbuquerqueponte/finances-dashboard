import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
`;

export const FormArea = styled.form`
   width:450px;
   max-width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 0 15px;
   margin: 50px 0;
`

export const Title = styled.h2`
   color: ${({ theme }) => theme.COLORS.white};
   text-align: center;
   padding: 0 15px;
`
export const SubTitle = styled.span`
   color: ${({ theme }) => theme.COLORS.white};
   text-align: center;
   padding: 0 15px;
`

export const WomanImage = styled.img`
   position: absolute;
   top: 336;
   bottom: 78px;
   right: 60px;
`

export const HaveAccountMessageContainer = styled.div`
   color: ${({ theme }) => theme.COLORS.white};
   text-align: center;
   margin-top: 10px;
   font-size: 13px;
`

export const CreateAccountLink = styled(Link)`
   color: ${({ theme }) => theme.COLORS.green600};
   cursor: pointer;
   font-weight: bold;
   text-decoration: none;

   &:hover {
      opacity: 0.7;
   }
`