import { Card } from "./Card";

export default {
  title: "Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
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
    suit: "Club",
  },
};

export const KingOfSpades = {
  args: {
    number: 13,
    suit: "Spade",
  },
};

export const QueenoFDiamondsSelected = {
  args: {
    number: 12,
    suit: "Diamond",
    selected: true,
  },
};
