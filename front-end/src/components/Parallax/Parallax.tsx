import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

const useParallax = (value: MotionValue<number>, distance: number) => {
  return useTransform(value, [0, 1], [-distance, distance]);
};

function Image({ id }: { id: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <div
      className="h-screen flex items-center justify-center relative snap-center teste"
      style={{ perspective: "500px" }}
    >
      <div
        ref={ref}
        className="w-[640px] h-[428px] relative overflow-hidden m-[20px]"
      >
        <img
          src={`/images/skl${id}.jpg`}
          alt="A London skyscraper"
          className="absolute top-0 left-0 right-0 bottom-0 w-full h-full"
        />
      </div>
      <motion.h2
        className="absolute text-4xl font-semibold m-0 tracking-[-3px] leading-[1.2]"
        style={{ y }}
      >{`#00${id}`}</motion.h2>
    </div>
  );
}

export function Parallax() {
  const parallaxWrapper = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({ container: parallaxWrapper });
  console.log(scrollYProgress)
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section ref={parallaxWrapper}>
      {[1, 2, 3, 4, 5].map((image) => (
        <Image id={image} key={image}/>
      ))}
      <motion.div
        className="fixed left-0 right-0 h-[5px] bottom-[100px] bg-red-500"
        style={{ scaleX }}
      />
    </section>
  );
}
