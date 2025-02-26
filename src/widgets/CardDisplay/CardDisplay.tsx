import { Card } from "../CardCounter/CardCounter";

type CardDisplayProps = {
  randomCards: Card[];
};

export const CardDisplay = ({ randomCards }: CardDisplayProps) => {
  return (
    <>
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
