import { RoomProps } from "@/types/RoomProps";
import { CoffeeIcon } from "../svg/CoffeeIcon";
import { HandshakeIcon } from "../svg/HandshakeIcon";

type RoomDisplayerProps = {
  roomData: RoomProps;
};

export const RoomDisplayer = ({ roomData }: RoomDisplayerProps) => {
  const getPhotoPrefix = () => {
    if (roomData.type.toLowerCase() === "deluxe") {
      return "dlx-1.jpg";
    } else if (roomData.type.toLowerCase() === "prime") {
      return "prm-1.jpg";
    } else return "std-1.jpg";
  };

  return (
    <div className="grid grid-rows-1 grid-cols-[auto_1fr] h-64 border-2 border-gray-300 gap-x-12 rounded-sm p-4">
      <div>
        <img
          src={`/images/${getPhotoPrefix()}`}
          width={320}
          height={192}
          className="object-cover rounded-sm"
        />
      </div>
      <div className="flex flex-col gap-y-3">
        <h6 className="w-max font-semibold text-gray-700 text-xl cursor-pointer hover:underline underline-offset-[6px]">
          {roomData.type.toUpperCase()} SUITE
        </h6>
        <span className="text-xs bg-gray-300 w-max px-3 py-1 rounded-lg opacity-80">
          {roomData.occupants} adultos
        </span>
        <span className="flex items-center gap-x-2 pt-4">
          <CoffeeIcon width={16} height={16}/>
          <p className="text-sm text-gray-700">Café da manhã incluso</p>
        </span>
        <span className="flex items-center gap-x-2">
          <HandshakeIcon width={16} height={16}/>
          <p className="text-sm text-gray-700">Cancelamento gratuito</p>
        </span>
      </div>
    </div>
  );
};
