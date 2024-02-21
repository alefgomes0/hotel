import { ContactInformation } from "@/components/ContactInformation/ContactInformation";
import { YourStay } from "@/components/YourStay/YourStay";

export const ConfirmReservation = () => {
  return (
    <main className="static lg:relative grid grid-cols-1 lg:grid-cols-[3fr_1fr] auto-rows-max gap-x-6 min-h-[calc(100svh-90px)] text-gray-700 bg-gradient-to-b from-slate-100 to-slate-300 px-8 md:px-12 lg:px-32 pt-8 md:pt-12 pb-8 lg:pb-0">
      <h4 className="text-3xl font-thin mb-6 text-gray-900 border-l-4 border-blue-700 pl-2 mt-8 lg:mt-0">COMPLETE RESERVATION</h4>
      <section className="lg:w-[1000px] grid z-[20] bg-white px-8 py-4">
        <h4 className="text-xl font-thin mb-10">CONTACT INFORMATION</h4>
        <ContactInformation />
      </section>
      <YourStay />
    </main>
  );
};
