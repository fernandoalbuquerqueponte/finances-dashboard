import styled from "styled-components";
import { Link, LinkProps } from "react-router-dom";

export interface SidebarProps extends LinkProps {
   Icon: any
   Text: string
}

export const LinkContainer = styled(Link)`
   display: flex ;
   align-items: center;
   font-size: 20px;
   color: white;
   padding: 10px;
   cursor: pointer;
   border-radius: 10px;
   margin: 0 10px 10px;
   text-decoration: none;

   >svg {
      margin: 0 20px;
      width: 25px;
      height: 25px;
   }

   &:hover {
      background-color: ${({ theme }) => theme.COLORS.green900} ;
   }
`