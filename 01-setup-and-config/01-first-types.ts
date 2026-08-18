function formatRating(rating: number): string {
  return `${rating.toFixed(1)}/10`;
}

function getGreeting(name: string, age: number): string {
  return `${name}, ${age}`;
}

console.log(formatRating(6));
console.log(getGreeting("Nik", 10));
// console.log(formatRating("six"));
// TS2345: Argument of type 'string' is not assignable to parameter of type 'number'
// console.log(formatRating(6, 6, 1));
// TS2554: Expected 1 arguments, but got 3.
// console.log(getGreeting(6, "nik"));
// TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.

// const incorrectVariable: number = formatRating(8);
// TS2322: Type 'string' is not assignable to type 'number'.

export {};
