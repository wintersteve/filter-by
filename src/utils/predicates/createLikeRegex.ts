const createLikeRegex = (value: string, flags?: string) =>
  new RegExp(`^${value.replace(/%/g, ".*")}$`, flags);

export default createLikeRegex;
