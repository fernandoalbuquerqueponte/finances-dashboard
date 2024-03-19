import { SpinnerCircular } from "spinners-react";

interface LoadingProps {
  size?: number;
  color?: string;
}

export const Loading = ({ size, color }: LoadingProps) => {
  return <SpinnerCircular size={size} color={color} />; 
};
