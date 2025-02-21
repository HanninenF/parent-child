import React, { useState } from "react";

type CardProps = {
  div: React.HTMLProps<HTMLDivElement>;
  h1: React.HTMLProps<HTMLHeadingElement>;
  p: React.HTMLProps<HTMLParagraphElement>;
};

const TextInputForCards = () => {
  const [inputValue, setInputValue] = useState("");

  const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const HandleReset = () => {
    setInputValue("");
  };

  const HandleSend = (e: React.FormEvent) => {
    e.preventDefault();
    setInputValue("");
  };

  return (
    <>
      <div>
        <form onSubmit={HandleSend}>
          <label htmlFor="">
            <input type="text" onChange={HandleChange} value={inputValue} />
          </label>
          <button type="submit">send</button>
        </form>
        <button type="button" onClick={HandleReset}>
          removeCard
        </button>

        {inputValue && (
          <div {...card.div}>
            <h1 {...card.h1}>Card</h1>
            <p {...card.p}>{inputValue}</p>
          </div>
        )}
      </div>
    </>
  );
};
export default TextInputForCards;
