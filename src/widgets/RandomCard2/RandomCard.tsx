import "./RandomCard.scss";
import { useState } from "react";
import { cards } from "../../assets/cardsInDeckOfCards/cardsInDeckOfCards";
import { CardSvg } from "../CardSvg/CardSvg";

type DeckOfCards = {
  Hearts: string[];
  Spades: string[];
  Diamonds: string[];
  Clubs: string[];
};

type Card = {
  card: string;
  suit: string;
  id?: number;
};

export const RandomCard = () => {
  const [
    deckOfCards,
    setDeckOfCards,
  ] /* 💡🛠 Använd setDeckOfCards för att ta bort kort från leken efter dragning*/ =
    useState<DeckOfCards>({
      Hearts: [...cards],
      Spades: [...cards],
      Diamonds: [...cards],
      Clubs: [...cards],
    });
  console.log(deckOfCards)
  const [randomCards, setRandomCards] = useState<Card[]>([]);


  const removeValueFromSpecificArray = (arrayName: keyof DeckOfCards, value: string) => {
    setDeckOfCards((prevData: DeckOfCards) => {

      return {
        ...prevData,
        [arrayName]: (prevData[arrayName] as string[]).filter((item: string) => item !== value),
      };
    });
  };
  const drawCard = () => {
    //dra ett kort från kortleken state
    //gå igenom alla nyckelvärdepar och spara som en array med objekt för varje element i arrayerna
    const allCards: Card[] = Object.entries(deckOfCards).flatMap(
      ([suit, cards]) => cards.map((card) => ({ suit, card }))
    );

    //skapa randomkort från allCards
    //jag har nu en array av objekt. Jag ska plocka ut ett kort från arrayen av kort(objekt) genom random

    const randomIndex = Math.floor(Math.random() * allCards.length);
    console.log("randomIndex", randomIndex);
    const randomCard: Card = { ...allCards[randomIndex], id: Date.now() };
    console.log("randomCard", randomCard);
    removeValueFromSpecificArray(randomCard.suit as keyof DeckOfCards, randomCard.card)
    setRandomCards((prevCards) => [...prevCards, randomCard]);

    // 🛠 Ta bort det dragna kortet från leken med setDeckOfCards()
    // 💡 Tips: Filtrera bort kortet från deckOfCards baserat på suit och card
    /* setDeckOfCards(...) */
    /*  1. Hitta vilket suit kortet tillhör (randomCard.suit).
        2. Filtrera bort det dragna kortet från det suitets array.
        3. Uppdatera deckOfCards med det nya värdet. */
  };
  return (
    <>
      <div>
        <button onClick={drawCard}>Get Card</button>
      </div>

      <div className="cardWrapper">
        {randomCards.map((card) => (
          <div className="card" key={card.id}>
            <div className="cardTop">
              <h2>{card.card}</h2>
            </div>
            <div className="cardMiddle">
              <CardSvg suit={card.suit} />
            </div>
            <div className="cardBottom">
              <h2>{card.card}</h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
