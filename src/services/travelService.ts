import type { Trip } from "../types/trip";

export const trips: Trip[] = [
  { id: 1, 
    name: "Roma", 
    price: 200, 
    img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80",
    desc: "Esplora la città eterna con i suoi monumenti storici e la cucina autentica"
  },
  { id: 2, 
    name: "Parigi", 
    price: 300, 
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
    desc: "Scopri la magia della Torre Eiffel e i caffè parigini"
  },
  { id: 3, 
    name: "New York", 
    price: 500, 
    img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80",
    desc: "Vivi l'esperienza della Grande Mela, tra grattacieli e cultura"
  },
];

export function getTrip(id: number): Trip | undefined {
  return trips.find((trip) => trip.id === id);
}
