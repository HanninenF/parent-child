import { Card } from "../TextInputForCards";
import TextInput from "../../../components/TextInput/TextInput";
type CardProps = {
  cards: Card[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputValues: {
    [key: string]: string;
  };
  handleChangeCard: (id: number) => void;
  handleDeleteCard: (id: number) => void;
};

export default function ({
  cards,
  onChange,
  inputValues,
  handleChangeCard,
  handleDeleteCard,
}: CardProps) {
  return (
    <>
      {cards.map((card) => (
        <div key={card.id}>
          <h1>Card</h1>
          <p>{card.text}</p>
          <label>
            Edit Card
            <TextInput
              className={"card card" + card.id.toString()}
              name={card.id.toString()}
              onChange={onChange}
              value={inputValues[card.id] || ""}
              placeHolder="edit card"
            />
          </label>
          <button onClick={() => handleChangeCard(card.id)}>edit</button>
          <button onClick={() => handleDeleteCard(card.id)}>Delete Card</button>
        </div>
      ))}
    </>
  );
}
