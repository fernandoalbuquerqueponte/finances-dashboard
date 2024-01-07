import styled from "styled-components";
import { Link, LinkProps } from "react-router-dom";

export interface SidebarProps extends LinkProps {
   Icon: any
   Text: string
}

export const LinkContainer = styled(Link)`
   display: flex ;
   align-items: center;
   font-size: 16px;
   color: white;
   padding: 10px;
   cursor: pointer;
   border-radius: 10px;
   margin: 0 5px;
   text-decoration: none;

   >svg {
      margin: 0 10px;
      width: 20px;
      height: 20px;
   }

   &:hover {
      background-color: ${({ theme }) => theme.COLORS.green900} ;
   }
`