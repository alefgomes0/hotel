import addDays from "date-fns/addDays";
import axios from "../../api/axios";
import DatePicker from "react-datepicker";
import { GuestPicker } from "../GuestPicker/GuestPicker";
import lightFormat from "date-fns/lightFormat";
import "react-datepicker/dist/react-datepicker.css";
import { useGuestInfo } from "../../hooks/useGuestInfo";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { SearchButton } from "../Buttons/SearchButton";
import "../svg/CalendarIcon.svg";

export const MainSearchBar = () => {
  const { checkIn, setCheckIn, checkOut, setCheckOut, numOfGuests } =
    useGuestInfo();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formattedCheckIn = () => {
    if (!checkIn) return;
    return `${lightFormat(checkIn as Date, "yyyy-MM-dd")} 14:00:00`;
  };

  const formattedCheckOut = () => {
    if (!checkOut) return;
    return `${lightFormat(checkOut as Date, "yyyy-MM-dd")} 11:00:00`;
  };

  const navigate = useNavigate();

  const fetchAvailableRooms = async () => {
    const searchedInfo = JSON.stringify({
      checkIn: formattedCheckIn(),
      checkOut: formattedCheckOut(),
      numOfGuests,
    });

    return await axios.get(
      `/availability/checkin=2024-01-16%2014:00:00&checkout=2024-01-18%2011:00:00&rooms=1&adults=1&children=0`
    );
  };

  const { data, error, isError, isPending } = useQuery({
    queryKey: ["reserva"],
    queryFn: fetchAvailableRooms,
    enabled: isSubmitted,
  });

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    /*     navigate(
      `/availability?checkin=${formattedCheckIn()}&checkout=${formattedCheckOut()}&rooms=${
        numOfGuests.apartment
      }&adults=${numOfGuests.adult}&children=${numOfGuests.children}`
    ); */
  };

  console.log(data);

  return (
    <form
      className="flex items-center h-10 rounded-sm text-gray-600"
      onSubmit={handleOnSubmit}
    >
      <DatePicker
        showIcon
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path
              fill="#4b5963"
              d="M472 96h-88V40h-32v56H160V40h-32v56H40a24.028 24.028 0 0 0-24 24v336a24.028 24.028 0 0 0 24 24h432a24.028 24.028 0 0 0 24-24V120a24.028 24.028 0 0 0-24-24Zm-8 352H48V128h80v40h32v-40h192v40h32v-40h80Z"
            />
            <path
              fill="#4b5963"
              d="M112 224h32v32h-32zm88 0h32v32h-32zm80 0h32v32h-32zm88 0h32v32h-32zm-256 72h32v32h-32zm88 0h32v32h-32zm80 0h32v32h-32zm88 0h32v32h-32zm-256 72h32v32h-32zm88 0h32v32h-32zm80 0h32v32h-32zm88 0h32v32h-32z"
            />
          </svg>
        }
        selected={checkIn}
        onChange={(date) => setCheckIn(date)}
        dateFormat="dd-MM-yyyy"
        minDate={new Date()}
        placeholderText="Check in"
        name="check-in"
        title="Check-in"
        className="h-10 border-r-2 border-gray-200 outline-0 placeholder:text-gray-600 placeholder:opacity-[65%] rounded-sm"
      />
      <DatePicker
        showIcon
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path
              fill="#4b5963"
              d="M472 96h-88V40h-32v56H160V40h-32v56H40a24.028 24.028 0 0 0-24 24v336a24.028 24.028 0 0 0 24 24h432a24.028 24.028 0 0 0 24-24V120a24.028 24.028 0 0 0-24-24Zm-8 352H48V128h80v40h32v-40h192v40h32v-40h80Z"
            />
            <path
              fill="#4b5963"
              d="M112 224h32v32h-32zm88 0h32v32h-32zm80 0h32v32h-32zm88 0h32v32h-32zm-256 72h32v32h-32zm88 0h32v32h-32zm80 0h32v32h-32zm88 0h32v32h-32zm-256 72h32v32h-32zm88 0h32v32h-32zm80 0h32v32h-32zm88 0h32v32h-32z"
            />
          </svg>
        }
        selected={checkOut}
        onChange={(date) => setCheckOut(date)}
        dateFormat="dd-MM-yyyy"
        minDate={addDays(checkIn as Date, 1)}
        placeholderText="Check out"
        name="check-out"
        title="Check-out"
        className="h-10 border-r-2 border-gray-200 px-4 outline-0 placeholder:text-gray-600 placeholder:opacity-[65%]"
      />
      <GuestPicker />
      <input
        type="text"
        placeholder="Voucher/Cupom"
        className="w-32 h-10 outline-0 pl-4 placeholder:text-sm placeholder:text-gray-600 placeholder:opacity-[65%]"
        title="Voucher"
      />
      <SearchButton isDisabled={!checkIn || !checkOut} />
    </form>
  );
};
