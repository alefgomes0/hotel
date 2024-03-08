import { useRef } from "react";
import { motion, MotionValue, useTransform, useScroll } from "framer-motion";
import { string } from "zod";

type ParallaxImage = {
  url: string;
  alt: string;
  header: string;
  body: string;
  imageRef?: React.MutableRefObject<null | HTMLDivElement> | null;
};

export const ParallaxImage = ({
  url,
  alt,
  header,
  body,
  imageRef,
}: ParallaxImage) => {
  const useParallax = (value: MotionValue<number>, distance: number) => {
    return useTransform(value, [0, 1], [-distance, distance]);
  };
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <div
      className="grid grid-rows-1 grid-cols-2 items-center justify-center h-screen snap-always snap-center"
      ref={imageRef}
      style={{ perspective: "500px" }}
    >
      <img src={url} alt={alt} className="w-full h-full overflow-hidden aspect-[8/10] object-cover object-center" />
      <div className="text-gray-700 justify-self-center">
        <h6 className="text-3xl font-medium mb-3">{header.toUpperCase()}</h6>
        <p className="text-sm w-[600px] leading-6">{body}</p>
      </div>
      {/* <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2> */}
    </div>
  );
};
