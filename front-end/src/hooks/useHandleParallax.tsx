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
};

export const useHandleParallax = ({
  wrapperRef,
  firstImage,
  lastImage,
  isFirstImageVisible,
  isLastImageVisible,
  scrollYProgress,
}: useHandleParallaxProps) => {
  useEffect(() => {
    const handleShowOverflow = () => {
      if (!wrapperRef.current) return;

      if (isFirstImageVisible && scrollYProgress.current === 0) {
        manageScrollBehavior(firstImage, wrapperRef);
        wrapperRef.current.style.overflowY = "scroll";
      } else if (isLastImageVisible && scrollYProgress.current === 1) {
        manageScrollBehavior(lastImage, wrapperRef);
        wrapperRef.current.style.overflowY = "hidden";
      }
    };

    const handleWrapperPointerEvents = () => {
      if (!wrapperRef.current) return;

      if (!isFirstImageVisible && scrollYProgress.current === 0) {
        wrapperRef.current.style.pointerEvents = "none";
        wrapperRef.current.style.overflowY = "hidden";

      } else if (isFirstImageVisible) {
        wrapperRef.current.style.pointerEvents = "auto";
        wrapperRef.current.style.overflowY = "scroll";
      }

      if (!isLastImageVisible && scrollYProgress.current === 1) {
        wrapperRef.current.style.pointerEvents = "none";
        wrapperRef.current.style.overflowY = "hidden";

      } else if (isLastImageVisible) {
        wrapperRef.current.style.pointerEvents = "auto";
        wrapperRef.current.style.overflowY = "scroll";
      }
    };

    handleShowOverflow();
    handleWrapperPointerEvents();
  }, [isFirstImageVisible, isLastImageVisible]);
};
