import "./RandomCard.scss";
import { useState } from "react";
import { cards } from "../../assets/cardsInDeckOfCards/cardsInDeckOfCards";
import { CardSvg } from "./CardSvg/CardSvg";

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
  const [deckOfCards, setDeckOfCards] = useState<DeckOfCards>({
    Hearts: [...cards],
    Spades: [...cards],
    Diamonds: [...cards],
    Clubs: [...cards],
  });

  const [randomCards, setRandomCards] = useState<Card[]>([]);

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

    /*jag har nu:
    randomCard {
                    "suit": "Hearts",
                    "card": "5"
                }*/

    //jag ska sätta randomCardState
    setRandomCards((prevCards) => [...prevCards, randomCard]);
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
