import { IconProps } from "@/types/IconProps";

export const CloseIcon = ({ width, height }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 50 50"
    >
      <path
        fill="#fff"
        d="m37.304 11.282l1.414 1.414l-26.022 26.02l-1.414-1.413z"
      />
      <path
        fill="#fff"
        d="m12.696 11.282l26.022 26.02l-1.414 1.415l-26.022-26.02z"
      />
    </svg>
  );
};
