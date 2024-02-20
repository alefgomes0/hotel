import { ContactInformation } from "@/components/ContactInformation/ContactInformation";
import { YourStay } from "@/components/YourStay/YourStay";

export const ConfirmReservation = () => {
  return (
    <main className="relative grid grid-cols-[3fr_1fr] auto-rows-max gap-x-6 min-h-[calc(100svh-90px)] text-gray-700 bg-gradient-to-b from-slate-100 to-slate-300 px-32 pt-12">
      <h4 className="text-3xl font-thin mb-6 text-gray-900 border-l-4 border-blue-700 pl-2">COMPLETE RESERVATION</h4>
      <section className="grid z-[20] bg-white px-8 py-4">
        <h4 className="text-xl font-thin mb-10">CONTACT INFORMATION</h4>
        <ContactInformation />
      </section>
      <YourStay />
    </main>
  );
};
