type ResolvePath<T, K extends keyof T> = K extends string
  ? T[K] extends Record<string, unknown>
    ? T[K] extends ArrayLike<unknown>
      ? K | `${K}.${ResolvePath<T[K], Exclude<keyof T[K], keyof unknown[]>>}`
      : K | `${K}.${ResolvePath<T[K], keyof T[K]>}`
    : K
  : never;

export type Path<T> = ResolvePath<T, keyof T> | keyof T;

export type Primitive = string | boolean | number;

export type Type =
  | "EQ"
  | "NEQ"
  | "GT"
  | "GTE"
  | "LT"
  | "LTE"
  | "RANGE"
  | "LIKE"
  | "ILIKE";

export interface Config<T> {
  field: Path<T> | Path<T>[];
  type: Type;
  value: any;
}

export type UnaryPredicate = (other: unknown) => boolean;

export type BinaryPredicate = (value: any, other: any) => boolean;

export type FilterFn = <T>(field: Path<T>, value: unknown) => Config<T>;
