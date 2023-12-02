import styled from "styled-components";
import { Link } from 'react-router-dom';

import { Money, Wallet, User, ClockCountdown } from "@phosphor-icons/react";

export const IconHeaderContainer = styled.div`
   height: 2rem;
   margin: 20px 20px;
`;

export const SidebarContainer = styled.div`
   display: flex;
   flex-direction: column;
   width: 180px;
   height: 100vh;
   background-color: ${({ theme }) => theme.COLORS.gray900};
   border-right: 1px solid #c4c4c4; 
   position: relative;
   z-index: 10000;
`;

export const RouterLink = styled(Link)`
   text-decoration: none;
   color: #c4c4c4;
   display: flex;
   justify-items: center;
   gap: 10px;
   padding: 10px;

   &:hover{
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

export const MoneySvg = styled(Money).attrs({
   size: 30,
})`
   color: ${({ theme }) => theme.COLORS.green600};
   cursor:pointer;
`;