import { ContactInformation } from "@/components/ContactInformation/ContactInformation";
import { ReturnPage } from "@/components/ReturnPage/ReturnPage";
import { useNavigate } from "react-router-dom";
import { YourStayWrapper } from "@/components/YourStayWrapper/YourStayWrapper";
import { useGuestInfo } from "@/hooks/useGuestInfo";

export const ConfirmReservation = () => {
  const navigate = useNavigate();


  return (
    <main className="static xl:relative grid grid-cols-1 xl:grid-cols-[3fr_1fr] grid-rows-[auto_1fr] xl:grid-rows-1 gap-x-6 min-h-[calc(100svh-90px)] text-gray-700 bg-gradient-to-b from-slate-100 to-slate-300 px-4 xl:px-16 pt-4 xl:pt-20 pb-8 lg:pb-0">
      <ReturnPage returnFunction={() => navigate(-1)} />
      <div>
        <h4 className="text-3xl mb-6 h-max text-gray-700 opacity-[75%] border-l-4 border-blue-700 pl-2 mt-1 lg:mt-0">
          COMPLETE RESERVATION
        </h4>
        <section className="grid z-[20] bg-gray-50 p-6 shadow-subtle">
          <h4 className="text-xl font-light mb-10">CONTACT INFORMATION</h4>
          <ContactInformation />
        </section>
      </div>
      <YourStayWrapper />
    </main>
  );
};
