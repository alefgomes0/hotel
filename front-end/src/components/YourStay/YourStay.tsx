import { useGuestInfo } from "@/hooks/useGuestInfo";
import { YourStayHeader } from "../YourStayHeader/YourStayHeader";
import { YourStaySuites } from "../YourStaySuites/YourStaySuites";
import { YourStayTotal } from "../YourStayFooter/YourStayTotal";
import { ExpandIcon } from "../svg/ExpandIcon";

export const YourStay = () => {
  const { numOfGuests } = useGuestInfo();
  const isMobile = window.innerWidth < 1024;

  return (
    <article className="relative lg:sticky lg:top-[5%] row-start-1 row-end-2 col-start-1 col-end-2 lg:row-start-1 lg:row-end-3 lg:col-start-2 lg:col-end-3 self-start flex flex-col lg:w-[400px] justify-center text-gray-700 border-[1px] border-gray-400 gap-4 px-3 xl:px-6 py-1.5 xl:py-3 mb-4 lg:mb-0 shadow-[0_2px_2px_0_rgba(0,0,0,0.2)]">
      <YourStayHeader />
      {numOfGuests.map((suite, index) => {
        return <YourStaySuites key={index} index={index} suite={suite} />;
      })}
      <div className="h-[1px] bg-gray-400"></div>
      <YourStayTotal />
      {isMobile && (
        <div className="absolute top-0 right-0 flex items-center justify-items-end gap-x-1">
          <p className="text-xs opacity-60">View details</p>
          <button title="view stay details" aria-label="view stay details">
            <ExpandIcon width={32} height={32} />
          </button>
        </div>
      )}
    </article>
  );
};
