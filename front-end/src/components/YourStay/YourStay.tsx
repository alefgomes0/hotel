import { useGuestInfo } from "@/hooks/useGuestInfo";
import { YourStayHeader } from "../YourStayHeader/YourStayHeader";
import { YourStaySuites } from "../YourStaySuites/YourStaySuites";
import { YourStayTotal } from "../YourStayFooter/YourStayTotal";
import { ExpandIcon } from "../svg/ExpandIcon";
import { useState } from "react";
import { YourStayModal } from "../YourStayModal/YourStayModal";
import { YourStayMobile } from "../YourStayMobile/YourStayMobile";
import { YourStayDesktop } from "../YourStayDesktop/YourStayDesktop";

export const YourStay = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { numOfGuests } = useGuestInfo();
  const isMobile = window.innerWidth < 1024;

  return (
    <div className="row-start-2row-end-3">
      {isMobile && <YourStayMobile />}
      {!isMobile && <YourStayDesktop />}
    </div>
    // <article className="relative lg:sticky lg:top-[5%] row-start-1 row-end-2 col-start-1 col-end-2 lg:row-start-1 lg:row-end-3 lg:col-start-2 lg:col-end-3 self-start flex flex-col lg:w-[400px] justify-center text-gray-700 border-[1px] border-gray-400 gap-4 px-3 xl:px-6 py-1.5 xl:py-3 mb-4 lg:mb-0 shadow-subtle">
    //   <YourStayHeader />
    //   {numOfGuests.map((suite, index) => {
    //     return <YourStaySuites key={index} index={index} suite={suite} />;
    //   })}
    //   <div className="h-[1px] bg-gray-400"></div>
    //   <YourStayTotal />
    //   {isMobile && (
    //     <div
    //       className="absolute top-0 right-0 flex items-center justify-items-end gap-x-1 cursor-pointer"
    //       onClick={() => setIsModalOpen(true)}
    //     >
    //       <figcaption className="text-xs opacity-60">View details</figcaption>
    //       <button title="view stay details" aria-label="view stay details">
    //         <ExpandIcon width={32} height={32} />
    //       </button>
    //     </div>
    //   )}
    //   {isModalOpen && (
    //     <YourStayModal
    //       isModalOpen={isModalOpen}
    //       closeModal={() => setIsModalOpen(false)}
    //     />
    //   )}
    // </article>
  );
};
