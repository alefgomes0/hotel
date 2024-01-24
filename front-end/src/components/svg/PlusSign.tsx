import { IconProps } from "@/types/IconProps";

export const PlusSign = ({ width, height }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="#030712"
        stroke-linecap="round"
        d="M12 3.5v17m8.5-8.5h-17"
      />
    </svg>
  );
};
