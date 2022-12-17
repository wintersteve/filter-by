import "mocha";
import { expect } from "chai";

import type { Type } from "./types";
import filterBy from "./filterBy";

describe("NUMERICAL", () => {
  const TEST_DATA = [{ age: 23 }];

  const filterByAge = (type: Type, value: number | [number, number]) =>
    filterBy(TEST_DATA, [{ field: "age", type, value }]);

  it("EQ", () => {
    expect(filterByAge("EQ", 23).length).eq(1);
    expect(filterByAge("EQ", 24).length).eq(0);
  });

  it("NEQ", () => {
    expect(filterByAge("NEQ", 23).length).eq(0);
    expect(filterByAge("NEQ", 24).length).eq(1);
  });

  it("LT", () => {
    expect(filterByAge("LT", 30).length).eq(1);
    expect(filterByAge("LT", 23).length).eq(0);
    expect(filterByAge("LT", 20).length).eq(0);
  });

  it("LTE", () => {
    expect(filterByAge("LTE", 30).length).eq(1);
    expect(filterByAge("LTE", 23).length).eq(1);
    expect(filterByAge("LTE", 20).length).eq(0);
  });

  it("GT", () => {
    expect(filterByAge("GT", 30).length).eq(0);
    expect(filterByAge("GT", 23).length).eq(0);
    expect(filterByAge("GT", 20).length).eq(1);
  });

  it("GTE", () => {
    expect(filterByAge("GTE", 30).length).eq(0);
    expect(filterByAge("GTE", 23).length).eq(1);
    expect(filterByAge("GTE", 20).length).eq(1);
  });

  it("RANGE", () => {
    expect(filterByAge("RANGE", [20, 30]).length).eq(1);
    expect(filterByAge("RANGE", [23, 30]).length).eq(1);
    expect(filterByAge("RANGE", [24, 30]).length).eq(0);
  });
});

describe("STRINGS", () => {
  const TEST_DATA = [{ text: "Hello World" }];

  const filterByText = (type: Type, value: string) =>
    filterBy(TEST_DATA, [{ field: "text", type, value }]);

  it("EQ", () => {
    expect(filterByText("EQ", "Hello World").length).eq(1);
    expect(filterByText("EQ", "Hello").length).eq(0);
  });

  it("NEQ", () => {
    expect(filterByText("NEQ", "Hello World").length).eq(0);
    expect(filterByText("NEQ", "Hello").length).eq(1);
  });

  it("LIKE", () => {
    expect(filterByText("LIKE", "%Hello World%").length).eq(1);
    expect(filterByText("LIKE", " Hello World").length).eq(0);
    expect(filterByText("LIKE", "Hello%").length).eq(1);
    expect(filterByText("LIKE", "Hello%").length).eq(1);
    expect(filterByText("LIKE", "hello%").length).eq(0);
  });

  it("ILIKE", () => {
    expect(filterByText("ILIKE", "Hello World").length).eq(1);
    expect(filterByText("ILIKE", "hello world").length).eq(1);
    expect(filterByText("ILIKE", "Hello%").length).eq(1);
    expect(filterByText("ILIKE", "hello%").length).eq(1);
  });
});

describe("MULTI VALUE", () => {
  const TEST_DATA = [
    { age: 20, name: "John Doe" },
    { age: 34, name: "John Smith" },
  ];

  const filterByAge = (type: Type, value: number[]) =>
    filterBy(TEST_DATA, [{ field: "age", type, value }]);

  expect(filterByAge("EQ", [20, 34]).length).eq(2);
  expect(filterByAge("LT", [34]).length).eq(1);
  expect(filterByAge("GTE", [37]).length).eq(0);
});

describe("MULTI KEY", () => {
  const TEST_DATA = [
    { firstName: "John", lastName: "Carter" },
    { firstName: "Carter", lastName: "Doe" },
  ];

  const filterByName = (type: Type, value: string) =>
    filterBy(TEST_DATA, [{ field: ["firstName", "lastName"], type, value }]);

  expect(filterByName("LIKE", "Carter").length).eq(2);
  expect(filterByName("LIKE", "John").length).eq(1);
  expect(filterByName("LIKE", "Doe").length).eq(1);
  expect(filterByName("LIKE", "Hudson").length).eq(0);
});

describe("NESTED KEY", () => {
  const TEST_DATA = [
    { name: "John Doe", permissions: { admin: true } },
    { name: "John Smith", permissions: { admin: false } },
  ];

  const filterByPermission = (type: Type, value: boolean) =>
    filterBy(TEST_DATA, [{ field: "permissions.admin", type, value }]);

  expect(filterByPermission("EQ", true).length).eq(1);
  expect(filterByPermission("EQ", false).length).eq(1);
});
