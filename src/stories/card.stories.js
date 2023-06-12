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

export const QueenOfDiamondsSelected = {
  args: {
    number: 12,
    suit: "♦",
    selected: true,
  },
};
