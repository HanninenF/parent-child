import { useState } from "react";

type DeckOfCards = {
  Spades: string[];
  Hearts: string[];
  Clubs: string[];
  Diamonds: string[];
};

type RandomCard = {
  card: string;
  suit: string;
};

export const RandomDeckOfCards = () => {
  const [deckOfCards, setDeckOfCards] = useState<DeckOfCards>({
    Spades: [
      "Ace",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Queen",
      "King",
    ],
    Hearts: [
      "Ace",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Queen",
      "King",
    ],
    Clubs: [
      "Ace",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Queen",
      "King",
    ],
    Diamonds: [
      "Ace",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Queen",
      "King",
    ],
  });

  const [randomCard, setRandomCard] = useState<RandomCard | null>(null);

  const drawRandomCard = () => {
    const allCards = Object.entries(deckOfCards).flatMap(([suit, cards]) =>
      cards.map((card) => ({ suit, card }))
    );

    /* const suits = Object.keys(deckOfCards) as (keyof DeckOfCards)[];
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];

    const cardsInSuits = deckOfCards[randomSuit];
    const randomCard =
      cardsInSuits[Math.floor(Math.random() * cardsInSuits.length)]; */
    const randomCard = allCards[Math.floor(Math.random() * allCards.length)];
    setRandomCard(randomCard);

    setDeckOfCards((prevDeck) => {
      const suitKey = randomCard.suit as keyof DeckOfCards;
      const updatedSuit = prevDeck[suitKey].filter(
        (card) => card !== randomCard.card
      );

      return {
        ...prevDeck,
        [suitKey]: updatedSuit,
      };
    });
  };

  return (
    <>
      <div>
        <button onClick={drawRandomCard}>Get Card</button>
      </div>

      <div>
        <p>{randomCard && `${randomCard.card} of ${randomCard.suit}`}</p>
      </div>
    </>
  );
};
