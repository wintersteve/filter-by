import type { FilterFn } from "../types";

const lt: FilterFn = (field, value) => ({
  type: "LT" as const,
  field,
  value,
});

export default lt;
