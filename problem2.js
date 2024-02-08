function deleteInvalids(array) {
  let arr = [];
  for (let number of array) {
    if (typeof number === "number") {
      arr.push(number);
    }
  }
  return arr;
}
const arrNum = [1, null, undefined, 18, -19, NaN, "12", [1, 2], { Ob: "pin" }];
console.log(deleteInvalids(arrNum));
