import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="grid grid-cols-1 grid-rows-2 items-center justify-items-center text-gray-200 bg-gray-700 gap-2 h-[90px]">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl tracking-wider font-semibold">
          <Link to="/">Grandeur Hotel</Link>
        </h1>
        <p className="text-xs opacity-70">NY</p>
      </div>
      <nav className="flex items-center justify-center gap-8 text-xs border-y-2 border-x-0 border-gray-600 w-full h-8">
        <Link to="/fdsf">MSDKFM</Link>
        <Link to="/dsa">WQEQ</Link>
        <Link to="/sf">OITUREF</Link>
      </nav>
    </header>
  );
};
