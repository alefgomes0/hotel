import { GoToHomepage } from "@/components/Buttons/GoToHomepage";
import { NavLink } from "react-router-dom";

export const NoMatch = () => {
  return (
    <main className="flex flex-col items-center justify-start content-center min-h-[calc(100svh-90px)]">
      <img
        src="/images/travel.png"
        width={288}
        height={180}
        alt="a person with a travel case"
        className="mt-24"
      />
      <p className="text-xl text-gray-700 opacity-80 w-[300px] leading-8 mb-6">
        We couldn't find the the page you're looking for. But we know where you
        can find the best hotels rates available.
      </p>
      <NavLink to="/">
        <GoToHomepage />
      </NavLink>
    </main>
  );
};
