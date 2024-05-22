// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้
// 1) ให้แก้ไขจำนวนสินค้า “Apple” จาก 100 เป็น 200
function editQuantity(nameFruit, newQuantity) {
  for (i of inventory) {
    if (i.name === nameFruit) {
      return (i.quantity = newQuantity);
    }
  }
}

editQuantity("Apple", 200);
console.log(inventory);

// 2) เพิ่มสินค้าใหม่ที่ชื่อ “Orange” ที่มีราคา 20 บาท และมีจำนวน 300 ชิ้นในสต็อก
function addNewProduct(name, price, quantity) {
  return inventory.push({ name, price, quantity });
}

addNewProduct("Orange", 20, 300);
console.log(inventory);

// 3) ให้คำนวณมูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก
function sumInventoryPrice() {
  let sumAll = inventory.reduce((acc, cur) => {
    return acc + cur.price * cur.quantity;
  }, 0);
  return sumAll;
}

console.log(sumInventoryPrice());
