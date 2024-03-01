import { useEffect } from "react";

export const useHideBodyScroll = () => {
  useEffect(() => {
    const hideBodyScroll = () => {
      (document.body.style.overflow = "hidden");
    };
    hideBodyScroll();

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
};
