import { useRef } from "react";
import { motion, MotionValue, useTransform, useScroll } from "framer-motion";

type ParallaxImage = {
  id: number;
  imageRef?: React.MutableRefObject<null | HTMLDivElement>;
};

export const ParallaxImage = ({ id, imageRef }: ParallaxImage) => {
  const useParallax = (value: MotionValue<number>, distance: number) => {
    return useTransform(value, [0, 1], [-distance, distance]);
  };
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <div
      className="flex items-center justify-center h-screen snap-always snap-center"
      ref={imageRef}
      style={{ perspective: "500px" }}
    >
      <div
        ref={ref}
        className="relative w-[300px] h-[400px] max-h-[90vh] m-[20px] bg-white overflow-hidden"
      >
        <img
          src={`/${id}.jpg`}
          alt="A London skyscraper"
          className="absolute top-0 bottom-0 left-0 right-0 w-full h-full"
        />
      </div>
      <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2>
    </div>
  );
};
