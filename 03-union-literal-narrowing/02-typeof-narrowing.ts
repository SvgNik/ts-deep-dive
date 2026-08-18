function formatValue(value: string | number): string {
  if (typeof value === "number") {
    return value.toFixed(2);
  }
  return value.trim().toLocaleLowerCase();
}

formatValue("  HELLO  ");
formatValue(42);
formatValue(3.14159);

function getDisplayPrice(value: number | undefined): string {
  if (value === undefined) {
    return "Цена не указана";
  }
  return `${value} usd`;
}

getDisplayPrice(1190);
getDisplayPrice(undefined);
getDisplayPrice(0);

function getUserLabel(name: string | null): string {
  if (!name) {
    return "Аноним";
  }
  return name;
}

getUserLabel("Nik");
getUserLabel(null);
getUserLabel("");

export {};
