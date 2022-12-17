import type { Primitive } from "../../types";
import eq from "./eq";

const neq = (value: Primitive, other: Primitive) => !eq(value, other);

export default neq;
