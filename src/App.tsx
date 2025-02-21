import "./App.scss";
import { RandomDeckOfCards } from "./widgets/RandomDeckOfCards/RandomDeckOfCards";
/* import TextInputForCards from "./components/TextInputForCards/TextInputForCards"; */
import { TextInputForCards } from "./widgets/TextInputForCards2/TextInputForCards";
import { MonsterCard } from "./widgets/monsterCard/MonsterCard";
import { RandomCard } from "./widgets/RandomCard2/RandomCard";
function App() {
  return (
    <>
      {/* <TextInputForCards /> */}
      <MonsterCard />
      {/*  <RandomDeckOfCards /> */}
      <RandomCard />
    </>
  );
}

export default App;
