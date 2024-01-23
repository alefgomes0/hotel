import { LocationIcon } from "@/components/svg/LocationIcon";
import { PhoneIcon } from "@/components/svg/PhoneIcon";

export const SearchResultsHeader = () => {
  return (
    <article className="flex flex-col gap-y-8 bg-gray-200 px-8 py-3 rounded-sm text-gray-600">
      <h4 className="font-semibold text-3xl text-gray-700">Grandeur Hotel</h4>
      <div className="flex items-center gap-x-12">
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
