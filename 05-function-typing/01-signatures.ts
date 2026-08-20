type CartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
};

function formatPrice(price: number, currency: string = "EUR"): string {
  return `${price.toFixed(2)} ${currency}`;
}

function applyDiscount(price: number, discountPercent?: number): number {
  if (discountPercent !== undefined) {
    return price - (price * discountPercent) / 100;
  }
  return price;
}

function sumPrices(...prices: number[]): number {
  return prices.reduce((sum, price) => {
    return sum + price;
  }, 0);
}

function logCart(items: CartItem[]): void {
  items.forEach((item) => {
    console.log(
      `${item.quantity} × ${item.title} - ${formatPrice(item.price * item.quantity)}`,
    );
  });
}

function findItem(items: CartItem[], id: number): CartItem | undefined {
  return items.find((item) => {
    return item.id === id;
  });
}

const priceWithoutDiscount = applyDiscount(230);
console.log(priceWithoutDiscount);

const discountedPrice = applyDiscount(440, 15);
console.log(discountedPrice);

const totalPrice = sumPrices(8, 14, 21, 3);
console.log(totalPrice);

const emptySum = sumPrices();
console.log(emptySum);

const cart: CartItem[] = [
  {
    id: 12,
    title: "laptop",
    price: 1600,
    quantity: 3,
  },
];

const foundItem = findItem(cart, 12);
console.log(foundItem);

const missingItem = findItem(cart, 7);
console.log(missingItem);

export {};
