import inRange from "lodash.inrange";

const range = (value: [number, number], other: number) => {
  const [min, max] = value;
  return inRange(other, max + 1, min);
};

export default range;
