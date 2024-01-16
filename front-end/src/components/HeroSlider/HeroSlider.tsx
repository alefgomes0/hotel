import { useEffect, useState } from "react";
import { LPCarouselArrow } from "../svg/LPCarouselArrow";
import { MainSearchBar } from "../MainSearchBar/MainSearchBar";

export const HeroSlider = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const handleRightClick = () => {
    if (imageIndex === imageURLS.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex((prev) => prev + 1);
    }
  };

  const handleLeftClick = () => {
    if (imageIndex === 0) {
      setImageIndex(imageURLS.length - 1);
    } else {
      setImageIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        handleRightClick();
      } else if (event.key === "ArrowLeft") {
        handleLeftClick();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [imageIndex]);

  const imageURLS = [
    "/images/lp-0.jpg",
    "/images/lp-1.jpg",
    "/images/lp-2.jpg",
  ];

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  return (
    <section className="relative" aria-label="image carousel">
      <a
        href="#after-image-slider-controls"
        className="absolute w-[1px] h-[1px] p-0 margin-[-1px] overflow-hidden border-0 focus:top-0 focus:left-0 focus:border-[1px] focus:bg-white focus:p-0 focus:w-auto focus:h=auto focus:m-0 focus:text-black focus:z-[100]"
      >
        Skip Image Slider Controls
      </a>
      <div className="w-full max-w-[1920px] h-[calc(100svh-90px)] m-auto overflow-hidden">
        <div className="flex w-full h-full">
          {imageURLS.map((imgURL, index) => {
            return (
              <img
                key={imgURL}
                src={imgURL}
                alt="skycrapers in New York"
                className={`block w-full h-full object-cover shrink-0 grow-0 ${
                  prefersReducedMotion
                    ? ""
                    : "transition-[translate] duration-300 ease-in-out"
                }`}
                style={{ translate: `${-100 * imageIndex}%` }}
                aria-hidden={imageIndex === index ? false : true}
              />
            );
          })}
        </div>
      </div>
      <button
        className="absolute top-[50%] left-0 translate-y-[-50%] translate-x-[25%] focus:border-2 focus:border-gray-700"
        onClick={handleLeftClick}
        aria-label="show previous image"
      >
        <LPCarouselArrow />
      </button>
      <button
        className="rotate-180 absolute top-[50%] right-0 translate-y-[-50%] translate-x-[-25%] focus:border-2 focus:border-gray-700"
        onClick={handleRightClick}
        aria-label="show next image"
      >
        <LPCarouselArrow />
      </button>
      <div className="absolute bottom-[10%] left-0 pl-10">
        <p className="text-4xl text-white pb-10 drop-shadow-[0_3px_5px_rgba(0,0,0,0.7)]">
          Explore a world of possibilities
        </p>
        <MainSearchBar />
      </div>
      <div id="after-image-slider-controls"></div>
    </section>
  );
};
