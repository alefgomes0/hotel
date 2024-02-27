import { ExpandIcon } from "../svg/ExpandIcon";
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
    <article
      className={`relative grid auto-rows-auto grid-cols-1 row-start-2 row-end-3 text-gray-700 gap-3 p-3 mt-4 mb-8 border-[1px] border-gray-400 shadow-subtle`}
    >
      <h6 className="text-xl font-medium">Your Stay</h6>
      <div className="flex items-center gap-x-2">
        <p className="text-sm opacity-70">
          {checkIn && format(checkIn as Date, "eee,  MMMM dd, yyyy")}
        </p>
        <YourStayArrow width={18} height={18} />
        <p className="text-sm opacity-70">
          {checkOut && format(checkOut as Date, "eee,  MMMM dd, yyyy")}
        </p>
      </div>
      <p className="text-sm opacity-[85%]">{stringifiedGuestInfo}</p>
      <div className="h-[1px] bg-gray-400"></div>
      <YourStayTotal />
      <div
        className="absolute top-0 right-0 flex items-center justify-items-end gap-x-1 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <figcaption className="text-xs opacity-60">View details</figcaption>
        <button title="view stay details" aria-label="view stay details">
          <ExpandIcon width={32} height={32} />
        </button>
      </div>
      {isModalOpen && (
        <YourStayModal
          isModalOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
    </article>
  );
};
