import { PlusSign } from "../svg/PlusSign";

export const AddAnotherSuite = () => {
  return (
    <div className="flex items-center gap-x-2">
      <button
        className="flex items-center justify-center w-8 h-8 rounded-full border-[1px] border-gray-400 pl-.5"
        type="button"
      >
        <PlusSign width={16} height={16} />
      </button>
      <p className="text-xs font-semibold underline underline-offset-2">
        ADD ANOTHER SUITE
      </p>
    </div>
  );
};
