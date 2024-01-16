import addDays from "date-fns/addDays";
import axios from "../../api/axios";
import DatePicker from "react-datepicker";
import { GuestPicker } from "../GuestPicker/GuestPicker";
import lightFormat from "date-fns/lightFormat";
import { useGuestInfo } from "../../hooks/useGuestInfo";
import { useQuery } from "@tanstack/react-query";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { SearchButton } from "../Buttons/SearchButton";

export const MainSearchBar = () => {
  const { checkIn, setCheckIn, checkOut, setCheckOut, numOfGuests } =
    useGuestInfo();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const fetchAvailableRooms = async () => {
    const searchedInfo = JSON.stringify({
      checkIn: `${lightFormat(checkIn as Date, "yyyy-MM-dd")} 14:00:00`,
      checkOut: `${lightFormat(checkOut as Date, "yyyy-MM-dd")} 11:00:00`,
      numOfGuests,
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
    <form
      className="flex items-center h-10 rounded-sm text-gray-600"
      onSubmit={handleOnSubmit}
    >
      <DatePicker
        selected={checkIn}
        onChange={(date) => setCheckIn(date)}
        dateFormat="dd-MM-yyyy"
        minDate={new Date()}
        placeholderText="Check in"
        name="check-in"
        className="h-10 border-r-2 border-gray-200 outline-0 placeholder:pl-4 placeholder:text-gray-600 placeholder:opacity-[65%] rounded-sm"
      />
      <DatePicker
        selected={checkOut}
        onChange={(date) => setCheckOut(date)}
        dateFormat="dd-MM-yyyy"
        minDate={addDays(checkIn as Date, 1)}
        placeholderText="Check out"
        name="check-out"
        className="h-10 border-r-2 border-gray-200 outline-0 placeholder:pl-4 placeholder:text-gray-600 placeholder:opacity-[65%]"
      />
      <GuestPicker />
      <input
        type="text"
        placeholder="Voucher/Cupom"
        className="w-32 h-10 outline-0 placeholder:text-sm placeholder:pl-4 placeholder:text-gray-600 placeholder:opacity-[65%]"
      />
      <SearchButton />
    </form>
  );
};
