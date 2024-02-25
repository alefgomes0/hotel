import { ContactInformation } from "@/components/ContactInformation/ContactInformation";
import { YourStayWrapper } from "@/components/YourStayWrapper/YourStayWrapper";

export const ConfirmReservation = () => {
  return (
    <main className="static xl:relative grid grid-cols-1 grid-cols-1 xl:grid-cols-[3fr_1fr] auto-rows-max gap-x-6 min-h-[calc(100svh-90px)] text-gray-700 bg-gradient-to-b from-slate-100 to-slate-300 px-4 xl:px-16 pt-8 pb-8 lg:pb-0">
      <h4 className="text-3xl font-thin mb-6 text-gray-900 border-l-4 border-blue-700 pl-2 mt-8 lg:mt-0">COMPLETE RESERVATION</h4>
      <section className="grid z-[20] bg-gray-50 px-8 py-4 shadow-subtle">
        <h4 className="text-xl font-thin mb-10">CONTACT INFORMATION</h4>
        <ContactInformation />
      </section>
      <YourStayWrapper />
    </main>
  );
};
