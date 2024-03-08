import "./styles.css";
import { motion, useScroll, useSpring, useInView } from "framer-motion";
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
  const progressBar = useRef<HTMLDivElement>(null);
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
    progressBar,
  });

  const imagesArray = [1, 2, 3, 4, 5];

  return (
    <section
      ref={wrapperRef}
      className="relative grid-grid-cols-1 grid-rows-[auto_1fr] snap-y snap-mandatory snap-always h-screen overflow-scroll pointer-events-none bg-green-400"
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
      <div
        className="flex flex-col gap-y-2 fixed left-0 right-0 top-[50px]"
        ref={progressBar}
        style={{ animationFillMode: "forwards" }}
      >
        <p className="text-3xl text-center drop-shadow-[0_3px_5px_rgba(0,0,0,0.7)] text-gray-700">
          Eveniet nesciunt, iste eligendi!
        </p>
        <motion.div className=" h-[5px] bg-gray-700" style={{ scaleX }} />
      </div>
    </section>
  );
};
