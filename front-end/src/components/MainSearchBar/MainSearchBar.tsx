import { useState } from "react";
import { DateTime } from "luxon";

export const MainSearchBar = () => {
  const [checkIn, setCheckIn] = useState(DateTime.now().toLocaleString());
  console.log(checkIn);

  return (
    <form className="flex gap-4">
      <div>
        <label htmlFor="check-inn" className="hidden">
          Check in
        </label>
        <input
          type="date"
          id="check-in"
          name="check-in"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          min={String(DateTime.now().toISODate())}
        />
      </div>
      <div>
        <label htmlFor="check-out" className="hidden">
          Check out
        </label>
        <input
          type="date"
          id="check-out"
          name="check-out"
          placeholder="29/11/2023"
        />
      </div>
      <div>1 adulto</div>
      <div>Voucher</div>
      <button type="submit">VER PREÇOS</button>
    </form>
  );
};
