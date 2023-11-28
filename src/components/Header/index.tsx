import React, { useState } from 'react';
import * as S from './Header.styled'

export const Header: React.FC = () => {
   const [headerIsOpen, setHeaderIsOpen] = useState(true)

   return (
      <>
         {headerIsOpen ? (
            <S.SidebarContainer isOpen={!!headerIsOpen}>
               <S.HeaderMenuContainer>
                  <S.MoneySvg />
                  <S.CloseMenuIcon onClick={() => setHeaderIsOpen(false)} />
               </S.HeaderMenuContainer>

               <S.RouterLink to="/dashboard">
                  <S.WalletSvg />
                  Finanças
               </S.RouterLink>

               <S.RouterLink to="/new">
                  <S.AddSvg />
                  Adicionar
               </S.RouterLink>

               <S.RouterLink to="/profile">
                  <S.UserSvg />
                  Perfil
               </S.RouterLink>
            </S.SidebarContainer>
         ) : (
            <S.HeaderMenuContainer>
               <S.ListSvg onClick={() => setHeaderIsOpen(true)} />
            </S.HeaderMenuContainer>
         )}
      </>
   )
}