type Status = "idle" | "loading" | "success" | "error";
type Role = "admin" | "user" | "guest";
type User = { name: string; role: Role };

function renderStatus(status: Status, user: User): string {
  if (status === "idle") return `${user.name}: ничего не запрошено`;
  if (status === "loading") return `${user.name}: загрузка`;
  if (status === "error") return `${user.name}: ошибка`;
  return `${user.name}: готово`;
}

function canEdit(user: User): boolean {
  return user.role === "admin";
}

function describeUser(user: User, status: Status): string {
  return `${user.name} (${user.role}) - ${status}`;
}

function getRoleLabel(role: Role): string {
  if (role === "admin") {
    return "Администратор";
  }
  if (role === "user") {
    return "Пользователь";
  }
  return "Гость";
}

const statusText = renderStatus("loading", { name: "Nik", role: "user" });
console.log(statusText);

const canUserEdit = canEdit({ name: "Gans", role: "admin" });
console.log(canUserEdit);

const userDescription = describeUser({ name: "Yan", role: "guest" }, "success");
console.log(userDescription);

const roleLabel = getRoleLabel("user");
console.log(roleLabel);
