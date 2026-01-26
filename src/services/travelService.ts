import type { Trip } from "../types/trip";

export const trips: Trip[] = [
  { id: 1, name: "Roma", price: 200 },
  { id: 2, name: "Parigi", price: 300 },
  { id: 3, name: "New York", price: 500 },
];

export function getTrip(id: number): Trip | undefined {
  return trips.find((trip) => trip.id === id);
}
