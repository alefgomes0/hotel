import "./styles.css";
import {
  motion,
  useScroll,
  useSpring,
  useInView,
} from "framer-motion";
import { ParallaxImage } from "../ParallaxImage/ParallaxImage";
import { useHandleParallax } from "@/hooks/useHandleParallax";
import { useRef } from "react";

export const Parallax = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: wrapperRef,
  });
  const firstImage = useRef<HTMLDivElement>(null);
  const lastImage = useRef<HTMLDivElement>(null);
  const isFirstImageVisible = useInView(firstImage, { amount: 0.95 });
  const isLastImageVisible = useInView(lastImage, { amount: 0.95 });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useHandleParallax({
    wrapperRef,
    firstImage,
    lastImage,
    isFirstImageVisible,
    isLastImageVisible,
    scrollYProgress,
  });

  const imagesArray = [1, 2, 3, 4, 5];

  return (
    <section
      ref={wrapperRef}
      className="relative snap-y snap-mandatory snap-always h-screen overflow-scroll pointer-events-none"
    >
      {imagesArray.map((image, index) => {
        if (index === 0) {
          return <ParallaxImage id={image} key={image} imageRef={firstImage} />;
        } else if (index === imagesArray.length - 1) {
          return <ParallaxImage id={image} key={image} imageRef={lastImage} />;
        } else {
          return <ParallaxImage id={image} key={image} imageRef={lastImage} />;
        }
      })}
      <motion.div
        className="fixed left-0 right-0 top-[50px] h-[5px] bg-white"
        style={{ scaleX }}
      />
    </section>
  );
};
