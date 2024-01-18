import addDays from "date-fns/addDays";
import DatePicker from "react-datepicker";
import { formattedTime } from "@/utils/formattedTime";
import { GuestPicker } from "../GuestPicker/GuestPicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGuestInfo } from "../../hooks/useGuestInfo";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { SearchButton } from "../Buttons/SearchButton";
import subDays from "date-fns/subDays";

export const MainSearchBar = () => {
  const { checkIn, setCheckIn, checkOut, setCheckOut, numOfGuests } =
    useGuestInfo();
  const [openCalendarOne, setOpenCalendarOne] = useState(false);
  const [openCalendarTwo, setOpenCalendarTwo] = useState(false);
  const navigate = useNavigate();

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(
      `/availability?checkin=${formattedTime(
        checkIn as Date,
        "14:00:00"
      )}&checkout=${formattedTime(checkOut as Date, "11:00:00")}&rooms=${
        numOfGuests.apartment
      }&adults=${numOfGuests.adult}&children=${numOfGuests.children}`
    );
  };

  return (
    <form
      className="flex items-center h-10 rounded-sm text-gray-600"
      onSubmit={handleOnSubmit}
    >
      <label className="" htmlFor="check-in" id="check-in">
        <DatePicker
          showIcon
          icon={
            <span
              className="flex items-center w-max h-max"
              onClick={() => setOpenCalendarOne(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
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
            </span>
          }
          onClickOutside={() => setOpenCalendarOne(false)}
          selected={checkIn}
          open={openCalendarOne}
          onSelect={() => {
            setOpenCalendarOne(false);
            if (!checkOut) setOpenCalendarTwo(true);
          }}
          shouldCloseOnSelect
          onChange={(date) => setCheckIn(date)}
          dateFormat="dd-MM-yyyy"
          minDate={new Date()}
          maxDate={subDays(checkOut as Date, 1)}
          placeholderText="Check in"
          id="check-in"
          name="check-in"
          title="Check-in"
          className="h-10 border-r-2 border-gray-200 outline-0 placeholder:text-gray-600 placeholder:opacity-[65%] rounded-sm"
          onInputClick={() => setOpenCalendarOne(!openCalendarOne)}
        />
      </label>
      <label htmlFor="check-out" id="check-out">
        <DatePicker
          showIcon
          icon={
            <span
              className="flex items-center w-max h-max"
              onClick={() => setOpenCalendarTwo(!openCalendarTwo)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
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
            </span>
          }
          id="check-out"
          selected={checkOut}
          shouldCloseOnSelect
          onChange={(date) => setCheckOut(date)}
          onSelect={() => {
            setOpenCalendarTwo(false);
            if (!checkIn) setOpenCalendarOne(true);
          }}
          open={openCalendarTwo}
          onClickOutside={() => setOpenCalendarTwo(false)}
          onInputClick={() => setOpenCalendarTwo(!openCalendarTwo)}
          dateFormat="dd-MM-yyyy"
          minDate={addDays(new Date(), 1) && addDays(checkIn as Date, 1)}
          placeholderText="Check out"
          name="check-out"
          title="Check-out"
          className="h-10 border-r-2 border-gray-200 px-4 outline-0 placeholder:text-gray-600 placeholder:opacity-[65%]"
        />
      </label>
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
