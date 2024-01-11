import addDays from "date-fns/addDays";
import axios from "../../api/axios";
import DatePicker from "react-datepicker";
import { GuestPicker } from "../GuestPicker/GuestPicker";
import lightFormat from "date-fns/lightFormat";
import { useGuestInfo } from "../../hooks/useGuestInfo";
import { useQuery } from "@tanstack/react-query";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

export const MainSearchBar = () => {
  const { checkIn, setCheckIn, checkOut, setCheckOut, numOfGuests } =
    useGuestInfo();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const fetchAvailableRooms = async () => {
    const searchedInfo = JSON.stringify({
      checkIn: `${lightFormat(checkIn as Date, "yyyy-MM-dd")} 14:00:00`,
      checkOut: `${lightFormat(checkOut as Date, "yyyy-MM-dd")} 11:00:00`,
      numOfGuests
    });

    return await axios.get(`/rooms/${searchedInfo}`);
  };

  const { data, error, isError, isPending } = useQuery({
    queryKey: ["reserva"],
    queryFn: fetchAvailableRooms,
    enabled: isSubmitted,
  });

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  console.log(data);

  return (
    <form className="flex gap-4 items-center" onSubmit={handleOnSubmit}>
      <DatePicker
        selected={checkIn}
        onChange={(date) => setCheckIn(date)}
        dateFormat="dd-MM-yyyy"
        minDate={new Date()}
        placeholderText="Check in"
        name="check-in"
      />
      <DatePicker
        selected={checkOut}
        onChange={(date) => setCheckOut(date)}
        dateFormat="dd-MM-yyyy"
        minDate={addDays(checkIn as Date, 1)}
        placeholderText="Check out"
        name="check-out"
      />
      <GuestPicker />
      <input type="text" placeholder="Voucher/Cupom" />
      <button type="submit">SEARCH</button>
    </form>
  );
};
