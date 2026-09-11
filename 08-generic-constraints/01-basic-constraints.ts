function longest<T extends { length: number }>(first: T, second: T): T {
  if (first.length >= second.length) {
    return first;
  }
  return second;
}

function totalLength(values: { length: number }[]): number {
  return values.reduce((acc, value) => {
    return acc + value.length;
  }, 0);
}

function findById<T extends { id: number }>(
  items: readonly T[],
  id: number,
): T | undefined {
  return items.find((item) => item.id === id);
}

function sortByLength<T extends { length: number }>(values: readonly T[]): T[] {
  const sorted = [...values];
  return sorted.sort((a, b) => a.length - b.length);
}

const words = ["cat", "a", "world!"];
const longestWordsArray = longest(words, ["one", "two"]);
const longestString = longest("hello", "world!");
console.log(longestWordsArray);
console.log(longestString);
// const invalid = longest(10, 20);

const totalLengthStrings = totalLength(["cat", "hello", "a"]);
const totalLengthArrays = totalLength([
  [1, 2],
  [3, 4, 5],
]);

console.log(totalLengthStrings);
console.log(totalLengthArrays);

// const oneString = totalLength("hello");
// const numberArray = totalLength([1, 2, 3, 4]);

type User = {
  id: number;
  name: string;
};

type Product = {
  id: number;
  name: string;
};

const users: User[] = [
  { id: 1, name: "Bob" },
  { id: 2, name: "Ann" },
  { id: 3, name: "Kris" },
];

const products: Product[] = [
  { id: 1, name: "iPhone" },
  { id: 2, name: "MacBook" },
  { id: 3, name: "iPad" },
];

const findUser = findById(users, 2);
const findProduct = findById(products, 3);
const missingUser = findById(users, 999);
console.log(findUser);
console.log(findProduct);
console.log(missingUser);

const stringSorted = sortByLength(words);
const arraysSorted = sortByLength([
  ["string", "number", "undefined"],
  [1, 4, 3, 5, 2, 6],
]);

console.log(stringSorted);
console.log(arraysSorted);

export {};
