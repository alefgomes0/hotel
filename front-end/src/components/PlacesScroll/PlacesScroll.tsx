import { ContainerScroll } from "../ui/container-scroll-animation";

export const PlacesScroll = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        users={users}
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Experience New York  <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                like never before
              </span>
            </h1>
          </>
        }
      />
    </div>
  );
};

export const users = [
  {
    name: "Metropolitan Museum of Art",
    image: "/images/mma.jpg",
  },
  {
    name: "Brooklyn Briddge",
    image: "/images/bb.jpg",
  },
  {
    name: "Grand Central Terminal",
    image: "/images/gct.jpg"
  },
  {
    name: "Solomon R. Guggenheim Museum",
    image: "/images/slrgm.jpg",
  },
  {
    name: "9/11 Memorial & Museum",
    image: "/images/911.jpg",
  },
  {
    name: "Central Park",
    image: "/images/cp.jpg",
  },
  {
    name: "Statue of Liberty",
    image: "/images/sol.jpg",
  },
  {
    name: "Empire State Building",
    image: "/images/esb.jpg",
  },
  {
    name: "Times Square",
    image: "/images/ts.jpg",
  },
  {
    name: "American Museum of Natural History",
    image: "/images/amna.jpg",
  },
  {
    name: "St. Patrick's Cathedral",
    image: "/images/spc.jpg",
  },
  {
    name: "The Museum of Modern Art",
    image: "/images/mma2.jpg",
  },
  {
    name: "Rockefeller Center",
    image: "/images/rc.jpg",
  },
  {
    name: "Brooklyn Botanic Garden",
    image: "/images/bbg.jpg",
  },
  {
    name: "Radio City Music Hall",
    image: "/images/rcmh.jpg",
  },
  {
    name: "Jennifer Harris",
    designation: "Network Engineer, NetConnect",
    image: "https://picsum.photos/id/25/300/300",
  },
  {
    name: "Charles Clark",
    designation: "Security Analyst, SecureIT",
    image: "https://picsum.photos/id/26/300/300",
  },
  {
    name: "Susan Lewis",
    designation: "Systems Analyst, SysAnalyse",
    image: "https://picsum.photos/id/27/300/300",
  },
  {
    name: "Joseph Young",
    designation: "Mobile Developer, AppDev",
    image: "https://picsum.photos/id/28/300/300",
    badge: "Mentor",
  },
  {
    name: "Margaret Hall",
    designation: "Quality Assurance, BugFree",
    image: "https://picsum.photos/id/29/300/300",
    badge: "Developer",
  },
];
