import { useEffect } from "react";

type useHandleImageSlide = {
  direction: "vertical" | "horizontal";
  showNextImage: () => void;
  showPreviousImage: () => void;
  dependencies: any[];
  flag?: boolean;
}

export const useHandleImageSlide = ({ direction, showNextImage, showPreviousImage, dependencies, flag }: useHandleImageSlide) => {
  const nextImageKey = direction === "horizontal" ? "ArrowRight" : "ArrowDown";
  const previousImageKey = direction === "horizontal" ? "ArrowLeft" : "ArrowUp";

  useEffect(() => {

    const handleKeyDown = (event: KeyboardEvent) => {
      if (flag) {
        event?.preventDefault();
      }
      if (event.key ===  nextImageKey) {
        showNextImage();
      } else if (event.key === previousImageKey) {
        showPreviousImage();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, dependencies);
}