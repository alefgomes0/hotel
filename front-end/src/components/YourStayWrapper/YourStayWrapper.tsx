import { YourStayMobile } from "../YourStayMobile/YourStayMobile";
import { YourStayDesktop } from "../YourStayDesktop/YourStayDesktop";

type YourStayWrapperProps = {
  darkBackground?: boolean;
};

export const YourStayWrapper = ({ darkBackground }: YourStayWrapperProps) => {
  const isMobile = window.innerWidth < 1024;

  return (
    <>
      {isMobile && <YourStayMobile darkBackground={darkBackground} />}
      {!isMobile && <YourStayDesktop darkBackground={darkBackground} />}
    </>
  );
};
