import FocusLock from "react-focus-lock";
import { useRef } from "react";
import { useHandleClickOutside } from "@/hooks/useHandleClickOutside";
import { useHideBodyScroll } from "@/hooks/useHideBodyScroll";

export const DeleteSuiteModal = () => {
  const wrapperRef = useRef(null);
  useHideBodyScroll()

  return (
    <>
      <div
        className="w-full h-full fixed top-0 left-0 z-[19] bg-black opacity-40"
        ref={wrapperRef}
      ></div>
      <FocusLock>
        <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] grid grid-cols-1 w-[300px] sm:w-[600px] h-[120px] text-gray-700 bg-gray-50 z-[30] rounded-sm ">
          <p className="font-medium">
            Do you really want to delete this suite?
          </p>
          <div className="flex items-center gap-x-3">
            <button className="px-8 py-2 border-2 border-transparent bg-teal-600">
              Yes
            </button>
            <button className="px-8 py-2 border-2 border-gray-400">No</button>
          </div>
        </div>
      </FocusLock>
    </>
  );
};
