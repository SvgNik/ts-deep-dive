type SortDirection = "asc" | "desc";
type OrderStatus = "paid" | "pending" | "cancelled";
interface Entity {
  readonly id: number;
}
interface Order extends Entity {
  status: OrderStatus;
  amount: number;
  note?: string;
}

function requireById<T extends Entity>(items: readonly T[], id: number): T {
  const found = items.find((item) => item.id === id);
  if (found === undefined) {
    throw new Error(`ID: ${id} не найден`);
  }
  return found;
}

function pickFields<T, K extends keyof T>(obj: T, keys: readonly K[]): T[K][] {
  return keys.map((key) => obj[key]);
}

function groupByKey<T, K extends keyof T>(
  items: readonly T[],
  key: K,
): [T[K], T[]][] {
  return items.reduce<[T[K], T[]][]>((groups, item) => {
    const existing = groups.find((group) => group[0] === item[key]);

    if (existing !== undefined) {
      return groups.map((group) => {
        if (group === existing) {
          return [existing[0], [...existing[1], item]];
        }

        return group;
      });
    } else {
      return [...groups, [item[key], [item]]];
    }
  }, []);
}

function sortByKey<T, K extends keyof T>(
  items: readonly T[],
  key: K,
  direction: SortDirection,
  compare: (a: T[K], b: T[K]) => number,
): T[] {
  const itemsCopy = [...items];

  return itemsCopy.sort((a, b) => {
    const result = compare(a[key], b[key]);

    if (direction === "asc") {
      return result;
    }

    return -result;
  });
}

const orders: Order[] = [
  {
    id: 1,
    status: "paid",
    amount: 120,
    note: "First order",
  },
  {
    id: 2,
    status: "pending",
    amount: 80,
  },
  {
    id: 3,
    status: "cancelled",
    amount: 200,
    note: "Cancelled",
  },
];

const order = requireById(orders, 2);
console.log(order);

const fields = pickFields(order, ["status", "amount"]);
console.log(fields);

const grouped = groupByKey(orders, "status");
console.log(grouped);

const sorted = sortByKey(orders, "amount", "asc", (a, b) => a - b);
console.log(sorted);

// const invalid = pickFields(order, ["price"]);
// Type '"price"' is not assignable to type 'keyof Order'.ts(2322)

export {};
