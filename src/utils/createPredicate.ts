import type { Config, UnaryPredicate } from "../types";
import get from "lodash.get";
import predicateFnMap from "./predicateFnMap";

const createPredicate = <T>(
  config: Pick<Config<T>, "type" | "value">
): UnaryPredicate => {
  const { type, value } = config;
  return get(predicateFnMap, type)(value);
};

export default createPredicate;
