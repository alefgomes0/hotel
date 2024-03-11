import React, { useEffect } from "react";

type useHandleScrollProps = {
  setShowIcon: React.Dispatch<React.SetStateAction<boolean>>;
};

export const useHandleScroll = ({ setShowIcon }: useHandleScrollProps) => {
  let throttleTimeout: NodeJS.Timeout | null = null;

  const handleScroll = () => {
    if (throttleTimeout) return;
    throttleTimeout = setTimeout(() => {
      throttleTimeout = null;
      requestAnimationFrame(() => {
        const scrollThreshold =
          window.document.documentElement.scrollHeight * 0.1;
        const currentScroll =
          window.scrollY || document.documentElement.scrollTop;
        setShowIcon(currentScroll > scrollThreshold);
      });
    }, 2000);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};
