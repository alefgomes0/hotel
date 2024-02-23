import { YourStayMobile } from "../YourStayMobile/YourStayMobile";
import { YourStayDesktop } from "../YourStayDesktop/YourStayDesktop";

export const YourStayWrapper = () => {
  const isMobile = window.innerWidth < 1024;

  return (
    <>
      {isMobile && <YourStayMobile />}
      {!isMobile && <YourStayDesktop />}
    </>
  );
};
