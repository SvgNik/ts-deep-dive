type OrderStatus = "pending" | "paid" | "cancelled";

type OrderItem = {
  sku: string;
  title: string;
  price: number;
  quantity: number;
};

type Order = {
  id: number;
  customer: string;
  status: OrderStatus;
  items: readonly OrderItem[];
};

type OrderPredicate = (order: Order) => boolean;
type OrderFormatter = (order: Order) => string;

const STATUS_LABELS = {
  pending: "В обработке",
  paid: "Оплачен",
  cancelled: "Отменён",
} as const;

function orderTotal(order: Order): number {
  return order.items.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);
}

function getStatusLabel(status: OrderStatus): string {
  return STATUS_LABELS[status];
}

function filterOrders(
  orders: readonly Order[],
  predicate: OrderPredicate,
): Order[] {
  return orders.filter(predicate);
}

function summarize(orders: readonly Order[]): [count: number, total: number] {
  const count = orders.length;
  const total = orders.reduce((sum, order) => sum + orderTotal(order), 0);
  return [count, total];
}

function renderOrders(
  orders: readonly Order[],
  format: OrderFormatter,
): string[] {
  return orders.map((order) => format(order));
}

const orders: Order[] = [
  {
    id: 101,
    customer: "Anna",
    status: "paid",
    items: [
      { sku: "KB-01", title: "Keyboard", price: 49.99, quantity: 2 },
      { sku: "MS-01", title: "Mouse", price: 19.99, quantity: 1 },
    ],
  },
  {
    id: 102,
    customer: "Dmitry",
    status: "pending",
    items: [{ sku: "MON-01", title: "Monitor", price: 189.99, quantity: 1 }],
  },
  {
    id: 103,
    customer: "Olena",
    status: "cancelled",
    items: [
      { sku: "HD-01", title: "Headphones", price: 79.99, quantity: 1 },
      { sku: "CAM-01", title: "Webcam", price: 54.99, quantity: 2 },
    ],
  },
  {
    id: 104,
    customer: "Mark",
    status: "paid",
    items: [
      { sku: "LP-01", title: "Laptop", price: 999.99, quantity: 1 },
      { sku: "USB-01", title: "USB Hub", price: 24.99, quantity: 2 },
    ],
  },
];

const isPaid = (order: Order): boolean => {
  return order.status === "paid";
};

const paidOrders = filterOrders(orders, isPaid);
console.log(paidOrders);

const renderedOrders = renderOrders(
  orders,
  (order) =>
    `#${order.id} ${order.customer} - ${getStatusLabel(order.status)} - ${orderTotal(order)}`,
);

console.log(renderedOrders);

const [orderCount, totalValue] = summarize(orders);
console.log(orderCount);
console.log(totalValue);

const emptyOrders: Order[] = [];
const emptySummary = summarize(emptyOrders);
console.log(emptySummary);

export {};
