import { motion, useScroll, useSpring, useInView } from "framer-motion";
import { ParallaxImage } from "../ParallaxImage/ParallaxImage";
import { useHandleParallax } from "@/hooks/useHandleParallax";
import { useRef } from "react";
import { parallaxImages } from "@/imageData/parallaxImages";
import { LPCarouselArrow } from "../svg/LPCarouselArrow";
import { useHandleImageSlide } from "@/hooks/useHandleImageSlide";

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

  const getImageRef = (index: number) => {
    if (index === 0) {
      return firstImage;
    } else if (index === parallaxImages.length - 1) {
      return lastImage;
    } else return null;
  };

  const handleUpClick = () => {
    if (!wrapperRef.current) return;
    const newScrollPosition =
      wrapperRef.current?.scrollTop - window.innerHeight;
    wrapperRef.current.scrollTo({
      top: newScrollPosition,
      behavior: "smooth",
    });
  };

  const handleDownClick = () => {
    if (!wrapperRef.current) return;
    const newScrollPosition =
      wrapperRef.current?.scrollTop + window.innerHeight;
    wrapperRef.current?.scrollTo({
      top: newScrollPosition,
      behavior: "smooth",
    });
  };

  const controllerSize = window.innerWidth <= 1024 ? 24 : 48;
  const OFFSET = 50;
  const isAtTop = (wrapperRef.current?.scrollTop as number) < OFFSET;
  const isAtBottom =
    wrapperRef.current?.scrollTop! +
      wrapperRef.current?.clientHeight! +
      OFFSET >=
    wrapperRef.current?.scrollHeight!;

  return (
    <section
      className="relative grid-grid-cols-1 grid-rows-[auto_1fr] h-screen  pointer-events-none bg-gray-200"
      aria-label="image carousel"
    >
      <a
        href="#after-image-slider-controls"
        className="absolute w-[1px] h-[1px] p-0 margin-[-1px] overflow-hidden border-0 focus:top-0 focus:left-0 focus:border-[1px] focus:bg-white focus:p-0 focus:w-auto focus:h=auto focus:m-0 focus:text-black focus:z-[100]"
      >
        Skip Image Slider Controls
      </a>
      <div className="flex flex-col gap-y-2 absolute left-0 right-0 top-[50px] pointer-events-none">
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
      <div
        className="z-[999] absolute top-[50%] translate-y-[-50%] right-[30px] flex flex-col gap-12 w-max h-max z-[30]"
        aria-label="carousel controllers"
      >
        <button
          className="focus:border-2 focus:border-gray-700 z-[40] pointer-events-auto rotate-90 disabled:opacity-30 transition-opacity duration-200"
          onClick={handleUpClick}
          title="show previous image"
          aria-label="show previous image"
          disabled={isAtTop}
        >
          <LPCarouselArrow
            width={controllerSize}
            height={controllerSize}
            color="#374151"
          />
        </button>
        <button
          className="focus:border-2 focus:border-gray-700 z-[40] pointer-events-auto rotate-[-90deg] disabled:opacity-30 transition-opacity duration-200"
          onClick={handleDownClick}
          title="show next image"
          aria-label="show next image"
          disabled={isAtBottom}
        >
          <LPCarouselArrow
            width={controllerSize}
            height={controllerSize}
            color="#374151"
          />
        </button>
      </div>
      <div
        className="snap-wrapper z-5 h-full overflow-y-scroll snap-y snap-mandatory snap-always"
        ref={wrapperRef}
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
      </div>
      <div id="after-image-slider-controls"></div>
    </section>
  );
};
