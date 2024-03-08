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
      className="grid grid-rows-1 grid-cols-2 items-center justify-center h-screen snap-always snap-center"
      ref={imageRef}
      style={{ perspective: "500px" }}
    >
      <div ref={ref} className="w-full h-full bg-white overflow-hidden">
        {/* <img
          src={`/${id}.jpg`}
          alt="A London skyscraper"
          className="absolute top-0 bottom-0 left-0 right-0 w-full h-full"
        /> */}
      </div>
      <div className="text-gray-700 justify-self-center">
        <h6 className="text-3xl font-medium mb-3">Amazing Header</h6>
        <p className="text-sm w-[600px] leading-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
          consequuntur ad totam voluptatibus exercitationem harum sapiente, quia
          non molestias excepturi quibusdam nulla in repellendus! Earum dolore
          ullam animi veniam quas. Expedita officiis soluta excepturi distinctio
          dolore sapiente inventore voluptatem sequi voluptas.
        </p>
      </div>
      {/* <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2> */}
    </div>
  );
};
