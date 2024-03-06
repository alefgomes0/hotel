import FocusLock from "react-focus-lock";
import { useRef } from "react";
import { useHandleClickOutside } from "@/hooks/useHandleClickOutside";
import { useHideBodyScroll } from "@/hooks/useHideBodyScroll";

type DeleteSuiteModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  deleteSuite: () => void;
};

export const DeleteSuiteModal = ({
  closeModal,
  deleteSuite,
  isOpen,
}: DeleteSuiteModalProps) => {
  const wrapperRef = useRef(null);
  useHandleClickOutside(isOpen, closeModal, wrapperRef);
  useHideBodyScroll();

  return (
    <>
      <div
        className="w-full h-full fixed top-0 left-0 z-[19] bg-black opacity-40"
        ref={wrapperRef}
      ></div>
      <FocusLock>
        <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] grid grid-cols-1 w-[300px] sm:w-[600px] h-[140px] text-gray-700 bg-gray-50 z-[30] p-4 border-2 border-gray-400 rounded-sm shadow-subtle">
          <p className="font-medium">
            Do you really want to delete this suite?
          </p>
          <div className="flex items-center gap-x-3 pt-4">
            <button
              className="px-8 py-2 border-2 border-gray-400 shadow-subtle"
              onClick={deleteSuite}
            >
              Yes
            </button>
            <button
              className="px-8 py-2 border-2 border-transparent text-teal-50 bg-teal-600 shadow-subtle"
              onClick={closeModal}
            >
              No
            </button>
          </div>
        </div>
      </FocusLock>
    </>
  );
};
