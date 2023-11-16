import styled from "styled-components";
import { Link } from 'react-router-dom';

import { List, Money, Wallet, User, ClockCountdown, X } from "@phosphor-icons/react";

export const HeaderMenuContainer = styled.div`
   display: flex ;
   width: 100%;
   height: 2rem;
   justify-content: space-between;
   margin: 20px 0;
   padding: 0 15px;
`;

export const SidebarContainer = styled.div`
   display: flex;
   flex-direction: column;
   width: 180px;
   height: 100vh;
   background-color: ${({ theme }) => theme.COLORS.gray900};
   border-right: 0.1rem solid #c4c4c4; 
`;

export const RouterLink = styled(Link)`
   text-decoration: none;
   color: #c4c4c4;
   display: flex;
   justify-items: center;
   gap: 10px;
   padding: 10px;

   &:hover{
      /* opacity: 0.5; */
      background-color: ${({ theme }) => theme.COLORS.green900};
      color: #fff;
      border-radius: 8px;
   }
`;

export const WalletSvg = styled(Wallet).attrs({
   size: 25
})`
   color: ${({ theme }) => theme.COLORS.neutral300}
`;

export const UserSvg = styled(User).attrs({
   size: 25
})`
   color: ${({ theme }) => theme.COLORS.neutral300}
`;

export const AddSvg = styled(ClockCountdown).attrs({
   size: 25
})`
   color: ${({ theme }) => theme.COLORS.neutral300}
`;


export const ListSvg = styled(List).attrs({
   color: "#fafafa",
   size: 25,
})`
   cursor: pointer;
   &:hover {
      opacity: 0.5;
      transition: all 0.3s;
   }
`;

export const CloseMenuIcon = styled(X).attrs({
   size: 30,
})`
   color: ${({ theme }) => theme.COLORS.neutral300};
   cursor: pointer;
   &:hover {
      opacity: 0.5;
      transition: all 0.3s;
   }
`;

export const MoneySvg = styled(Money).attrs({
   size: 30,
})`
   color: ${({ theme }) => theme.COLORS.green600};
   cursor:pointer;
`;