import { Carousel } from "@/components/Carousel/Carousel";
import { Idk } from "@/components/Idk/Idk";
import { MainSearchBar } from "@/components/MainSearchBar/MainSearchBar";
import { PlacesScroll } from "@/components/PlacesScroll/PlacesScroll";
import { LPCarouselArrow } from "@/components/svg/LPCarouselArrow";
import { useClearSelectedSuites } from "@/hooks/useClearSelectedSuites";

export const LandingPage = () => {
  const imagesURLS = [
    "/images/lp-0.jpg",
    "/images/lp-1.jpg",
    "/images/lp-2.jpg",
  ];
  const controllerSize = window.innerWidth <= 1024 ? 24 : 48;

  useClearSelectedSuites();

  return (
    <main className="flex flex-col lg:flex-none">
      <div className="relative">
        <Carousel
          imagesPath={imagesURLS}
          leftController={
            <LPCarouselArrow width={controllerSize} height={controllerSize} />
          }
          rightController={
            <LPCarouselArrow width={controllerSize} height={controllerSize} />
          }
          sizeOptions={{ height: "lg:h-[calc(100svh-90px)]" }}
        />
        <div className="h-[550px] lg:h-max lg:absolute lg:bottom-[15%] lg:bottom-[10%] lg:left-0 p-4 lg:pt-0 lg:pr-0 bg-gray-700 lg:bg-transparent">
          <p className="text-3xl lg:text-5xl text-gray-50 lg:text-white pb-3 lg:drop-shadow-[0_3px_5px_rgba(0,0,0,0.7)]">
            Explore a world of possibilities
          </p>
          <MainSearchBar />
        </div>
      </div>
      <PlacesScroll />
      <div className="h-screen bg-red-400"></div>
    </main>
  );
};
