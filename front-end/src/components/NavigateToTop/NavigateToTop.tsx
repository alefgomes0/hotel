import { useState } from "react";
import { UpArrow } from "../svg/UpArrow";
import { useHandleScroll } from "@/hooks/useHandleScroll";

export const NavigateToTop = () => {
  const [showIcon, setShowIcon] = useState(false);
  useHandleScroll({ setShowIcon });

  return (
    <button
      className={`fixed bottom-[20px] right-[10px] flex flex-col items-center p-2 bg-gray-300 rounded-sm ${
        showIcon ? "animate-fade-in" : "animate-fade-out"
      } transition-opacity duration-300`}
      title="go to top of the page"
      aria-label="go to top of the page"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{ animationFillMode: "forwards" }}
    >
      <UpArrow width={32} height={32} color="#111827" />
      <p className="text-xs text-gray-950">UP</p>
    </button>
  );
};
