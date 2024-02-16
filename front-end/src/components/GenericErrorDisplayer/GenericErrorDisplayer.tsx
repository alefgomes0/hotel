import { WarningIcon } from "../svg/WarningIcon";

type GenericErrorDisplayerProps = {
  error: Error | null;
};

export const GenericErrorDisplayer = ({
  error,
}: GenericErrorDisplayerProps) => {
  return (
    <div className="flex items-center gap-x-4 h-max text-lg mt-10">
      <div>
        <WarningIcon width={60} height={60} exclamationColor="#ef4444" />
      </div>
      <div>
        <p>Something went wrong...</p>
        <p className="text-red-500">{error?.message}</p>
        <p>Please check your internet connection or try again later</p>
      </div>
    </div>
  );
};
