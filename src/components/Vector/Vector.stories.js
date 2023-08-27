import { Vector } from ".";

export default {
  title: "Components/Vector",
  component: Vector,
  argTypes: {
    property1: {
      options: ["variant-4", "variant-2", "variant-3", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "variant-4",
    className: {},
    propertyDefault:
      "https://anima-uploads.s3.amazonaws.com/projects/64e9ed1d494693bef8e1156e/releases/64e9ed5ff1b61250aab16d9f/img/property-1-default.svg",
  },
};
