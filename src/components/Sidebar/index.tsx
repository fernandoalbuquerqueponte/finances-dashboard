import * as S from './Sidebar.styled'
import { X, Wallet, ClockCountdown, User } from "@phosphor-icons/react";

import { SidebarItem } from '../SidebarItem';

export interface SidebarProps {
   active: any;
   sidebar: boolean;
}

export const Sidebar = ({ active }: SidebarProps) => {
   const closeSidebar = () => active(false)
   return (
      <S.Container sidebar={active}>
         <X onClick={closeSidebar} />
         <S.Content>
            <SidebarItem to="/dashboard" Icon={Wallet} Text="Finanças" />
            <SidebarItem to="/new" Icon={ClockCountdown} Text="Adicionar" />
            <SidebarItem to="/profile" Icon={User} Text="Perfil" />
         </S.Content>
      </S.Container>
   )
}