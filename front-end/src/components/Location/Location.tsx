import { StreetMap } from "../StreetMap/StreetMap";
import { EmailIcon } from "../svg/EmailIcon";
import { InstagramIcon } from "../svg/InstagramIcon";
import { PhoneIcon } from "../svg/PhoneIcon";

export const Location = () => {
  return (
    <section className="relative grid grid-rows-1 grid-cols-2 gap-y-4 items-center justify-center h-[75vh] bg-gray-800 text-gray-200 px-4 py-12">
      <div className="h-full flex items-center justify-center items-center w-full">
        <div className="border-l-2 border-gray-600 pl-4">
          <h6 className="text-3xl mb-5">YOU, AT HEART OF THE CITY</h6>
          <p className="text-sm opacity-80 w-[400px] leading-6">
            Neque laudantium velit, quia aliquid maiores sed voluptas facere sit
            repellat necessitatibus minus dignissimos esse officia earum iure
            quisquam nihil saepe.
          </p>
        </div>
        <div className="absolute bottom-[48px] flex items-center justify-center gap-x-8 ">
          <div className="flex items-center gap-x-1" title="phone">
            <PhoneIcon width={22} height={22} color="#f3f4f6" />
            <p className="cursor-pointer text-xs opacity-80 leading-0">
              +1 800-275-8777-21
            </p>
          </div>
          <div className="flex gap-x-1" title="email">
            <EmailIcon width={22} height={22} />
            <p className="cursor-pointer text-xs underline underline-offset-4 decoration-gray-300 opacity-80 leading-0">
              grandeurhotelny@email.com
            </p>
          </div>
          <div className="flex gap-x-1" title="instagram">
            <InstagramIcon width={22} height={22} />
            <p className="cursor-pointer text-xs underline underline-offset-4 decoration-gray-300 opacity-80 leading-0">
              @grandeurhotelny
            </p>
          </div>
        </div>
      </div>

      <StreetMap />
    </section>
  );
};
