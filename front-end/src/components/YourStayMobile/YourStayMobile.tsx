import format from "date-fns/format";
import { useState } from "react";
import { useGuestInfo } from "@/hooks/useGuestInfo";
import { stringifyGuestInfo } from "@/utils/helpers";
import { YourStayArrow } from "../svg/YourStayArrow";
import { YourStayModal } from "../YourStayModal/YourStayModal";
import { YourStayTotal } from "../YourStayFooter/YourStayTotal";

export const YourStayMobile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { checkIn, checkOut, numOfGuests } = useGuestInfo();
  const stringifiedGuestInfo = stringifyGuestInfo(numOfGuests);

  return (
    <article className="relative grid auto-rows-auto grid-cols-1 col-start-1 col-end-2 text-gray-700 gap-2 p-3 mb-4 border-[1px] border-gray-400 shadow-subtle">
      <h6 className="text-xl font-medium">Your Stay</h6>
      <div className="flex items-center gap-x-2">
        <p className="text-sm opacity-80">
          {checkIn && format(checkIn as Date, "eee,  MMMM dd, yyyy")}
        </p>
        <YourStayArrow width={18} height={18} />
        <p className="text-sm opacity-80">
          {checkOut && format(checkOut as Date, "eee,  MMMM dd, yyyy")}
        </p>
      </div>
      <p>Teste: {stringifiedGuestInfo}</p>
      <YourStayTotal />
      {isModalOpen && (
        <YourStayModal
          isModalOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
    </article>
  );
};
