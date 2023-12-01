import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { GuestPicker } from "../GuestPicker/GuestPicker";
import { useGuestInfo } from "../../hooks/useGuestInfo";

export const MainSearchBar = () => {
  const { checkIn, setCheckIn, checkOut, setCheckOut } = useGuestInfo();

  return (
    <form className="flex">
      <DatePicker
        selected={checkIn}
        onChange={(date) => setCheckIn(date)}
        minDate={new Date()}
        placeholderText="Check in"
        name="check-in"
      />
      <DatePicker
        selected={checkOut}
        onChange={(date) => setCheckOut(date)}
        minDate={new Date()}
        placeholderText="Check out"
        name="check-out"
        disabled={checkIn === null ? true : false}
      />
      <GuestPicker />
    </form>
  );
};
