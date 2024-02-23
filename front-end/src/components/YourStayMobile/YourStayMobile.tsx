import { useGuestInfo } from "@/hooks/useGuestInfo"

export const YourStayMobile = () => {
  const { numOfGuests } = useGuestInfo();

  return (
    <article className="grid auto-rows-auto grid-cols-1 text-gray-700">
      <h6 className="text-sm font-medium">Your Stay</h6>
      <p>Guests: </p>
    </article>
  )
}