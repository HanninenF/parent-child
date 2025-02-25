import "./RandomCard3.scss";
import { cards } from "../../assets/cardsInDeckOfCards/cardsInDeckOfCards";
import { useState } from "react";

type Card = {
  suit: string;
  value: string;
};

type DeckOfCards = {
  Hearts: string[];
  Spades: string[];
  Clubs: string[];
  Diamonds: string[];
};

export const RandomCard3 = () => {
  const [randomCard, setRandomCard] = useState<Card>({ suit: "", value: "" });

  const [deckOfCards, setDeckOfCards] = useState<DeckOfCards>({
    Hearts: [...cards],
    Spades: [...cards],
    Clubs: [...cards],
    Diamonds: [...cards],
  });

  return (
    <>
      <div>
        <button>Get Card</button>
      </div>
    </>
  );
};
