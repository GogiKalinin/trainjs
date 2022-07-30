function ass(name, surname, years) {
  console.log("name", name);
  console.log("surname", surname);
  console.log("years", years);

  if (years < 18) {
    alert(`Привіт , ${name} ${surname}, You are young.`);
    // alert(" Привіт", name, surname, " You are young.");
  } else {
    alert(`Привіт , ${name} ${surname}, You are old.`);
  }
}

// ass("Gogi", "Serduck ", 20);
// ass("Rusik", "Serduck ", 10);

// ass("Gogi", "Serduck");
// ass("Gogi");
// ass();
function isAdult(age) {
  if (age >= 18) {
    console.log(`You are adult.`);
    return true;
  } else {
    console.log(`You are young.`);
    return false;
  }
}
let result = isAdult(3);
console.log(result);
