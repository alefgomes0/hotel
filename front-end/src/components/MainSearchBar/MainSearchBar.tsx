import addDays from "date-fns/addDays";
import { constructURL } from "@/utils/constructURL";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGuestInfo } from "../../hooks/useGuestInfo";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { SearchButton } from "../Buttons/SearchButton";
import subDays from "date-fns/subDays";
import { GuestPickerWrapper } from "../GuestPickerWrapper/GuestPickerWrapper";

export const MainSearchBar = () => {
  const { checkIn, setCheckIn, checkOut, setCheckOut, numOfGuests } =
    useGuestInfo();
  const [openCalendarOne, setOpenCalendarOne] = useState(false);
  const [openCalendarTwo, setOpenCalendarTwo] = useState(false);
  const navigate = useNavigate();

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(constructURL(checkIn, checkOut, numOfGuests));
  };

  return (
    <form
      className="flex flex-col lg:flex-row items-start lg:items-center gap-[2px] lg:gap-0 w-full h-14 rounded-sm text-base text-gray-600"
      onSubmit={handleOnSubmit}
    >
      <div className="relative">
        <label
          className="absolute top-0 left-0 opacity-0"
          htmlFor="check-in"
          aria-label="check-in"
        >
          Check-in*
        </label>
        <DatePicker
          showIcon
          icon={
            <span
              className="absolute bottom-0 bottom-0 right-[calc(0%+16px)] translate-y-[-50%]"
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
          openToDate={checkOut ? checkOut : undefined}
          placeholderText="Check in"
          id="check-in"
          name="check-in"
          title="Check-in"
          className="flex items-center h-14 border-r-2 border-gray-200 outline-none placeholder:text-lg placeholder:text-gray-600 placeholder:opacity-[65%] rounded-sm"
          onInputClick={() => setOpenCalendarOne(!openCalendarOne)}
        />
      </div>
      <div className="relative">
        <label
          className="absolute top-0 left-0 opacity-0"
          htmlFor="check-out"
          aria-label="check-out"
        >
          Check-out
        </label>
        <DatePicker
          showIcon
          icon={
            <span
              className="absolute bottom-0 right-[calc(0%+16px)] translate-y-[-50%]"
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
          openToDate={checkIn ? checkIn : undefined}
          placeholderText="Check out"
          name="check-out"
          title="Check-out"
          className="h-14 border-r-2 border-gray-200 px-4 outline-none placeholder:text-lg placeholder:text-gray-600 placeholder:opacity-[65%]"
        />
      </div>
      <GuestPickerWrapper />
      <div className="relative w-full">
        <label
          className="absolute top-0 left-0 opacity-0"
          htmlFor="voucher"
        ></label>
        <input
          type="text"
          placeholder="Voucher/Coupon"
          className="w-40 h-14 outline-none pl-4 placeholder:text-gray-600 placeholder:opacity-[65%]"
          title="Voucher/Coupon"
          id="voucher"
          aria-label="voucher/coupon"
        />
      </div>
      <SearchButton isDisabled={!checkIn || !checkOut} />
    </form>
  );
};
