import type { Config } from "../types";
import get from "lodash.get";
import partial from "lodash.partial";
import createPredicate from "./createPredicate";

const conforms = <T>(item: T, config: Config<T>): boolean => {
  const { field, ...rest } = config;
  const getValue = partial(get, item);
  const conform = (other: keyof T) => createPredicate(rest)(other);
  return Array.isArray(field)
    ? field.some((f) => conform(getValue(f)))
    : conform(getValue(field));
};

export default conforms;
