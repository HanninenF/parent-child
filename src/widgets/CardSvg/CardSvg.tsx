import React from "react";
import clubsAceSvg from "../../assets/cardSvg/clubs_ace.svg";
import diamondsAceSvg from "../../assets/cardSvg/diamonds_ace.svg";
import spadesAceSvg from "../../assets/cardSvg/spades_ace_simple.svg";
import heartsAceSvg from "../../assets/cardSvg/hearts_ace.svg";

type CardSvgProps = {
  suit: string;
};

type CardImages = {
  Hearts: string;
  Spades: string;
  Clubs: string;
  Diamonds: string;
};

const cardImages: CardImages = {
  Hearts: heartsAceSvg,
  Spades: spadesAceSvg,
  Clubs: clubsAceSvg,
  Diamonds: diamondsAceSvg,
};
export const CardSvg: React.FC<CardSvgProps> = ({ suit }) => {
  const imageSrc: string = cardImages[suit as keyof CardImages];

  return (
    <svg
      width="40"
      height="40"
      viewBox="95 145 60 60"
      xmlns="http://www.w3.org/2000/svg"
    >
      <image href={imageSrc} width="250" height="350" />
    </svg>
  );
};
