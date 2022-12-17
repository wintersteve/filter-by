import type { FilterFn } from "../types";

const like: FilterFn = (field, value) => ({
  type: "LIKE" as const,
  field,
  value,
});

export default like;
