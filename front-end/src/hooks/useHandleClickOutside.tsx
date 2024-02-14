import { useEffect } from "react";


export const useHandleClickOutside = (
  isModalOpen: boolean,
  closeModal: () => void,
  wrapperRef: React.RefObject<HTMLDivElement>
) => {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isModalOpen && wrapperRef.current?.contains(e.target as Node)) {
        closeModal();
      }
    };
    window.addEventListener("click", handleClickOutside);

      return () => window.removeEventListener("click", handleClickOutside); 
  }, []);
};
