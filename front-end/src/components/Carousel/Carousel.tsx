import { useHandleImageSlide } from "@/hooks/useHandleImageSlide";
import { useEffect, useState } from "react";

type CarouselProps = {
  imagesPath: string[];
  leftController: React.ReactNode;
  rightController: React.ReactNode;
  sizeOptions?: {
    width?: string;
    height?: string;
  };
};

export const Carousel = ({
  imagesPath,
  leftController,
  rightController,
  sizeOptions,
}: CarouselProps) => {
  const [imageIndex, setImageIndex] = useState(0);

  const handleRightClick = () => {
    if (imageIndex === imagesPath.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex((prev) => prev + 1);
    }
  };

  const handleLeftClick = () => {
    if (imageIndex === 0) {
      setImageIndex(imagesPath.length - 1);
    } else {
      setImageIndex((prev) => prev - 1);
    }
  };

  useHandleImageSlide({
    direction: "horizontal",
    showNextImage: handleRightClick,
    showPreviousImage: handleLeftClick,
    dependencies: [imageIndex],
  });

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  return (
    <div className="relative" aria-label="image carousel">
      <a
        href="#after-image-slider-controls"
        className="absolute w-[1px] h-[1px] p-0 margin-[-1px] overflow-hidden border-0 focus:top-0 focus:left-0 focus:border-[1px] focus:bg-white focus:p-0 focus:w-auto focus:h=auto focus:m-0 focus:text-black focus:z-[100]"
      >
        Skip Image Slider Controls
      </a>
      <div
        className={`${sizeOptions?.width ? sizeOptions.width : "w-full"} ${
          sizeOptions?.height
        }  m-auto overflow-hidden`}
      >
        <div className={`flex w-full h-full aspect-[3/2] lg:aspect-auto `}>
          {imagesPath.map((imgURL, index) => {
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
        className={`absolute top-[50%] left-0 translate-y-[-50%] translate-x-[25%] focus:border-2 focus:border-gray-700`}
        onClick={handleLeftClick}
        title="show previous image"
        aria-label="show previous image"
      >
        {leftController}
      </button>
      <button
        className="rotate-180 absolute top-[50%] right-0 translate-y-[-50%] translate-x-[-25%] focus:border-2 focus:border-gray-700"
        onClick={handleRightClick}
        title="show next image"
        aria-label="show next image"
      >
        {rightController}
      </button>
      <div id="after-image-slider-controls"></div>
    </div>
  );
};
