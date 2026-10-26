import order from "./order.json" with { type: "json" };
import { orderTotal, formatOrder, isInStock } from "./orders.js";
//const order = orderData as Order;
console.log(orderTotal(order));
console.log(formatOrder(order));
console.log(isInStock(order.products[0].product));
console.log(isInStock(order.products[1].product));
console.log(isInStock(order.products[2].product));
//# sourceMappingURL=main.js.map