import { IconProps } from "@/types/IconProps";

export const YourStayArrow = ({ width, height }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 256 256"
    >
      <g transform="rotate(90 128 128)">
        <path
          fill="currentColor"
          d="M202.83 114.83a4 4 0 0 1-5.66 0L132 49.66V216a4 4 0 0 1-8 0V49.66l-65.17 65.17a4 4 0 0 1-5.66-5.66l72-72a4 4 0 0 1 5.66 0l72 72a4 4 0 0 1 0 5.66"
        />
      </g>
    </svg>
  );
};
