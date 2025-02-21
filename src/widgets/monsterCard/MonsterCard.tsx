import "./monsterCard.scss";
import TextInput from "../../components/TextInput/TextInput";
import { useState } from "react";

type Card = {
  cardId: number;
  cardText: string;
};

export const MonsterCard = () => {
  const [inputValues, setInputValues] = useState<{ [key: string]: string }>({});
  const [cards, setCards] = useState<Card[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCards((prevCards) => [
      ...prevCards,
      { cardId: Date.now(), cardText: inputValues["addMonsterName"] },
    ]);

    setInputValues((prev) => ({
      ...prev,
      addMonsterName: "",
    }));
  };

  const handleEdit = (id: number) => {
    const key = "editMonsterName" + id;
    setCards(
      cards.map((card) => {
        return card.cardId === id
          ? { ...card, cardText: inputValues[key] }
          : card;
      })
    );
  };

  const handleDelete = (id: number) => {
    setCards((prevItems) => prevItems.filter((card => card.cardId !== id)));
  };

  return (
    <>
          <h1>Monster Gallery</h1>
      <div className="monsterFormContainer">
        <form className="monsterForm" onSubmit={handleSubmit}>
          <p className="title">Add a monster
          <label htmlFor="">
            <TextInput
              className="addMonsterInput"
              /* key={} */
              name="addMonsterName"
              onChange={handleChange}
              value={inputValues["addMonsterName"] || ""}
              placeHolder="monster name"
            />
          </label>
          </p>
          <button className="addMonsterButton" type="submit">
            Add
          </button>
        </form>
      </div>
  
      <div className="monsterCard">

        {cards.map((card) => (
          <div className="monsterCardContainer" key={card.cardId}>
            <h2>{card.cardText}</h2>
            
            <TextInput
              className="editCardInput"
              name={"editMonsterName" + card.cardId.toString()}
              onChange={handleChange}
              value={inputValues["editMonsterName" + card.cardId.toString()]}
              placeHolder="edit monster name"
              />
            <button className="edit" onClick={() => handleEdit(card.cardId)}>Edit</button>
            <button className="delete" onClick={() => handleDelete(card.cardId)}>Delete</button>
            
          </div>
        ))}
      </div>
    </>
  );
};
