import { useState, useEffect } from "react";
import "./CardCounter.scss";
import { cards } from "../../assets/cardsInDeckOfCards/cardsInDeckOfCards";
import { Counter } from "../../components/Counter/Counter";
import { CardHistory } from "../CardHistory/CardHistory";
import { CardDisplay } from "../CardDisplay/CardDisplay";
import { DrawCard } from "../DrawCard/DrawCard";
import { nanoid } from "nanoid";
import React from "react";
import { DeckContainer } from "../DeckContainer/DeckContainer";
type DeckOfCard = {
  Hearts: string[];
  Diamonds: string[];
  Spades: string[];
  Clubs: string[];
};

export type DecksOfCards = {
  deck: DeckOfCard;
  id?: string;
};

export type Card = {
  suit: string;
  value: string;
  id?: string;
};

export const CardCounter = () => {
  const [deckOfCards, setDeckOfCards] = useState<DeckOfCard>({
    Hearts: [...cards],
    Diamonds: [...cards],
    Spades: [...cards],
    Clubs: [...cards],
  });

  const [decks, setDecks] = useState<DecksOfCards[]>([
    { deck: deckOfCards, id: nanoid() },
  ]);

  const [randomCards, setRandomCards] = useState<Card[]>([]);
  const [counter, setCounter] = useState<number>(0);
  const [fiveLatest, setFiveLatest] = useState<Card[]>([]);

  const getDeck = () => {
    setDecks((prevDecks) => [
      ...prevDecks,
      {
        deck: {
          Hearts: [...cards],
          Diamonds: [...cards],
          Spades: [...cards],
          Clubs: [...cards],
        },
        id: nanoid(),
      },
    ]);
  };

  const getRandomCard = () => {
    setCounter((prev) => prev + 1);
    console.log(Object.entries(deckOfCards));

    const allCards: Card[] = Object.entries(deckOfCards).flatMap(
      ([suit, values]: [string, string[]]) =>
        values.map((value) => ({ suit, value, id: nanoid() }))
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

  const resetDeck = () => {
    setDeckOfCards((prevDeck) => ({
      ...prevDeck,
      Hearts: [...cards],
      Diamonds: [...cards],
      Spades: [...cards],
      Clubs: [...cards],
    }));

    setRandomCards([]);
    setFiveLatest([]);
  };

  useEffect(() => {
    console.log(`five latest updated`, fiveLatest);
    console.log("new deck", decks);
  }, [fiveLatest, decks]);

  return (
    <>
      <div>
        <Counter counter={counter} />

        <CardHistory fiveLatest={fiveLatest} />
      </div>
      <DrawCard getRandomCard={getRandomCard} />

      <button onClick={resetDeck}>Reset Deck</button>
      <button onClick={getDeck}>Get Deck</button>

      {decks.map((deck) => (
        <DeckContainer key={deck.id} deck={deck} />
      ))}
      <CardDisplay randomCards={randomCards} />
    </>
  );
};
