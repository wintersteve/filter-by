import { Config } from "./types";

const createFilters = <T>(filters: Array<Config<T>>) => filters;

export default createFilters;
