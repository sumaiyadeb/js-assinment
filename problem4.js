function password(data) {
  const name = data.name;
  const birthYear = data.birthYear;
  const string = "" + birthYear;

  let myWeb = data.siteName;
  let webName = myWeb.charAt(0).toUpperCase() + myWeb.slice(1);
  const Result = webName + "#" + name + "@" + string;
  return Result;
}
const dataInput = { name: "sumaiya", birthYear: 2004, siteName: "instagram" };
console.log(password(dataInput));
