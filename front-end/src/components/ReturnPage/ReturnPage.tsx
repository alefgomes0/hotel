import { ReturnArrow } from "../svg/ReturnArrow";

type ReturnPageProps = {
  returnFunction: () => void;
};

export const ReturnPage = ({ returnFunction }: ReturnPageProps) => {
  return (
    <button className="xl:absolute top-0 left-0 flex items-center gap-x-2 xl:pl-8 xl:pt-4" onClick={returnFunction} title="return to previous page" aria-label="return to previous page">
      <ReturnArrow width={32} height={32} />
      <p>BACK</p>
    </button>
  );
};
