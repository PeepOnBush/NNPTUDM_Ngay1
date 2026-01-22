//Cau 1
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}
//Cau 2
const products = [
  new Product(1, "Keyboard", 25, 10, "Accessories", true),
  new Product(2, "Mouse", 15, 0, "Accessories", false),
  new Product(3, "Monitor", 150, 5, "Electronics", true),
  new Product(4, "Headphones", 45, 8, "Accessories", true),
  new Product(5, "Laptop", 900, 3, "Electronics", true)
];

//Cau 3
const nameAndPrice = products.map(p => ({
  name: p.name,
  price: p.price
}));
console.log("Cau 3:");
console.log(nameAndPrice);

//Cau 4 
const inStockProducts = products.filter(p => p.quantity > 0);
console.log("Cau 4:");

console.log(inStockProducts);

//Cau 5 
const hasPriceAbove30 = products.some(p => p.price > 30);
console.log("Cau 5:");

console.log(hasPriceAbove30);

//Cau 6
const allAccessoriesAvailable = products
  .filter(p => p.category === "Accessories")
  .every(p => p.isAvailable === true);
console.log("Cau 6:");

console.log(allAccessoriesAvailable);

//Cau 7
const totalInventoryValue = products.reduce(
  (total, p) => total + p.price * p.quantity,
  0
);
console.log("Cau 7:");

console.log(totalInventoryValue);

//Cau 8
console.log("Cau 8:");

for (const product of products) {

  console.log(
    `${product.name} - ${product.category} - ${product.isAvailable ? "Đang bán" : "Ngừng bán"}`
  );
}

//Cau 9 
console.log("Cau 9:");

for (const key in products[0]) {
  console.log(key + ":", products[0][key]);
}

//Cau 10

const availableAndInStockNames = products
  .filter(p => p.isAvailable && p.quantity > 0)
  .map(p => p.name);
console.log("Cau 10:");

console.log(availableAndInStockNames);
