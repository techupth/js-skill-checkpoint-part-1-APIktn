// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้

function calculateTotalPrice(products, promotionCode) {
  let sumProduct = products.reduce((acc, cur) => {
    return acc + cur.price * cur.quantity;
  }, 0);
  let discounted = (sumProduct, promotionCode) => {
    if (promotionCode === "SALE20") {
      return sumProduct - (sumProduct * 20) / 100;
    } else if (promotionCode === "SALE50") {
      return sumProduct - (sumProduct * 50) / 100;
    } else {
      return sumProduct;
    }
  };
  return discounted(sumProduct, promotionCode);
}

console.log(calculateTotalPrice(products));
console.log(calculateTotalPrice(products, "SALE20"));
console.log(calculateTotalPrice(products, "SALE50"));
