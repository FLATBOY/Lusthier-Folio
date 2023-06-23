// Gets user score
const m = prompt('Nhập điểm thi Toán');
const l = prompt('Nhập điểm thi Ngữ Văn');
const en = prompt('Nhập điểm thi Tiếng Anh');
const b = prompt('Nhập điểm thi Sinh học');
const c = prompt('Nhập điểm thi Hoá học');
const ph = prompt('Nhập điểm thi Vật Lý');
const h = prompt('Nhập điểm thi Lịch Sử');
const g = prompt('Nhập điểm thi Địa Lý');
const ci = prompt('Nhập điểm thi GDCD');
const t = prompt('Nhập điểm thi Công Nghệ');
const pr = prompt('Nhập điểm thi Tin học');
const nd = prompt('Nhập điểm thi GDQP');
const e = prompt('Nhập điểm thi Thể Dục');

console.log(typeof m)
let average = (m+l+en+b+c+ph+h+g+ci+t+pr+nd+e) / 13
console.log(average)

// Uses user input to print out information
// console.log(`Hello ${m}!`);
// console.log(num + "?! That's my favorite number too!");

// // Prints out the variable type
// println("Name is a " + typeof name);
// println("Num is a " + typeof num);