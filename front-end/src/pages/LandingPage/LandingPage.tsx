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
    <main className="relative">
      <Carousel
        imagesPath={imagesURLS}
        leftController={<LPCarouselArrow width={48} height={48} />}
        rightController={<LPCarouselArrow width={48} height={48} />}
        sizeOptions={{ height: "h-[calc(100svh-90px)]" }}
      />
      <div className="absolute bottom-[10%] left-0 pl-10">
        <p className="text-5xl text-white pb-10 drop-shadow-[0_3px_5px_rgba(0,0,0,0.7)]">
          Explore a world of possibilities
        </p>
        <MainSearchBar />
      </div>
    </main>
  );
};
