console.log("Serduck");
const colors = ["red", "white", "blue", "grey", "yellow"];
// colors[4] = "green";
// console.log("colors", colors);
// console.log("red", colors[4]);
colors.push("black"); //добавить в конец
colors.unshift("pink"); //добавить в начало
colors.shift(); //удалить с начала
colors.pop(); //удалить с конца
console.log(colors);

for (let i = 0; i < colors.length; i++) {
  console.log(colors);
  colors.shift();
  console.log("----------------------------");
}
