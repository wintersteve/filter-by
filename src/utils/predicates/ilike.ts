import createLikeRegex from "./createLikeRegex";

const ilike = (value: string, other: string) =>
  createLikeRegex(value, "i").test(other);

export default ilike;
