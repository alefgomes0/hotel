import { useGuestInfo } from "@/hooks/useGuestInfo";

type BookNowProps = {
  pricePerDay: number;
  selectRoom: () => void;
};

export const BookNow = ({ pricePerDay, selectRoom }: BookNowProps) => {
  const { daysOfStay, numOfGuests, selectedSuiteIndex } = useGuestInfo();
  const isBookNowDisabled =
    numOfGuests.length === selectedSuiteIndex.selected.length;
  const totalAmount = daysOfStay * pricePerDay;

  return (
    <button
      className="flex flex-col gap-y-.5 items-center justify-center w-full lg:w-max  h-max bg-teal-700 hover:bg-teal-600 disabled:bg-gray-400  transition-colors text-gray-100 text-bold px-12 py-2.5 rounded-sm shadow-subtle"
      type="button"
      disabled={isBookNowDisabled}
      onClick={selectRoom}
      title="add suite"
    >
      BOOK NOW
      <p className="text-xs opacity-[75%]">Suite for ${totalAmount}</p>
    </button>
  );
};
