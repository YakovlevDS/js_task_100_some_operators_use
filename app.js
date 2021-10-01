// ? Task:


// Solution 1
let firstName = null;
let lastName = null;
let nik
let nameS = 0
let nickName = "Super";
console.log(nik);


// ??
console.log(firstName ?? lastName ?? nickName ?? "Unknown" ?? 'know');//Super;
console.log(lastName ?? 'No lastName');//No lastName
console.log(nik ?? "No nik");//No nik
console.log(nik ?? nameS ?? "No nik");//0

// ||
console.log(firstName || lastName || nickName || "Unknown");//Super;
console.log(lastName || "No lastName"); //No lastName
console.log(nik || nameS || "No nik"); //No nik

// Using bitwise NOT ~
console.log(~0)  // -1
console.log(~-1) // 0
console.log(~1)  // -2
const a = "Hello World";
const number = ~a.indexOf("lo");//Оператор ~ работает таким образом: ~x = -(x+1)
console.log(number);//a.indexOf('lo') === 3; ~3 === -4 



// || возвращает первое истинное значение.
 //   Проще говоря, оператор || не различает false, 0, пустую строку "" и null/undefined
// ?? возвращает первое определённое значение.

// ! Explanation: оператор ?? и || -- если null  или undefined - пропускает остальное первое true выбирает.
