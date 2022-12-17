import type { FilterFn } from "../types";

const neq: FilterFn = (field, value) => ({
  type: "NEQ" as const,
  field,
  value,
});

export default neq;
