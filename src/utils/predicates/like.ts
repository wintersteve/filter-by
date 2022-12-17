import createLikeRegex from "./createLikeRegex";

const like = (value: string, other: string) =>
  createLikeRegex(value).test(other);

export default like;
