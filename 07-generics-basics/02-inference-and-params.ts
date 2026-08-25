function swap<A, B>(pair: [A, B]): [B, A] {
  const [first, second] = pair;
  return [second, first];
}

function firstOrDefault<T>(arr: T[], fallback: T): T {
  return arr[0] ?? fallback;
}

function createEmpty<T>(): T[] {
  return [];
}

const swapped = swap(["Yan", 30]);
const swappedNumbers = swap([10, 20]);
console.log(swapped);
console.log(swappedNumbers);

const firstName = firstOrDefault(["Nik", "Yan"], "Unknown");
const defaultName = firstOrDefault([], "Unknown");
console.log(firstName);
console.log(defaultName);

const upperName = firstName.toUpperCase();
console.log(upperName);

const emptyStringA = createEmpty<string>();
console.log(emptyStringA);

const emptyStringB: string[] = createEmpty();
console.log(emptyStringB);

export {};
