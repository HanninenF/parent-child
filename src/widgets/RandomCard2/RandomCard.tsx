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
  id: number;
};

export const RandomCard = () => {
  const initialDeck = {
    Hearts: [...cards],
    Spades: [...cards],
    Diamonds: [...cards],
    Clubs: [...cards],
  };

  const [deckOfCards, setDeckOfCards] = useState<DeckOfCards>(initialDeck);
  const [randomCards, setRandomCards] = useState<Card[]>([]);
  const [deletedCards, setDeletedCards] = useState<Card[]>([]); //state av array som kommer spara deleted-kort i

  
  const generateUniqueId = (): number => {
    return Date.now() + Math.floor(Math.random() * 10000);
  };// behöver lägga till denna functionen för att reset ska inte krångla



  const drawCard = () => {
    //dra ett kort från kortleken state
    //gå igenom alla nyckelvärdepar och spara som en array med objekt för varje element i arrayerna
    const allCards: Card[] = Object.entries(deckOfCards).flatMap(([suit, cards]) =>
      cards.map((card) => ({ suit, card, id: generateUniqueId() }))
    );

    //Om carddeck är tom får man en alert med info om det
    if (allCards.length === 0) {
      alert("Inga fler kort kvar i kortleken!");
      return;
    }

    //skapa randomkort från allCards
    //jag har nu en array av objekt. Jag ska plocka ut ett kort från arrayen av kort(objekt) genom random

    const randomIndex = Math.floor(Math.random() * allCards.length);
    console.log("randomIndex", randomIndex);
    const randomCard = allCards[randomIndex];
    console.log("randomCard", randomCard);

    setDeckOfCards((prevDeck) => ({
      ...prevDeck,
      [randomCard.suit as keyof DeckOfCards]: prevDeck[randomCard.suit as keyof DeckOfCards].filter(
        (c) => c !== randomCard.card
      ),
    }));//Tar bort det dragna kort från deckOfCards, samtidigt som den filtrerar bort rätt färg med .filter
   
    setRandomCards((prevCards) => [...prevCards, randomCard]);
  };

    // 🛠 Ta bort det dragna kortet från leken med setDeckOfCards()
    // 💡 Tips: Filtrera bort kortet från deckOfCards baserat på suit och card
    /* setDeckOfCards(...) */
    /*  1. Hitta vilket suit kortet tillhör (randomCard.suit).
        2. Filtrera bort det dragna kortet från det suitets array.
        3. Uppdatera deckOfCards med det nya värdet. */
 
 const resetDeck = () => {
    setDeckOfCards(initialDeck);
    setRandomCards([]);
    setDeletedCards([]);
  };

  const resetCard = (id: number) => {
    setRandomCards((prevCards) => {
      const cardIndex = prevCards.findIndex((card) => card.id === id);
      if (cardIndex === -1) return prevCards;

      const cardToReset = prevCards[cardIndex];
      setDeckOfCards((prevDeck) => ({
        ...prevDeck,
        [cardToReset.suit as keyof DeckOfCards]: [cardToReset.card, ...prevDeck[cardToReset.suit as keyof DeckOfCards]],
      }));

      return prevCards.filter((card) => card.id !== id);
    });
  };

  const restoreLastDeletedCard = () => {
    if (deletedCards.length === 0) {
      alert("Inga mera borttagna kort att återställa!");
      return;
    }
    const lastDeletedCard = deletedCards[deletedCards.length - 1];
    setDeletedCards((prevDeleted) => prevDeleted.slice(0, -1));
    setRandomCards((prevCards) => [...prevCards, lastDeletedCard]);
  };

  //Delete function
  const deleteCard = (id: number) => {
    setRandomCards((prevCards) => {
      const cardToDelete = prevCards.find((card) => card.id === id);
      if (!cardToDelete) return prevCards;

      setDeletedCards((prevDeleted) => [...prevDeleted, cardToDelete]);
      return prevCards.filter((card) => card.id !== id);
    });
  };
  
  return (
    <>
      <div className="buttons">
        <button className="get-button" onClick={drawCard}>Get Card</button>
        <button className="reset-button" onClick={resetDeck}>Reset Deck</button>
      </div>

      <div className="cardWrapper">
        {randomCards.length === 0 ? (
          <p className="no-cards-message">To start press Get Card Button</p> ) : ( randomCards.map((card, index) => (
            <div className="card" key={card.id}>
              <div className="cardTop">
                <h2>{card.card}</h2>
              </div>
              <div className="cardMiddle">
                <CardSvg suit={card.suit} /></div>
              <div className="cardBottom">
                <h2>{card.card}</h2>
                <button className="delete-button" onClick={() => deleteCard(card.id)}>⛔</button>
                {index === randomCards.length - 1 && ( // knappen ska visas bara på det sista kortet
                  <button
                    className="restore-button"onClick={() => restoreLastDeletedCard()} disabled={deletedCards.length === 0}>⬅️</button>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default RandomCard;