import { ContainerScroll } from "../ui/container-scroll-animation";
import { scrollerImages } from "@/imageData/scrollerImages";

export const PlacesScroll = () => {
  return (
    <div className="flex flex-col overflow-hidden bg-gray-100">
      <ContainerScroll
        users={scrollerImages}
        titleComponent={
          <>
            <h1 className="text-4xl font-medium text-gray-800">
              Experience New York <br />
              <span className="text-4xl md:text-[6rem] font-semibold mt-1 leading-none">
                like never before
              </span>
            </h1>
          </>
        }
      />
    </div>
  );
};
