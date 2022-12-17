import type { Config } from "./types";
import partial from "lodash.partial";
import conforms from "./utils/conforms";

const filterBy = <T>(
  collection: Array<T>,
  config: Array<Config<T>>
): Array<T> =>
  collection.filter((item) => config.every(partial(conforms, item)));

export default filterBy;
