import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="grid grid-cols-1 auto-rows-max items-center justify-items-center text-gray-50 text-xl bg-gray-700 h-[90px]">
      <div className="flex gap-x-1 pt-2">
        <h1 className="text-2xl tracking-wider font-semibold">
          <Link to="/">Grandeur Hotel</Link>
        </h1>
        <p className="text-xs opacity-70">NY</p>
      </div>
      <nav>
        <ul className="flex items-center justify-center gap-x-16 text-xs text-gray-200 text-semibold opacity-90 border-y-2 border-x-0 border-gray-600 w-full h-8 mt-1">
          <li>
            <Link to="/fdsf">GALLERY</Link>
          </li>
          <li>
            <Link to="/dsa">OFFERS</Link>
          </li>
          <li>
            <Link to="/sf">CONTACT US</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
