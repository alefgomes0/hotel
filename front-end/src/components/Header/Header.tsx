import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [showHiddenNav, setShowHiddeNav] = useState<
    "GALLERY" | "OFFERS" | null
  >(null);

  return (
    <header className="grid grid-cols-1 grid-rows-2 items-center justify-items-center text-gray-50 text-xl bg-gray-700 h-[90px]">
      <div className="flex gap-x-1 pt-2">
        <h1 className="text-2xl tracking-wider font-semibold">
          <Link to="/">Grandeur Hotel</Link>
        </h1>
        <p className="text-xs opacity-70">NY</p>
      </div>
      <nav className="border-y-2 border-x-0 border-gray-600 w-full z-10">
        <ul className="flex items-center justify-center gap-x-16 text-xs text-gray-200 text-semibold opacity-90 w-full h-6">
          <li
            className={`relative cursor-pointer border-l-2 pl-1 ${
              showHiddenNav === "GALLERY"
                ? "border-white"
                : "border-transparent"
            }`}
            onMouseEnter={() => setShowHiddeNav("GALLERY")}
            onMouseLeave={() => setShowHiddeNav(null)}
          >
            GALLERY
            <ul
              className={`absolute bottom-100 left-0 bg-gray-600 mt-1 w-[300px] h-[40px] rounded-sm border-[1px] border-gray-400 ${
                showHiddenNav === "GALLERY" ? "opacity-100" : "opacity-0"
              } transition-opacity duration-200`}
            ></ul>
          </li>
          <li className="cursor-pointer">OFFERS</li>
          <li className="cursor-pointer">CONTACT US</li>
        </ul>
      </nav>
    </header>
  );
};
