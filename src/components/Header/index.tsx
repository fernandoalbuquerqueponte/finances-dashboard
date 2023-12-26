import React, { useState } from 'react';
import { List } from "@phosphor-icons/react";
import * as S from './Header.styled'

import { Sidebar } from '../Sidebar';

export const Header: React.FC = () => {
   const [sidebar, setSidebar] = useState(false)
   const showSidebar = () => setSidebar(!sidebar)
   
   return (
      <S.Container>
         <List onClick={showSidebar} />
         {sidebar && <Sidebar sidebar active={setSidebar} />}
      </S.Container>
   )
}