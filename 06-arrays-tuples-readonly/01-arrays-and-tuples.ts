type Reading = {
  city: string;
  temp: number;
  recordedAt: string;
};

const CITIES = ["Berlin", "Paris", "Rome"] as const;
// @ts-expect-error - push отсутствует в типе readonly tuple
CITIES.push("Madrid");

function getFirstReading(readings: readonly Reading[]): Reading | undefined {
  return readings[0];
}

function getTempRange(
  readings: readonly Reading[],
): [number, number] | undefined {
  if (readings.length === 0) return;
  const temperatures = readings.map((reading) => reading.temp);
  return [Math.min(...temperatures), Math.max(...temperatures)];
}

function toPair(reading: Reading): [string, number] {
  return [reading.city, reading.temp];
}

function sortByTemp(readings: readonly Reading[]): Reading[] {
  return [...readings].sort((a, b) => a.temp - b.temp);
}

const readings: Reading[] = [
  { city: "Berlin", temp: 18, recordedAt: "2026-08-23T10:00:00" },
  { city: "Paris", temp: 7, recordedAt: "2026-08-23T10:00:00" },
  { city: "Rome", temp: 24, recordedAt: "2026-08-23T10:00:00" },
  { city: "Oslo", temp: 2, recordedAt: "2026-08-23T10:00:00" },
];

const emptyReadings: Reading[] = [];

const firstReading = getFirstReading(readings);
console.log(firstReading);
const emptyReading = getFirstReading(emptyReadings);
console.log(emptyReading);

const tempRange = getTempRange(readings);
console.log(tempRange);
const emptyRange = getTempRange(emptyReadings);
console.log("emptyRange:", emptyRange);

if (firstReading !== undefined) {
  const [city, temp] = toPair(firstReading);
  console.log(city, temp);
}

const sortedReadings = sortByTemp(readings);
console.log(sortedReadings);
console.log(readings);

export {};
