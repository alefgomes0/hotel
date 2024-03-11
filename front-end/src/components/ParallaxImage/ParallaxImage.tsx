import { LandingPageCTA } from "../Buttons/LandingPageCTA";

type ParallaxImage = {
  url: string;
  alt: string;
  header: string;
  body: string;
  imageRef?: React.MutableRefObject<null | HTMLDivElement> | null;
  showCTA?: boolean;
};

export const ParallaxImage = ({
  url,
  alt,
  header,
  body,
  imageRef,
  showCTA,
}: ParallaxImage) => {
  return (
    <div
      className="grid grid-rows-1 grid-cols-2 items-center justify-center h-screen snap-always snap-center"
      ref={imageRef}
      style={{ perspective: "500px" }}
    >
      <img
        src={url}
        alt={alt}
        className="w-full h-full overflow-hidden aspect-[8/10] object-cover object-center"
      />
      <div className="w-max text-gray-700 justify-self-center">
        <h6 className="text-3xl mb-5">{header.toUpperCase()}</h6>
        <p className="text-sm w-[450px] leading-6 opacity-[85%]">{body}</p>
        {showCTA && <LandingPageCTA />}
      </div>
    </div>
  );
};
