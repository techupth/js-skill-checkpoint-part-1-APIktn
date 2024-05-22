// Question #1
const myTodo = [
  { id: 1, todo: "Buy groceries" },
  { id: 2, todo: "Finish homework" },
  { id: 3, todo: "Call mom" },
  { id: 4, todo: "Wash dishes" },
];
// เริ่มเขียนโค้ดตรงนี้

// 1) เพิ่ม To-do ใหม่ชื่อว่า "Walk the dog"
function addTodo(todos) {
  return myTodo.push({ id: myTodo.length + 1, todo: todos });
}

addTodo("Walk the dog");
console.log(myTodo);

// 2) ให้แก้ไขชื่อ Todo ที่มี id เป็น 4 จาก "Wash dishes" เป็น "Go to the gym"
let editTodoList = function (id, todo) {
  return myTodo.splice(id - 1, 1, { id, todo });
};

editTodoList(4, "Go to the gym");
console.log(myTodo);

// 3) ลบ To-do สุดท้ายที่อยู่ใน Array ออก
function deleteLastTodo() {
  return myTodo.pop();
}

deleteLastTodo();
console.log(myTodo);

// 4) ให้แสดงข้อความของ To-do ตัวสุดท้ายที่อยู่ในรายการออกมาบนหน้าจอ Console

let showLastTodo = () => {
  return myTodo[myTodo.length - 1];
};

console.log(showLastTodo());
