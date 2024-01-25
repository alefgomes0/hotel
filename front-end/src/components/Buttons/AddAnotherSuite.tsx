import { PlusSign } from "../svg/PlusSign";

type AddAnotherSuite = {
  addNewRoom: () => void;
}

export const AddAnotherSuite = ({ addNewRoom }: AddAnotherSuite) => {
  return (
    <div className="flex items-center gap-x-2" onClick={(e: React.MouseEvent) => {
      e.stopPropagation();
      addNewRoom();
    }}>
      <button
        className="flex items-center justify-center w-8 h-8 rounded-full border-[1px] border-gray-400 pl-.5 hover:scale-[1.08] translate-transform"
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
