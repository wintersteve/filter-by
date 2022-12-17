import type { FilterFn } from "../types";

const range: FilterFn = (field, value) => ({
  type: "RANGE" as const,
  field,
  value,
});

export default range;
