const leave_button = document.getElementsByClassName("leave_button")[0];
const park_button = document.getElementsByClassName("park_button")[0];
const add_user = document.getElementsByClassName("add_user")[0];
const name_input = document.getElementsByClassName("name_input")[0];
const carmark_input = document.getElementsByClassName("carmark_input")[0];

const max_value = 5;
const users = [];
let user = {};
let current = 0;
let userName;
let carmark;

console.log("max_value ", max_value);
console.log("current = ", current);

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

function parkcar(key, value) {
  console.log("key", key);
  console.log("value", value);
}

name_input.addEventListener(
  "input",
  function (e) {
    let name = e.target.value;
    userName = name;
  },
  false
);

carmark_input.addEventListener(
  "input",
  function (e) {
    let mark = e.target.value;
    carmark = mark;
  },
  false
);

park_button.onclick = function () {
  console.log("user want park car");
  if (current < max_value) {
    console.log("Allowed");
    name_input.value = "";
    carmark_input.value = "";
    user.name = userName;
    user.mark = carmark;
    console.log("user", user);
    users.push(user);
    console.log("users", users);
    user = {};
    current++;
    console.log("current is ", current);
  } else {
    console.log("fuck you, asshole");
  }
};
