import type { FilterFn } from "../types";

const gt: FilterFn = (field, value) => ({
  type: "GT" as const,
  field,
  value,
});

export default gt;
