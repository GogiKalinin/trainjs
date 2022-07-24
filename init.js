const age = 15;
const name = "a";

if (age >= 18) {
  console.log("You are old.(");
} else if (age == "15") {
  console.log(15);
} else {
  console.log("Yong");
}

// Є паркінг у якому може поміститися максимум 30 машин.
// Нам відома кількусть занятих місць.
// Коли приїздить машина, потрібно додавати 1 до теперішньої кількості.
// Якщо парк переповнений, повідомити про це користувачу.

const max_value = 30;
let current = 25;

const park_button = document.getElementsByClassName("park_button")[0];
console.log("max_value = 30");
console.log("current = ", current);
park_button.onclick = function () {
  console.log("user want park car");
  if (current < max_value) {
    console.log("Allowed");
    current++;
    console.log("current is ", current);
  } else {
    console.log("fuck you, asshole");
  }
};


// Є паркінг у якому може поміститися максимум 30 машин.
// Нам відома кількусть занятих місць.
// Коли виїздить машина, потрібно віднімати 1 від теперішньої кількості.

const leave_button = document.getElementsByClassName("leave_button")[0];
console.log();
leave_button.onclick = function () {
  console.log("user want leave parking");
  if (current == 0) {
    console.log("no cars find");
  } else {
    console.log("GO!");
    current--;
    console.log("current is ", current);
  }
};

