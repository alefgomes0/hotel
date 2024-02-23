import { Carousel } from "@/components/Carousel/Carousel";
import { MainSearchBar } from "@/components/MainSearchBar/MainSearchBar";
import { LPCarouselArrow } from "@/components/svg/LPCarouselArrow";

export const LandingPage = () => {
  const imagesURLS = [
    "/images/lp-0.jpg",
    "/images/lp-1.jpg",
    "/images/lp-2.jpg",
  ];

  return (
    <main className="relative flex flex-col lg:flex-none">
      <Carousel
        imagesPath={imagesURLS}
        leftController={<LPCarouselArrow width={48} height={48} />}
        rightController={<LPCarouselArrow width={48} height={48} />}
        sizeOptions={{ height: "lg:h-[calc(100svh-90px)]" }}
      />
      <div className="h-[500px] lg:h-max lg:absolute lg:bottom-[15%] lg:bottom-[10%] lg:left-0 pt-10 lg:pt-0 pl-10 pr-10 lg:pr-0 bg-gray-700 lg:bg-transparent">
        <p className="text-3xl lg:text-5xl text-gray-50 lg:text-white pb-10 lg:drop-shadow-[0_3px_5px_rgba(0,0,0,0.7)]">
          Explore a world of possibilities
        </p>
        <MainSearchBar />
      </div>
    </main>
  );
};
