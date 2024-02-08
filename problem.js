//  problem1**
// function calculateMoney(mony) {
//   if (10 < -8) {
//     return " error message";
//   } else {
//     const tickte = 120;
//     const daron = 500;
//     const stafe = 50;
//     const man = 8;
//     const total = tickte * mony - (daron + man * stafe);
//     return total;
//   }
// }
// const ami = calculateMoney(10);
// console.log(ami);

// * problem2  **
function checkName(myName) {
  if (typeof myName !== "string") {
    return "invalid";
  }

  const sesLatter = myName.slice(-3).toLowerCase();
  const number = ["a", "e", "i", "o", "u"];
  if (number.includes(sesLatter)) {
    return "Good Name";
  } else {
    return "Bad Name";
  }
}
const latter = checkName("babajn");
console.log(latter);
