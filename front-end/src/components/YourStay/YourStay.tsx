import { useGuestInfo } from "@/hooks/useGuestInfo";
import { YourStayHeader } from "../YourStayHeader/YourStayHeader";
import { YourStaySuites } from "../YourStaySuites/YourStaySuites";
import { YourStayTotal } from "../YourStayFooter/YourStayTotal";


export const YourStay = () => {
  const { numOfGuests } = useGuestInfo();
  return (
    <article className="static lg:sticky lg:top-[5%] row-start-1 row-end-2 col-start-1 col-end-2 lg:row-start-1 lg:row-end-3 lg:col-start-2 lg:col-end-3 self-start flex flex-col w-[400px] justify-center text-gray-700 border-[1px] border-gray-400 gap-4 px-6 py-3 shadow-[0_2px_2px_0_rgba(0,0,0,0.2)]">
      <YourStayHeader />
      {numOfGuests.map((suite, index) => {
        return <YourStaySuites key={index} index={index} suite={suite} />;
      })}
      <div className="h-[1px] bg-gray-400"></div>
      <YourStayTotal />
    </article>
  );
};
