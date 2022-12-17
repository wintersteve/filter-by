import type { FilterFn } from "../types";

const gte: FilterFn = (field, value) => ({
  type: "GTE" as const,
  field,
  value,
});

export default gte;
