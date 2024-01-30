import { IconProps } from "../../types/IconProps";

export const SquaredArrow = ({ width, height }: IconProps) => {
  return (
    <div className="w-8 h-8 bg-gray-500 flex items-center justify-center rounded-sm opacity-70">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24" className="rotate-180"
      >
        <path
          fill="#fff"
          d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A.998.998 0 0 0 5 3v18a1 1 0 0 0 .536.886M7 4.909L17.243 12L7 19.091z"
        />
      </svg>
    </div>
  );
};
