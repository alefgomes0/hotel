import { YourStay } from "@/components/YourStay/YourStay";

export const ConfirmReservation = () => {
  return (
    <main className="grid grid-cols-[3fr_1fr] grid-rows-1 min-h-[calc(100svh-90px)] gap-x-6 text-gray-700 bg-gray-100 px-32 pt-12">
      <h4 className="text-2xl font-thin">COMPLETE RESERVATION</h4>
      <YourStay />
    </main>
  );
};
