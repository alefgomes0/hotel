import { YourStayHeader } from "../YourStayHeader/YourStayHeader";
import { YourStaySuites } from "../YourStaySuites/YourStaySuites";
import { YourStayTotal } from "../YourStayFooter/YourStayTotal";
import { useGuestInfo } from "@/hooks/useGuestInfo";

export const YourStayModal = () => {
  const { numOfGuests } = useGuestInfo();

  return (
    <article className="w-screen h-screen z-[20] flex flex-col justify-center text-gray-700 border-[1px] border-gray-400 gap-4 px-3 py-1.5">
    <YourStayHeader />
    {numOfGuests.map((suite, index) => {
      return <YourStaySuites key={index} index={index} suite={suite} />;
    })}
    <div className="h-[1px] bg-gray-400"></div>
    <YourStayTotal />
  </article>
  )
}