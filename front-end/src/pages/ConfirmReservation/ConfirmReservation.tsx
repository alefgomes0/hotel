import { ContactInformation } from "@/components/ContactInformation/ContactInformation";
import { YourStay } from "@/components/YourStay/YourStay";
import { useGuestInfo } from "@/hooks/useGuestInfo";

export const ConfirmReservation = () => {
  const { selectedSuiteIndex } = useGuestInfo();

  return (
    <main className="relative grid grid-cols-[3fr_1fr] grid-rows-[auto_1fr] min-h-[calc(100svh-90px)] gap-x-6 text-gray-700 bg-gray-100 px-32 pt-12">
      <h4 className="text-3xl font-thin mb-6 row-start-1 row-end-2 col-start-1 col-end-3">
        COMPLETE RESERVATION
      </h4>
      <section className="grid z-[20] bg-white px-8 py-4">
        <h4 className="text-xl font-thin mb-1">CONTACT INFORMATION</h4>
        <ContactInformation />
      </section>
      <YourStay selectedSuites={selectedSuiteIndex.selected} />
      <div className="w-full h-full absolute top-[0%] left-[0%] bg-[url(/images/bg-pattern.jpg)] z-[10] opacity-[12%] pointer-events-none"></div>
    </main>
  );
};
