import type { Order, Product } from "./types.js";

export function orderTotal(order: Order): number {
  const total = order.products.reduce(
    (sum, product) => sum + product.product.price * product.quantity,
    0,
  );
  return Math.round(total * 100) / 100;
}

export function formatOrder(order: Order): string {
  let orderString = `Order #${order.customerId}\n`;

  order.products.forEach((product) => {
    orderString += `${product.product.name}\t${product.quantity} St.\t${product.product.price}Euro\n`;
  });

  orderString += `Total:\t${orderTotal(order)} Euro`;

  return orderString;
}

export function isInStock(product: Product): boolean {
  return product.stockCount > 0;
}
