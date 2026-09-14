function pluck<T, K extends keyof T>(items: readonly T[], key: K): T[K][] {
  return items.map((item) => item[key]);
}

const ids = pluck([{ id: 1, name: "Nik" }], "id");
console.log(ids);

function firstWhere<T, K extends keyof T>(
  items: readonly T[],
  key: K,
  value: T[K],
): T | undefined {
  return items.find((item) => item[key] === value);
}

const foundUser = firstWhere([{ id: 1, name: "Nik" }], "id", 1);
console.log(foundUser);

function pickTwo<T, K1 extends keyof T, K2 extends keyof T>(
  obj: T,
  key1: K1,
  key2: K2,
): [T[K1], T[K2]] {
  return [obj[key1], obj[key2]];
}

const idAndName = pickTwo({ id: 1, name: "Nik" }, "id", "name");
console.log(idAndName);

function updateProp<T, K extends keyof T>(obj: T, key: K, value: T[K]): T {
  return { ...obj, [key]: value };
}

const renamed = updateProp({ id: 1, name: "Nik" }, "name", "Jhon");
console.log(renamed);

const product = pluck([{ title: "iPhone", price: 899 }], "price");
console.log(product);

const productInfo = pickTwo({ title: "iPhone", price: 899 }, "title", "price");
console.log(productInfo);
// const negativeCase = updateProp({ id: 1, name: "Nik" }, "name", 123);
//Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)

export {};
