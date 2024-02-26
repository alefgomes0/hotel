import { IconProps } from "@/types/IconProps";

export const ReturnArrow = ({ width, height }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        d="m9 19l-5-5l5-5m9-5v10H5"
      />
    </svg>
  );
};
