import styled from "styled-components";
import { SidebarProps } from ".";

export const Container = styled.div<SidebarProps | any>`
   background-color: #171923;
   position: fixed;
   height: 100%;
   top: 0px;
   left: 0px;
   width: 220px;
   left: ${props => props.sidebar ? '0' : '-100%'};
   animation: showSidebar .5s;

   >svg {
      position: fixed;
      color: white;
      width: 30px;
      height: 30px;
      margin-top: 32px;
      margin-left: 32px;
      cursor: pointer;
   }
   @keyframes showSidebar {
      from {
         opacity: 0;
         width: 0;
      }
      to{
         opacity: 1;
         width: 220px;
      }
   }
`

export const Content = styled.div`
   margin-top: 100px;
`