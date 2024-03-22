import ClipLoader from "react-spinners/ClipLoader";
interface LoadingProps {
  color?: string;
  size?: number;
}
export const SpinnerLoading = ({ color, size = 25 }: LoadingProps) => {
  return (
    <div>
      <ClipLoader size={size} speedMultiplier={1} color={color} />
    </div>
  );
};
