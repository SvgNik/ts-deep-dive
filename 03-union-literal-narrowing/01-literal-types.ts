const literalCount = 4;
let widenedStatus = 4.4;
const mutableConfig = { name: "Nik" };
const frozenConfig = { name: "Alina" } as const;

function getRoleLabel(role: "guest" | "user" | "admin"): string {
  if (role === "guest") {
    return "Гость";
  }
  if (role === "user") {
    return "Юзер";
  }
  return "Админ";
}

console.log(getRoleLabel("guest"));
console.log(getRoleLabel("user"));
console.log(getRoleLabel("admin"));
// console.log(getRoleLabel("amdin"));
//Argument of type '"amdin"' is not assignable to parameter of type '"guest" | "user" | "admin"'.ts(2345)

