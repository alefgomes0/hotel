import { useEffect } from "react";

type useHandleScrollProps = {
  setShowIcon: React.Dispatch<React.SetStateAction<boolean>>
};

export const useHandleScroll = ({ setShowIcon }: useHandleScrollProps) => {
  const handleScroll = () => {
    const scrollThreshold = window.document.documentElement.scrollHeight * 0.1;
    const currentScroll = window.scrollY || document.documentElement.scrollTop;
    setShowIcon(currentScroll > scrollThreshold);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
};
