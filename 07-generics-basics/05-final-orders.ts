type Status = "new" | "paid" | "cancelled";
type Order = { id: number; status: Status; total: number };

const orders: readonly Order[] = [
  { id: 17, status: "paid", total: 1200 },
  { id: 34, status: "paid", total: 690 },
  { id: 23, status: "new", total: 3200 },
  { id: 12, status: "cancelled", total: 490 },
  { id: 43, status: "cancelled", total: 2700 },
  { id: 19, status: "paid", total: 4300 },
];

function findFirst<T>(
  items: readonly T[],
  predicate: (item: T) => boolean,
): T | undefined {
  for (const item of items) {
    if (predicate(item)) {
      return item;
    }
  }
  return undefined;
}

function partition<T>(
  items: readonly T[],
  predicate: (item: T) => boolean,
): [T[], T[]] {
  const firstEmptyArr: T[] = [];
  const secondEmptyArr: T[] = [];

  for (const item of items) {
    if (predicate(item)) {
      firstEmptyArr.push(item);
    } else {
      secondEmptyArr.push(item);
    }
  }
  return [firstEmptyArr, secondEmptyArr];
}

function mapItems<A, B>(items: readonly A[], transform: (item: A) => B): B[] {
  const emptyArr: B[] = [];

  for (const item of items) {
    emptyArr.push(transform(item));
  }

  return emptyArr;
}

function statusLabel(status: Status): string {
  switch (status) {
    case "new":
      return "Новый";
    case "paid":
      return "Оплачен";
    case "cancelled":
      return "Отменён";
  }
}

const firstPaid = findFirst(orders, (order) => order.status === "paid");
console.log(firstPaid);

const notFound = findFirst(orders, (order) => order.total === 999);
console.log(notFound);

const [cancelled, rest] = partition(
  orders,
  (order) => order.status === "cancelled",
);
console.log(cancelled);
console.log(rest);
console.log(cancelled.length);
console.log(rest.length);

const totals = mapItems(orders, (order) => {
  return order.total;
});
console.log(totals);

const labels = mapItems(orders, (order) => statusLabel(order.status));
console.log(labels);

console.log(statusLabel("new"));
console.log(statusLabel("paid"));
console.log(statusLabel("cancelled"));

export {};
