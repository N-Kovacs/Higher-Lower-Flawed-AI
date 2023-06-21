import { Card } from "./Card";

export default {
  title: "Card",
  component: Card,
  tags: ["autodocs"],
};

export const Empty = {
  args: {},
};

export const Ace = {
  args: {
    number: 1,
  },
};

export const FiveOfClubs = {
  args: {
    number: 5,
    suit: "♣",
  },
};

<<<<<<< HEAD
export const QueenOfDiamondsSelected = {
=======
export const KingOfSpades = {
  args: {
    number: 13,
    suit: "Spade",
  },
};

export const QueenoFDiamondsSelected = {
>>>>>>> 0b5c8cf28afb9e20a3c7a7d437d7e105fe4e532c
  args: {
    number: 12,
    suit: "♦",
    selected: true,
  },
};
