interface Entity {
  id: number;
  createdAt: string;
}

interface Timestamped {
  updatedAt: string;
}

interface Customer extends Entity {
  name: string;
  email: string;
}

interface Product extends Entity, Timestamped {
  title: string;
  price: number;
}

type OrderStatus = "new" | "paid" | "shipped" | "cancelled";

interface Order extends Entity, Timestamped {
  customer: Customer;
  items: Product[];
  status: OrderStatus;
}

function describeOrder(order: Order): string {
  return `Заказ #${order.id} (${order.status}), клиент: ${order.customer.name}, позиций: ${order.items.length}`;
}

function getOrderTotal(order: Order): number {
  return order.items.reduce((acc, item) => {
    return acc + item.price;
  }, 0);
}

// Два объявления interface с одним именем в одной declaration scope
// (здесь - один файл) сливаются в один тип: Customer получает phone.
// В разных модулях слияния бы не было - были бы два независимых типа.
// У type в этой ситуации TS2300 Duplicate identifier.
interface Customer {
  phone?: string;
}

const order: Order = {
  id: 12,
  createdAt: "16.08.2026",
  updatedAt: "18.08.2026",
  customer: {
    id: 14,
    createdAt: "14.08.2026",
    name: "Nik",
    email: "example@gmail.com",
    phone: "+380937777777",
  },
  items: [
    {
      id: 21,
      createdAt: "05.04.2026",
      updatedAt: "07.06.2026",
      title: "phone",
      price: 1999,
    },
    {
      id: 27,
      createdAt: "02.05.2026",
      updatedAt: "08.06.2026",
      title: "laptop",
      price: 3900,
    },
  ],
  status: "paid",
};

const description = describeOrder(order);
const total = getOrderTotal(order);

console.log(description);
console.log(total);

export {};
