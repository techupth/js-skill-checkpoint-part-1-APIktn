// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้

let minInventoryPrice = () => {
  let checkInventory = inventory[0];
  for (let i of inventory) {
    if (i.price < checkInventory.price) {
      checkInventory = i;
    }
  }
  return checkInventory;
};

console.log(minInventoryPrice());
