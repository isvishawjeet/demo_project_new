import { DivWrapper } from ".";

export default {
  title: "Components/DivWrapper",
  component: DivWrapper,
  argTypes: {
    property1: {
      options: ["default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "default",
    className: {},
    overlapGroupClassName: {},
    divClassName: {},
    vectorClassName: {},
    vector:
      "https://anima-uploads.s3.amazonaws.com/projects/64e9ed1d494693bef8e1156e/releases/64e9ed5ff1b61250aab16d9f/img/vector-11.svg",
  },
};
