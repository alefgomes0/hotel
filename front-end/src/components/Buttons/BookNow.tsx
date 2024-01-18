import { useGuestInfo } from "@/hooks/useGuestInfo";

type BookNowProps = {
  pricePerDay: number;
};

export const BookNow = ({ pricePerDay }: BookNowProps) => {
  const { daysOfStay, numOfGuests } = useGuestInfo();
  const totalAmount = daysOfStay * pricePerDay;

  return (
    <button
      className="flex flex-col gap-y-1 items-center justify-center w-max h-max bg-teal-700 hover:bg-teal-600 transition-colors text-gray-100 text-lg text-bold px-10 py-3 rounded-sm"
      type="button"
    >
      RESERVE
      <p className="text-xs opacity-[75%]">
        {numOfGuests.apartment} {numOfGuests.apartment > 1 ? "suites" : "suite"}{" "}
        por R$ {totalAmount}
      </p>
    </button>
  );
};
