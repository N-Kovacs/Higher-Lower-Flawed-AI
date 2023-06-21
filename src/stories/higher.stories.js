import { Card } from "./Card";

export default {
  title: "Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const Primary = {
  args: {
    primary: true,
    label: "Button",
  },
};
