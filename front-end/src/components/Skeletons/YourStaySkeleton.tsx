export const YourStaySkeleton = () => {
  return (
    <article className="sticky top-[5%] row-start-1 row-end-3 col-start-2 col-end-3 self-start flex flex-col w-[400px] justify-center text-gray-700 border-[1px] border-gray-400 gap-4 px-6 py-3 shadow-[0_2px_2px_0_rgba(0,0,0,0.2)]">
      <div className="w-[150px] h-8 bg-[#c7c7c7] animate-pulse"></div>
      <div className="grid grid-rows-1 grid-cols-2">
        <div className="flex flex-col">
          <div className="w-[80px] h-4 bg-[#c7c7c7] animate-pulse"></div>
          <div className="w-[80px] h-4 bg-[#c7c7c7] animate-pulse"></div>
        </div>
        <div className="flex flex-col">
          <div className="w-[80px] h-4 bg-[#c7c7c7] animate-pulse"></div>
          <div className="w-[80px] h-4 bg-[#c7c7c7] animate-pulse"></div>
        </div>
      </div>
      <div className="w-[230px] h-6 bg-[#c7c7c7] animate-pulse"></div>
      <div className="h-[1px] bg-gray-400"></div>
      <div className="flex items-center justify-between text-xl">
        <div className="w-[60px] h-4 bg-[#c7c7c7] animate-pulse"></div>
        <div className="w-[50px] h-4 bg-[#c7c7c7] animate-pulse"></div>
      </div>
    </article>
  );
};
