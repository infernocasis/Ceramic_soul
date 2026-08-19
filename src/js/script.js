import "/src/sass/style.scss";

console.log("Hello world");

let text = "Hello world";
const pi = 3.14;
const isOpen = false; //false or true
// let a:

text = "This is text";

console.log(text);
// console.log(a);

const person = {
  name: "Ivan",
  age: 32,
};

console.log(person.name);

const titles = [
  "Make your dream come true or decorate your home",
  "create or buy",
  "our store", //массив
];

// console.log(titles[0]);

function calc(a, b) {
  //функция
  console.log(a + b);
}

calc(5, 5);
calc(10, 12);

// что будет выполняться если условие правдивое
if (isOpen) {
  console.log("shop is open");
}

// что будет выполняться в обратном случае мы будем делать что-то другое
else {
  console.log("shop is closed");
}

const vase = document.querySelector(".touch__decor");
// console.log(vase);

vase.addEventListener("click", () => {
  console.log(vase);
});

// addEventListener; обработчик события
// querySelector; чтение селектора как я правильно понял
