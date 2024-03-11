import { ContainerScroll } from "../ui/container-scroll-animation";
import { scrollerImages } from "@/imageData/scrollerImages";

export const PlacesScroll = () => {
  return (
    <section className="flex flex-col overflow-hidden bg-gray-100 font-[Merriweather] ">
      <ContainerScroll
        users={scrollerImages}
        titleComponent={
          <>
            <h1 className="text-4xl text-gray-800 font-[Merriweather] tracking-wide">
              Experience New York <br />
              <span className="text-4xl md:text-[6rem] mt-1 leading-none">
                like never before
              </span>
            </h1>
          </>
        }
      />
    </section>
  );
};
