const orders: {
  id: number;
  customer: string;
  total: number;
  isPaid: boolean;
  note: string | null;
}[] = [
  { id: 211, customer: "Nik", total: 1660, isPaid: true, note: "blablabla" },
  { id: 410, customer: "Anna", total: 390, isPaid: false, note: null },
  { id: 190, customer: "Boris", total: 1220, isPaid: false, note: "blablabla" },
  { id: 301, customer: "Sasha", total: 780, isPaid: true, note: null },
  { id: 132, customer: "Homer", total: 2113, isPaid: true, note: "blablabla" },
];

function getPaidTotal(
  orders: {
    id: number;
    customer: string;
    total: number;
    isPaid: boolean;
    note: string | null;
  }[],
): number {
  return orders
    .filter((order) => order.isPaid)
    .reduce((sum, order) => sum + order.total, 0);
}

function getCustomerNames(
  orders: {
    id: number;
    customer: string;
    total: number;
    isPaid: boolean;
    note: string | null;
  }[],
): string[] {
  return orders.map((order) => order.customer);
}

function getOrderLabels(
  orders: {
    id: number;
    customer: string;
    total: number;
    isPaid: boolean;
    note: string | null;
  }[],
): { id: number; label: string }[] {
  return orders.map((order) => ({
    id: order.id,
    label: `${order.customer} - ${order.total} EUR`,
  }));
}

function findLargestOrder(
  orders: {
    id: number;
    customer: string;
    total: number;
    isPaid: boolean;
    note: string | null;
  }[],
):
  | {
      id: number;
      customer: string;
      total: number;
      isPaid: boolean;
      note: string | null;
    }
  | undefined {
  const firstOrder = orders[0];
  if (!firstOrder) return undefined;
  return orders.reduce((largest, order) => {
    return largest.total > order.total ? largest : order;
  }, firstOrder);
}

console.log(getPaidTotal(orders));
console.log(getCustomerNames(orders));
console.log(getOrderLabels(orders));
const largest = findLargestOrder(orders);
if (largest) {
  console.log(largest.customer, largest.total);
}

export {};
