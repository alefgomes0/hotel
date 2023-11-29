import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

export const MainSearchBar = () => {
  const [checkIn, setCheckIn] = useState<null | Date>(null);
  const [checkOut, setcheckOut] = useState<null | Date>(null);

  return (
    <form className="flex">
      <DatePicker
        selected={checkIn}
        onChange={(date) => setCheckIn(date)}
        minDate={new Date()}
        placeholderText="Check in"
        name="check-in"
        showIcon
      />
      <DatePicker
        selected={checkOut}
        onChange={(date) => setcheckOut(date)}
        minDate={new Date()}
        placeholderText="Check out"
        name="check-out"
      />
    </form>
  );
};
