import { Link } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";

export const Header = () => {
  return (
    <header className="grid grid-cols-1 grid-rows-2 items-center justify-items-center text-gray-50 text-xl bg-gray-700 h-[90px]">
      <div className="flex gap-x-1 pt-2">
        <h1 className="text-2xl tracking-wider font-semibold">
          <Link to="/">Grandeur Hotel</Link>
        </h1>
        <p className="text-xs opacity-70">NY</p>
      </div>
      <Navbar />
    </header>
  );
};
