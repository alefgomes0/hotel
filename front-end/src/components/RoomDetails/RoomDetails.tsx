import { Carousel } from "../Carousel/Carousel";
import { RoomProps } from "@/types/RoomProps";

type RoomDetailsProps = {
  roomData: RoomProps | undefined;
};

export const RoomDetails = ({ roomData }: RoomDetailsProps) => {
  const getImagesPath = () => {
    if (!roomData) return [];
    if (roomData.type === "deluxe") {
      return ["dlx-1.jpg", "dlx-2.jpg", "dlx-3.jpg", "dlx-4.jpg"];
    } else if (roomData.type === "prime") {
      return ["prm-1.jpg", "prm-2.jpg", "prm-3.jpg", "prm-4.jpg"];
    } else return ["std-1.jpg", "std-2.jpg", "std-3.jpg", "std-4.jpg"];
  };

  const imagesURL = getImagesPath();

  return (
    <>
      <div className="w-full h-full fixed top-0 left-0 bg-[#000000CC]"></div>
      <section className="z-[20] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-max bg-gray-100 rounded-sm">
        <div className="lg:w-[600px] lg:h-[400px]">
          <Carousel imagesPath={imagesURL} />
        </div>
      </section>
    </>
  );
};
