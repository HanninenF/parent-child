import "./App.scss";
import { RandomDeckOfCards } from "./widgets/RandomDeckOfCards/RandomDeckOfCards";
/* import TextInputForCards from "./components/TextInputForCards/TextInputForCards"; */
import { TextInputForCards } from "./widgets/TextInputForCards2/TextInputForCards";
import { MonsterCard } from "./widgets/monsterCard/MonsterCard";

function App() {
  return (
    <>
      {/* <TextInputForCards /> */}
      {/* <MonsterCard /> */}
      <RandomDeckOfCards />
    </>
  );
}

export default App;
