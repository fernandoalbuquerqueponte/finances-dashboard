import { InputHTMLAttributes, forwardRef, useId } from "react";
import * as S from "./Input.styled";

export type InputProps = {
  label?: string;
  placeholder?: string;
  hasError?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, placeholder, hasError = false, ...rest }, ref) => {
    const labelId = useId();
    return (
      <S.InputContainer>
        {label && <S.Label htmlFor={labelId}>{label}</S.Label>}
        <S.Input
          id={labelId}
          placeholder={placeholder}
          hasError={hasError}
          {...rest}
          ref={ref}
        />
      </S.InputContainer>
    );
  }
);
