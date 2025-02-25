import { useState, useEffect } from "react";
import "./CardCounter.scss";
import { cards } from "../../assets/cardsInDeckOfCards/cardsInDeckOfCards";
import { Counter } from "../../components/Counter/Counter";
import { CardHistory } from "./CardHistory/CardHistory";

type DeckOfCards = {
  Hearts: string[];
  Diamonds: string[];
  Spades: string[];
  Clubs: string[];
};

type Card = {
  suit: string;
  value: string;
  id?: number;
};

export const CardCounter = () => {
  const [deckOfCards, setDeckOfCards] = useState<DeckOfCards>({
    Hearts: [...cards],
    Diamonds: [...cards],
    Spades: [...cards],
    Clubs: [...cards],
  });

  const [randomCards, setRandomCards] = useState<Card[]>([]);
  const [counter, setCounter] = useState<number>(0);
  const [fiveLatest, setFiveLatest] = useState<Card[]>([]);

  const getRandomCard = () => {
    setCounter((prev) => prev + 1);
    console.log(Object.entries(deckOfCards));

    const allCards: Card[] = Object.entries(deckOfCards).flatMap(
      ([suit, values]: [string, string[]]) =>
        values.map((value) => ({ suit, value, id: Date.now() }))
    );

    const randomKey = Math.floor(allCards.length * Math.random());

    const randomCard = allCards[randomKey];

    setRandomCards((prevRandomCard) => {
      return [...prevRandomCard, randomCard];
    });

    //när jag har tagit ett kort så vill jag lägga till kortet i fiveLatest
    setFiveLatest((prev) => [...prev.slice(-4), randomCard]);

    console.log(randomCard);

    /* const randomCard: Card = ; */
  };

  useEffect(() => {
    console.log(`five latest updated`, fiveLatest);
  }, [fiveLatest]);

  return (
    <>
      <div>
        <Counter counter={counter} />
        <div>
          <h1>5 latest Cards</h1>
          {fiveLatest.map((card) => (
            <div key={card.id}>
              <p>
                {" "}
                {card.value} of {card.suit}{" "}
              </p>
            </div>
          ))}
        </div>
        {/* <CardHistory/> */}
      </div>
      <button onClick={getRandomCard}>Get Card</button>

      {randomCards.map((card) => (
        <div key={card.id}>
          <p>
            {" "}
            {card.value} of {card.suit}{" "}
          </p>
        </div>
      ))}
    </>
  );
};
