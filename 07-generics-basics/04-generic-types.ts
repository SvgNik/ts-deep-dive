type Paged<T> = {
  items: T[];
  page: number;
  hasNext: boolean;
};

interface DataCache<T> {
  entries: T[];
}

type Labeled<T = string> = {
  label: string;
  value: T;
};

const stringPage: Paged<string> = {
  items: ["one", "two", "three"],
  page: 1,
  hasNext: true,
};

const emptyPage: Paged<string> = {
  items: [],
  page: 2,
  hasNext: false,
};

const numberCache: DataCache<number> = {
  entries: [10, 20, 30],
};

const defaultLabeled: Labeled = {
  label: "Name",
  value: "Nik",
};

const labeledNumber: Labeled<number> = {
  label: "age",
  value: 31,
};

function firstOnPage<T>(page: Paged<T>): T | undefined {
  return page.items[0];
}

function addEntry<T>(cache: DataCache<T>, entry: T): DataCache<T> {
  return { entries: [...cache.entries, entry] };
}

const firstStringItem = firstOnPage(stringPage);
console.log(firstStringItem);

const firstEmptyItem = firstOnPage(emptyPage);
console.log(firstEmptyItem);

const cacheWith40 = addEntry(numberCache, 40);
console.log(cacheWith40);
const cacheWith50 = addEntry(cacheWith40, 50);
console.log(cacheWith50);
console.log(numberCache);

export {};
