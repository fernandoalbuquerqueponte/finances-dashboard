import * as S from './SidebarItem.styled'
import { SidebarProps } from './SidebarItem.styled'

export const SidebarItem = ({ Icon, Text, ...rest }: SidebarProps) => {
   return (
      <S.LinkContainer {...rest}>
         <Icon />
         {Text}
      </S.LinkContainer>
   )
} 