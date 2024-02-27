import { CloseIcon } from "../svg/CloseIcon";
import { useGuestInfo } from "@/hooks/useGuestInfo";
import { YourStayHeader } from "../YourStayHeader/YourStayHeader";
import { YourStaySuites } from "../YourStaySuites/YourStaySuites";
import { useState } from "react";
import { YourStayTotal } from "../YourStayTotal/YourStayTotal";

type YourStayModalProps = {
  isModalOpen: boolean;
  closeModal: () => void;
};

export const YourStayModal = ({
  isModalOpen,
  closeModal,
}: YourStayModalProps) => {
  const [fadeOut, setFadeOut] = useState(false);
  const { numOfGuests } = useGuestInfo();
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const handleOnClick = () => {
    setFadeOut(true);
    setTimeout(() => {
      closeModal();
    }, 200);
  };

  return (
    <article
      className={`fixed top-0 left-0 w-screen min-h-screen z-[999] flex flex-col  bg-gray-100 text-gray-700 border-[1px] border-gray-400 gap-4 px-8 py-1.5 ${
        isModalOpen && !prefersReducedMotion && "animate-slide-down"
      } ${fadeOut && !prefersReducedMotion && "animate-slide-up"}`}
      style={{ animationFillMode: "forwards" }}
    >
      <YourStayHeader />
      {numOfGuests.map((suite, index) => {
        return <YourStaySuites key={index} index={index} suite={suite} closeModal={handleOnClick}/>;
      })}
      <div className="h-[1px] bg-gray-400"></div>
      <YourStayTotal />
      <button className="fixed top-0 right-[2%] z-[21]" onClick={handleOnClick}>
        <CloseIcon width={48} height={48} color="#1f2937" />
      </button>
    </article>
  );
};
