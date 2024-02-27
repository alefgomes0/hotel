import { LocationIcon } from "@/components/svg/LocationIcon";
import { PhoneIcon } from "@/components/svg/PhoneIcon";

export const SearchResultsHeader = () => {
  return (
    <article className="h-[100px] flex flex-col col-start-1 col-end-2 row-start-1 row-end-2 gap-y-4 bg-gray-200 p-3 mb-4 xl:mb-8 rounded-sm text-gray-600">
      <h4 className="font-light text-3xl text-gray-700">Grandeur Hotel</h4>
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-x-12 gap-y-4 lg:gap-y-0 opacity-70">
        <div className="flex items-center gap-x-1.5">
          <LocationIcon width={24} height={24} />
          <p>1 Hanover St, New York, NY 10005, US</p>
        </div>
        <div className="flex items-center gap-x-1.5">
          <PhoneIcon width={24} height={24} />
          <p>+1 800-275-8777-21</p>
        </div>
      </div>
    </article>
  );
};
