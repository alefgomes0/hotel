import { MainSearchBar } from "./components/MainSearchBar/MainSearchBar";
import { NumericStepper } from "./components/NumericStepper/NumericStepper";
import { GuestInfoProvider } from "./context/GuestInfoContext";

const App = () => {
  return (
    <>
      <GuestInfoProvider>
        <NumericStepper field="adult"/>
      </GuestInfoProvider>
    </>
  );
};

export default App;
