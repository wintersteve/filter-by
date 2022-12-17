import type { FilterFn } from "../types";

const ilike: FilterFn = (field, value) => ({
  type: "ILIKE" as const,
  field,
  value,
});

export default ilike;
