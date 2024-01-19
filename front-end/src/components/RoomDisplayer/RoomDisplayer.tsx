import { RoomProps } from "@/types/RoomProps";
import { CoffeeIcon } from "../svg/CoffeeIcon";
import { ForbiddenIcon } from "../svg/ForbiddenIcon";
import { BookNow } from "../Buttons/BookNow";
import { CheckmarkIcon } from "../svg/CheckmarkIcon";

type RoomDisplayerProps = {
  roomData: RoomProps | undefined;
};

export const RoomDisplayer = ({ roomData }: RoomDisplayerProps) => {
  const getPhotoPrefix = () => {
    if (roomData?.type.toLowerCase() === "deluxe") {
      return "dlx-1.jpg";
    } else if (roomData?.type.toLowerCase() === "prime") {
      return "prm-1.jpg";
    } else return "std-1.jpg";
  };

  return (
    <>
      {roomData ? (
        <div className="grid grid-rows-1 grid-cols-[auto_1fr] border-2 border-gray-300 gap-x-12 rounded-sm p-4 text-gray-700">
          <div>
            <img
              src={`/images/${getPhotoPrefix()}`}
              width={320}
              height={192}
              className="object-cover rounded-sm"
            />
          </div>
          <div className="flex flex-col gap-y-3">
            <h6 className="w-max font-semibold text-xl cursor-pointer hover:underline underline-offset-[6px]">
              {roomData.type.toUpperCase()} SUITE
            </h6>
            <span className="text-xs bg-gray-300 w-max px-3 py-1 rounded-lg opacity-80">
              {roomData.occupants}{" "}
              {roomData.occupants > 1 ? "adultos" : "adulto"}
            </span>
            <p className="text-sm opacity-90 pt-1">
              {roomData.short_description}
            </p>
            <span className="flex items-center gap-x-2 pt-2">
              <CoffeeIcon width={16} height={16} />
              <p className="text-sm">Café da manhã incluso</p>
            </span>
            <span className="flex items-center gap-x-2">
              <CheckmarkIcon width={16} height={16} />
              <p className="text-sm">Melhor preço garantido</p>
            </span>
            <span className="flex items-center gap-x-2">
              <ForbiddenIcon width={16} height={16} />
              <p className="text-sm">Não reembolsável</p>
            </span>
            <p className="text-sm w-max cursor-pointer underline underline-offset-4 pt-1">
              Veja detalhes
            </p>
            <div className="h-[1px] bg-gray-400 mt-4"></div>
            <div className="self-end">
              <p className="text-gray-500 mb-3">
                <span className="text-xl font-semibold text-gray-700">
                  R$ {roomData.price_per_day}
                </span>{" "}
                por noite
              </p>
              <BookNow pricePerDay={Number(roomData.price_per_day)} />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
