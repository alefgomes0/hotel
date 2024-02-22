import { IconProps } from "@/types/IconProps";

type colorProps = {
  color?: string;
};

type CloseIconProps = IconProps & colorProps;

export const CloseIcon = ({ width, height, color }: CloseIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 50 50"
    >
      <path
        fill={color ? color : "#f9fafb"}
        d="m37.304 11.282l1.414 1.414l-26.022 26.02l-1.414-1.413z"
      />
      <path
        fill={color ? color : "#f9fafb"}
        d="m12.696 11.282l26.022 26.02l-1.414 1.415l-26.022-26.02z"
      />
    </svg>
  );
};
