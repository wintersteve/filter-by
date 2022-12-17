import type { FilterFn } from "../types";

const lte: FilterFn = (field, value) => ({
  type: "LTE" as const,
  field,
  value,
});

export default lte;
