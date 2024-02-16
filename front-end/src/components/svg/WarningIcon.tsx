type WarningIconProps = {
  width: number;
  height: number;
  exclamationColor?: string;
};

export const WarningIcon = ({
  width,
  height,
  exclamationColor,
}: WarningIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <path
        fill={`${exclamationColor ? exclamationColor : "#facc15"}`}
        d="M12 20a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m-1-6h2v2h-2zm0-10h2v8h-2z"
      />
    </svg>
  );
};
