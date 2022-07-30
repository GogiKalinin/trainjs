const leave_button = document.getElementsByClassName("leave_button")[0];
const park_button = document.getElementsByClassName("park_button")[0];
const add_user = document.getElementsByClassName("add_user")[0];
const name_input = document.getElementsByClassName("name_input")[0];
const carmark_input = document.getElementsByClassName("carmark_input")[0];

const max_value = 20;
// const users = [];
const users = [
  {
    name: "gogi",
    mark: "Moskvich",
  },
  {
    name: "yura",
    mark: "toyota",
  },
  {
    name: "rusik",
    mark: "skoda",
  },
];
let user = {};
let current = 3;
let userName;
let carmark;

console.group("--- initial values ---");
console.log("max_value ", max_value);
console.log("current = ", current);
console.log("initial-users", users);
console.groupEnd();

name_input.addEventListener(
  "input",
  function (e) {
    userName = e.target.value;
  },
  false
);

carmark_input.addEventListener(
  "input",
  function (e) {
    carmark = e.target.value;
  },
  false
);

park_button.onclick = function () {
  if (current < max_value) {
    console.group("--- park button clicked");

    console.log("Step 1 : clear name and mark inputs");
    console.log("before clean");
    console.log(`name : ${name_input.value}, mark : ${carmark_input.value}`);
    // clear inputs
    name_input.value = "";
    carmark_input.value = "";
    console.log("after clean");
    console.log(`name : ${name_input.value}, mark : ${carmark_input.value}`);
    console.log("-------");

    console.log("Step 2 : add introduced data to user object");
    console.log("obj user before add", user);

    // add name and mark items to user object
    user.name = userName;
    user.mark = carmark;
    console.log("obj user after add", user);
    console.log("-------");
    // in result it will look like : user = { name: "somename", mark: "somemark" }

    console.log("Step 3 : push user object to users array");
    console.log("users array before push", users);

    // push created user object to users array
    users.push(user);
    console.log("users array after push", users);
    console.log("-------");

    createparkitem(users.indexOf(user), user.name, user.mark);

    console.log("Step 4 : clear user object");
    console.log("obj user before clear", user);
    // clear user object
    user = {};
    console.log("obj user after clear", user);
    console.log("-------");

    // add current items counter
    current++;
    console.groupEnd();
    console.warn("END park btn logic");
  }
};

leave_button.onclick = function () {
  console.log("user want leave parking");
  if (current == 0) {
    console.log("no cars find");
  } else {
    for (let i = 0; i < users.length; i++) {
      const current_name = users[i].name;
      const current_mark = users[i].mark;

      console.group(`--- cycle ${i} ---`);
      console.log("data in this cycle : ");

      console.log("user name IN INPUT : ", userName);
      console.log("user name : ", current_name);
      console.log("user mark IN INPUT: ", carmark);
      console.log("user mark : ", current_mark);

      console.log("check user name : ", current_name == userName);
      console.log("check user mark : ", current_mark == carmark);

      if (current_name == userName && current_mark == carmark) {
        console.log("Correct user name and mark");
        break;
      } else {
        console.log("Username or Mark is not correct");
      }
      console.groupEnd();
    }
  }
  console.warn("END leave btn logic");
};

function createparkitem(number, name, mark) {
  let parklist = document.getElementsByClassName("parklist")[0];
  let div = document.createElement("div");
  let divItem1 = document.createElement("div");
  let divItem2 = document.createElement("div");
  let numerElem = document.createElement("div");

  div.classList.add("parklist_item");
  //let text = document.createTextNode("TEST TEXT");
  let body = document.getElementsByTagName("body")[0];
  body.appendChild(div);

  divItem1.classList.add("parklist_item_name");
  let text1 = document.createTextNode(name);
  divItem1.appendChild(text1);

  divItem2.classList.add("parklist_item_mark");
  let text2 = document.createTextNode(mark);
  divItem2.appendChild(text2);

  numerElem.classList.add("parklist_item_number");
  let numerElementContent = document.createTextNode(number);
  numerElem.appendChild(numerElementContent);

  div.appendChild(numerElem);
  div.appendChild(divItem1);
  div.appendChild(divItem2);
  parklist.appendChild(div);
}

// createparkitem("1", "234", "sdfh");
// createparkitem("1", "sdfg", "sdfgdujkukfh");
// createparkitem("1", "dfgsdfg", "sdfjdfh");
