import { useGuestInfo } from "@/hooks/useGuestInfo";

type ChooseRoomProps = {
  suiteIndex: number;
};

export const ChooseRoom = ({ suiteIndex }: ChooseRoomProps) => {
  const { changeSelectedSuite, numOfGuests } = useGuestInfo();
  const currentSuite = suiteIndex + 1;
  console.log(suiteIndex)

  return (
    <article className="relative w-full h-[120px] grid grid-rows-[auto_1fr] grid-cols-3 tems-center text-gray-600 mt-6 mb-6">
      <h6 className="row-start-1 row-end-3 col-start-1 col-end-4 text-xl  mb-6 opacity-90">
        SELECT YOUR SUITE {currentSuite}
      </h6>
      <div className="flex items-center border-y-[1px] border-gray-300 col-start-1 col-end-4">
        {numOfGuests.map((suite, index) => {
          return (
            <button key={index} className="px-4 pt-4 lg:w-48 text-start cursor-pointer" onClick={() => changeSelectedSuite(index)}>
              <p className="text-xs ">SUITE {index + 1}</p>
              <p className="text-xs pb-4">
                {suite.adult} {suite.adult === 1 ? "adult" : "adults"},{" "}
                {suite.children} {suite.children === 1 ? "child" : "children"}
              </p>
              <div
                className={`absolute w-[100px] h-[3px] ${
                  currentSuite === index + 1 ? "bg-gray-800" : "bg-transparent"
                } transition duration-[900] rounded-sm`}
              ></div>
            </button>
          );
        })}
      </div>
    </article>
  );
};
