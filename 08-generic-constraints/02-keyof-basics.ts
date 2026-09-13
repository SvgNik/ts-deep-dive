//in требует объект справа, потому что без constraint - T мог быть чем угодно.
function hasKey<T extends object>(obj: T, key: keyof T): boolean {
  return key in obj;
}

//key: keyof T
function collectLabels<T>(items: readonly T[], key: keyof T): string[] {
  return items.map((item) => String(item[key]));
}

//Компилятор не может гарантировать, что ве строки из Obj.keys() являются keyof T
//Мы предполагаем, что Obj.keys(obj) возвращает только реальные ключи переданного obj
function keysOf<T extends object>(obj: T): (keyof T)[] {
  return Object.keys(obj) as (keyof T)[];
}

type User = {
  id: number;
  name: string;
  email?: string;
};

const users: User[] = [
  { id: 6, name: "Nik" },
  { id: 3, name: "Ann", email: "rikosanch@gmail.com" },
  { id: 8, name: "Jhon" },
];

const userWithEmail = users[1];

if (userWithEmail !== undefined) {
  const hasEmail = hasKey(userWithEmail, "email");
  console.log(hasEmail);
}

const userWithoutEmail = users[0];

if (userWithoutEmail !== undefined) {
  const hasEmail = hasKey(userWithoutEmail, "email");
  console.log(hasEmail);
}

const labels = collectLabels(users, "name");
console.log(labels);

if (userWithEmail !== undefined) {
  const keys = keysOf(userWithEmail);
  console.log(keys);
}

const productLabels = collectLabels([{ sku: "ABC", price: 999 }], "sku");
console.log(productLabels);
//error TS2345: Argument of type 'User | undefined' is not assignable
//to parameter of type 'object'.
//Type 'undefined' is not assignable to type 'object'.

export {};
