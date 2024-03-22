import { ButtonHTMLAttributes } from "react";
import * as S from "./Button.styled";

export type ButtonProps = {
  color?: "primary" | "success" | "danger";
  width?: number;
  height?: number;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ color, width, height, ...props }: ButtonProps) => {
  return (
    <S.Button color={color} width={width} height={height} {...props}></S.Button>
  );
};
