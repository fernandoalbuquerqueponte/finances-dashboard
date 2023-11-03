import { InputHTMLAttributes, useId, ReactNode } from 'react'
import * as S from './Input.styled'

type InputProps = {
   label?: string;
   icon?: ReactNode;
   placeholder?: string;
} & InputHTMLAttributes<HTMLInputElement>

export const Input = ({ label = '', placeholder, icon = "", ...rest }: InputProps) => {
   const labelId = useId()
   return (
      <>
         <S.Container>
            {label && <S.Label htmlFor={labelId} >{label}</S.Label>}
            <S.Input id={labelId} placeholder={placeholder} {...rest} />
         </S.Container>
      </>
   )
}