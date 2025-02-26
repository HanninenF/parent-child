import { Card } from "../CardCounter/CardCounter";

type CardHistoryProps = {
  fiveLatest: Card[];
};

export const CardHistory = ({ fiveLatest }: CardHistoryProps) => {
  return (
    <>
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
    </>
  );
};
