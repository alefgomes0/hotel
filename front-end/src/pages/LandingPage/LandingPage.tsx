import { Hero } from "../../components/Hero/Hero";
import { MainSearchBar } from "../../components/MainSearchBar/MainSearchBar";

export const LandingPage = () => {
  return (
    <main>
      <Hero children={<MainSearchBar />} />
    </main>
  );
};
