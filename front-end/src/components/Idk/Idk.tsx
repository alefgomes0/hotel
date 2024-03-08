import "./styles.css";
import { useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
  useInView,
} from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

type ImageProps = {
  id: number;
  imageRef?: React.MutableRefObject<null | HTMLElement>;
};

function Image({ id, imageRef }: ImageProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className="snap-always snap-center" ref={imageRef}>
      <div ref={ref}>
        <img src={`/${id}.jpg`} alt="A London skyscraper" />
      </div>
      <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2>
    </section>
  );
}

export default function Idk() {
  const parallaxWrapper = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: parallaxWrapper,
  });
  const firstImage = useRef<HTMLElement>(null);
  const lastImage = useRef<HTMLElement>(null);
  const isFirstImageVisible = useInView(firstImage, { amount: 0.95 });
  const isLastImageVisible = useInView(lastImage, { amount: 0.95 });
  const endOfContainer = useRef<HTMLDivElement>(null);
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const manageScrollBehavior = (
    imageDiv: React.RefObject<HTMLElement | null>,
    wrapperRef: React.RefObject<HTMLElement | null>
  ) => {
    imageDiv.current?.scrollIntoView({ behavior: "instant" });
    const hideBodyScroll = setInterval(() => {
      if (!wrapperRef.current) return;
      document.body.style.overflow = "hidden";
      wrapperRef.current.style.pointerEvents = "auto";
      wrapperRef.current.click()
    }, 50);
    const showBodyScroll = setTimeout(() => {
      document.body.style.overflow = "scroll";
      clearInterval(hideBodyScroll);
    }, 1000);
  };

  useEffect(() => {
    const handleShowOverflow = () => {
      if (
        parallaxWrapper.current &&
        isFirstImageVisible &&
        scrollYProgress.current === 0
      ) {
        manageScrollBehavior(firstImage, parallaxWrapper);
      } else if (
        parallaxWrapper.current &&
        isLastImageVisible &&
        scrollYProgress.current === 1
      ) {
        manageScrollBehavior(lastImage, parallaxWrapper);
      }
    };
    handleShowOverflow();
  }, [isFirstImageVisible, isLastImageVisible]);

  const imagesArray = [1, 2, 3, 4, 5];

  return (
    <div
      ref={parallaxWrapper}
      className="relative snap-y snap-mandatory snap-always h-screen overflow-scroll pointer-events-none"
    >
      {imagesArray.map((image, index) => {
        if (index === 0) {
          return <Image id={image} key={image} imageRef={firstImage} />;
        } else if (index === imagesArray.length - 1) {
          return <Image id={image} key={image} imageRef={lastImage} />;
        } else {
          return <Image id={image} key={image} imageRef={lastImage} />;
        }
      })}
      <motion.div className="progress" style={{ scaleX }} />
      <div
        ref={endOfContainer}
        className="absolute bottom-0 w-full h-[1px] no-screen opacity-0"
      ></div>
    </div>
  );
}
