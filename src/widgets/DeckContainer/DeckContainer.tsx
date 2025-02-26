import { DecksOfCards } from "../CardCounter/CardCounter";

type DeckContainerProps = {
  deck: DecksOfCards;
};

export const DeckContainer = ({ deck }: DeckContainerProps) => {
  return (
    <>
      <div key={deck.id}>{deck.deck.Clubs}</div>
    </>
  );
};
