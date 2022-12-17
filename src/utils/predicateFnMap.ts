import type { BinaryPredicate, Type, UnaryPredicate } from "../types";
import curry from "lodash.curry";
import { gt, gte, lt, lte, eq, ilike, like, neq, range } from "./predicates";

const oneOrMany = (
  predicate: BinaryPredicate,
  value: unknown
): UnaryPredicate =>
  Array.isArray(value)
    ? (other: unknown) => value.some((value) => curry(predicate)(value)(other))
    : curry(predicate)(value);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const predicateFnMap: Record<Type, (...args: any[]) => UnaryPredicate> = {
  EQ: (value: number | string) => oneOrMany(eq, value),
  NEQ: (value: number | string) => oneOrMany(neq, value),
  GT: (value: number) => oneOrMany(lt, value),
  GTE: (value: number) => oneOrMany(lte, value),
  LT: (value: number) => oneOrMany(gt, value),
  LTE: (value: number) => oneOrMany(gte, value),
  RANGE: (value: [number, number]) => curry(range)(value) as UnaryPredicate,
  LIKE: (value: string) => oneOrMany(like, value),
  ILIKE: (value: string) => oneOrMany(ilike, value),
};

export default predicateFnMap;
