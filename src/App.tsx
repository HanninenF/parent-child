import "./App.scss";
import { RandomDeckOfCards } from "./widgets/RandomDeckOfCards/RandomDeckOfCards";
/* import TextInputForCards from "./components/TextInputForCards/TextInputForCards"; */
import { TextInputForCards } from "./widgets/TextInputForCards2/TextInputForCards";
import { MonsterCard } from "./widgets/monsterCard/MonsterCard";
import { RandomCard } from "./widgets/RandomCard2/RandomCard";
import { RandomCard3 } from "./widgets/RandomCard3/RandomCard3";

function App() {
  return (
    <>
      {/* <TextInputForCards /> */}
      {/* <MonsterCard /> */}
      {/*  <RandomDeckOfCards /> */}
      {/* <RandomCard3 /> */}
      <RandomCard />
    </>
  );
}

export default App;
