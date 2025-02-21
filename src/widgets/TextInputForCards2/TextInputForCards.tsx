import React, { useEffect, useState } from "react";
import TextInput from "../../components/TextInput/TextInput";
import CardList from "./Card/CardList";

export type Card = {
  id: number;
  text: string;
};

export const TextInputForCards = () => {
  const [inputValues, setInputValues] = useState<{ [key: string]: string }>({});

  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    console.log("State uppdaterat:", inputValues);
  }, [inputValues]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //const { name, value } = e.target; betyder att man destrukturerar name och value från e.target
    const { name, value } = e.target;
    setInputValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCards([...cards, { id: Date.now(), text: inputValues["add"] }]);
    setInputValues((prev) => ({ ...prev, add: "" }));
  };

  const handleDeleteCard = (id: number) => {
    setCards(cards.filter((card) => card.id !== id));
    setInputValues((prev) => ({ ...prev, add: "", [id]: "" }));
  };

  const handleChangeCard = (id: number) => {
    setCards(
      cards.map((card) => {
        return card.id === id ? { ...card, text: inputValues[id] } : card;
      })
    );
    setInputValues((prev) => ({ ...prev, [id]: "" }));
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            <TextInput
              className="addInput"
              name="add"
              onChange={handleChange}
              value={inputValues["add"] || ""}
              placeHolder="add card"
            />
          </label>
          <button type="submit">Add Card</button>
        </form>

        <CardList
          cards={cards}
          onChange={handleChange}
          inputValues={inputValues}
          handleChangeCard={handleChangeCard}
          handleDeleteCard={handleDeleteCard}
        />
      </div>
    </>
  );
};
