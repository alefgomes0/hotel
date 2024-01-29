import { useGuestInfo } from "@/hooks/useGuestInfo";

type BookNowProps = {
  pricePerDay: number;
  selectRoom: () => void;
};

export const BookNow = ({ pricePerDay, selectRoom }: BookNowProps) => {
  const { daysOfStay, numOfGuests } = useGuestInfo();
  const totalAmount = daysOfStay * pricePerDay;

  return (
    <button
      className="flex flex-col gap-y-.5 items-center justify-center w-max h-max bg-teal-700 hover:bg-teal-600 transition-colors text-gray-100 text-bold px-12 py-2.5 rounded-sm shadow-[0_2px_2px_0_rgba(0,0,0,0.2)]"
      type="button"
      onClick={selectRoom}
    >
      BOOK NOW
      <p className="text-xs opacity-[75%]">
        Suite for ${totalAmount}
      </p>
    </button>
  );
};
