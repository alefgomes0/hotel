import { motion, useScroll, useSpring, useInView } from "framer-motion";
import { ParallaxImage } from "../ParallaxImage/ParallaxImage";
import { useHandleParallax } from "@/hooks/useHandleParallax";
import { useRef } from "react";
import { parallaxImages } from "@/imageData/parallaxImages";

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

  const getImageRef = (index: number) => {
    if (index === 0) {
      return firstImage;
    } else if (index === parallaxImages.length - 1) {
      return lastImage;
    } else return null;
  };

  return (
    <section
      ref={wrapperRef}
      className="example relative grid-grid-cols-1 grid-rows-[auto_1fr] snap-y snap-mandatory snap-always h-screen overflow-Y-scroll pointer-events-none bg-gray-200"
    >
      {parallaxImages.map((image, index) => {
        return (
          <ParallaxImage
            url={image.url}
            alt={image.alt}
            header={image.header}
            body={image.body}
            key={image.url}
            imageRef={getImageRef(index)}
            showCTA={index + 1 === parallaxImages.length ? true : false}
          />
        );
      })}
      <div
        className="flex flex-col gap-y-2 fixed left-0 right-0 top-[50px] transition-opacity duration-300 pointer-events-none"
        ref={progressBar}
        style={{ animationFillMode: "forwards" }}
      >
        <div className="bg-gray-900 px-3 py-1 w-max self-center text-center rounded-sm">
          <p className="text-3xl text-center text-gray-100">
            Eveniet nesciunt, iste eligendi
          </p>
        </div>
        <motion.div
          className=" h-[5px] bg-white drop-shadow-[0_3px_5px_rgba(0,0,0,0.7)]"
          style={{ scaleX }}
        />
      </div>
    </section>
  );
};
