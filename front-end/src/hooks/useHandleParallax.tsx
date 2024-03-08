import { useEffect } from "react";
import { manageScrollBehavior } from "@/utils/helpers";
import { MotionValue } from "framer-motion";

type useHandleParallaxProps = {
  wrapperRef: React.RefObject<HTMLDivElement>;
  firstImage: React.RefObject<HTMLDivElement>;
  lastImage: React.RefObject<HTMLDivElement>;
  isFirstImageVisible: boolean;
  isLastImageVisible: boolean;
  scrollYProgress: MotionValue<number>;
  progressBar: React.RefObject<HTMLDivElement>;
};

export const useHandleParallax = ({
  wrapperRef,
  firstImage,
  lastImage,
  isFirstImageVisible,
  isLastImageVisible,
  scrollYProgress,
  progressBar,
}: useHandleParallaxProps) => {
  useEffect(() => {
    const handleShowOverflow = () => {
      if (!wrapperRef.current) return;

      if (isFirstImageVisible && scrollYProgress.current === 0) {
        manageScrollBehavior(firstImage, wrapperRef);
        progressBar.current?.classList.add("animate-fade-in");
        progressBar.current?.classList.remove("animate-fade-out");
      } else if (isLastImageVisible && scrollYProgress.current === 1) {
        manageScrollBehavior(lastImage, wrapperRef);
        progressBar.current?.classList.add("animate-fade-in");
        progressBar.current?.classList.remove("animate-fade-out");
      }
    };

    const handleWrapperPointerEvents = () => {
      if (!wrapperRef.current) return;

      if (!isFirstImageVisible && scrollYProgress.current === 0) {
        wrapperRef.current.style.pointerEvents = "none";
        progressBar.current?.classList.add("animate-fade-out");
        progressBar.current?.classList.remove("animate-fade-in");
      } else if (isFirstImageVisible) {
        wrapperRef.current.style.pointerEvents = "auto";
      }

      if (!isLastImageVisible && scrollYProgress.current === 1) {
        wrapperRef.current.style.pointerEvents = "none";
        progressBar.current?.classList.add("animate-fade-out");
        progressBar.current?.classList.remove("animate-fade-in");
      } else if (isLastImageVisible) {
        wrapperRef.current.style.pointerEvents = "auto";
      }
    };

    handleShowOverflow();
    handleWrapperPointerEvents();
  }, [isFirstImageVisible, isLastImageVisible]);
};
