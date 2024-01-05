import { InputHTMLAttributes, useId } from 'react'
import * as S from './Input.styled'

type InputProps = {
   label?: string;
   placeholder?: string;
} & InputHTMLAttributes<HTMLInputElement>

export const Input = ({ label = '', placeholder, ...rest }: InputProps) => {
   const labelId = useId()
   return (
      <S.InputContainer>
         {label && <S.Label htmlFor={labelId} >{label}</S.Label>}
         <S.Input id={labelId} placeholder={placeholder} {...rest} />
      </S.InputContainer>
   )
}