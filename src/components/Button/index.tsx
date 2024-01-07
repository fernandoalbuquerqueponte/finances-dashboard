import { ButtonHTMLAttributes, ReactNode } from 'react'
import * as S from './Button.styled'

export type ButtonProps = {
   name?: string;
   color?: 'primary' | 'success' | 'danger';
   width?: number;
   height?: number;
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ name, color, width, height, ...props }: ButtonProps) => {
   return (
      <S.ButtonContainer >
         <S.Button
            color={color}
            width={width}
            height={height}
            {...props}
         >
            {name}
         </S.Button>
      </S.ButtonContainer>
   )
}