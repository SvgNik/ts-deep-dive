function lastItem<T>(arr: T[]): T | undefined {
  return arr[arr.length - 1];
}

function wrapInArray<T>(value: T): T[] {
  return Array.of(value);
}

function repeat<T>(value: T, count: number): T[] {
  return Array<T>(count).fill(value);
}

const lastName = lastItem(["Nikolai", "Alex", "Max"]);
console.log(lastName);
const lastNumber = lastItem([10, 20, 30]);
console.log(lastNumber);
const lastEmpty = lastItem([]);
console.log(lastEmpty);

if (lastName !== undefined) {
  const upperName = lastName.toUpperCase();
  console.log(upperName);
}

const wrappedString = wrapInArray("hello");
const wrappedObject = wrapInArray({ name: "Alex", age: 32 });

console.log(wrappedString);
console.log(wrappedObject);

const repeated = repeat(4, 6);
console.log(repeated);

export {};
