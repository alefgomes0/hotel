import { IconProps } from "@/types/IconProps";

export const FoodIcon = ({ width, height }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 16"
    >
      <path
        fill="currentColor"
        d="M3.5 1a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 0 1 1.415V1.5a.5.5 0 0 1 1 0v4.415A1.5 1.5 0 0 0 7 4.5v-3a.5.5 0 0 1 1 0v3a2.5 2.5 0 0 1-2 2.45v7.55a.5.5 0 0 1-1 0V6.95A2.5 2.5 0 0 1 3 4.5v-3a.5.5 0 0 1 .5-.5m6.979 1.479c.159-.16.338-.283.521-.364V7h-1V3.5c0-.337.174-.717.479-1.021M11 8v6.5a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5c-.663 0-1.283.326-1.729.771C9.326 2.217 9 2.837 9 3.5v4a.5.5 0 0 0 .5.5z"
      />
    </svg>
  );
};
