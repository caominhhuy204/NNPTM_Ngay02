function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

const products = [
  new Product(1, "MacBook Pro M3", 42000000, 5, "Laptop", true),
  new Product(2, "iPhone 15 Pro", 29990000, 0, "Phone", true),
  new Product(3, "AirPods Pro 2", 5900000, 12, "Accessories", true),
  new Product(4, "Magic Mouse", 2500000, 3, "Accessories", false),
  new Product(5, "Dell XPS 13", 35000000, 2, "Laptop", true),
  new Product(6, "Sạc Anker 65W", 850000, 20, "Accessories", true),
];

function runApp() {
  console.log("=== CÂU 3: Mảng name và price ===");
  console.table(products.map(p => ({ name: p.name, price: p.price })));

  console.log("\n=== CÂU 4: Sản phẩm còn hàng ===");
  console.table(products.filter(p => p.quantity > 0));

  const hasOver30M = products.some(p => p.price > 30000000);
  console.log("\n=== CÂU 5: Có sản phẩm giá > 30 triệu? ===");
  console.log(hasOver30M ? "✅ Có" : "❌ Không");

  const allAccessoriesOnSale = products.filter(p => p.category === "Accessories").every(p => p.isAvailable);
  console.log("\n=== CÂU 6: Tất cả sản phẩm 'Accessories' có đang bán? ===");
  console.log(allAccessoriesOnSale ? "✅ Có" : "❌ Không");

  const totalInventoryValue = products.reduce((sum, p) => sum + p.price * p.quantity, 0);
  console.log("\n=== CÂU 7: Tổng giá trị kho hàng ===");
  console.log(totalInventoryValue.toLocaleString("vi-VN"), "₫");

  console.log("\n=== CÂU 8: for...of (Tên - Danh mục - Trạng thái) ===");
  products.forEach(p => {
    const status = p.isAvailable ? "Đang bán" : "Ngừng bán";
    console.log(`${p.name} - ${p.category} - ${status}`);
  });

  console.log("\n=== CÂU 9: for...in (Tên thuộc tính và giá trị) ===");
  const exampleProduct = products[0];
  for (const key in exampleProduct) {
    console.log(`${key}: ${exampleProduct[key]}`);
  }

  console.log("\n=== CÂU 10: Tên sản phẩm đang bán và còn hàng ===");
  const sellingAndInStock = products.filter(p => p.isAvailable && p.quantity > 0).map(p => p.name);
  console.log(sellingAndInStock);
}