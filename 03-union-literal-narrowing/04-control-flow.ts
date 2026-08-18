function renderStatus(state: {
  status: "idle" | "loading" | "error";
  message: string | null;
}): string {
  if (state.status === "idle") {
    return "Ожидание";
  }
  if (state.status === "loading") {
    return "Загрузка...";
  }
  if (!state.message) {
    return "Неизвестная ошибка";
  }
  return state.message;
}

let appState: { error: string | null } = { error: "сбой сети" };

function reset(): void {
  appState = { error: null };
}

function log(): void {
  if (appState.error !== null) {
    reset();
    console.log(appState.error.trim());
  }
}

// log();

function logSafely(): void {
  const error = appState.error;

  if (error !== null) {
    reset();
    console.log(error.trim());
  }
}

function parseInput(value: string | number | boolean): string {
  if (typeof value === "boolean") {
    return value ? "да" : "нет";
  }
  if (typeof value === "number") {
    return value.toFixed(0);
  }
  const trimmed = value.trim();
  if (trimmed === "") {
    return "пусто";
  }
  return trimmed;
}

