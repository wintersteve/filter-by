import type { FilterFn } from "../types";

const eq: FilterFn = (field, value) => ({
  type: "EQ" as const,
  field,
  value,
});

export default eq;
