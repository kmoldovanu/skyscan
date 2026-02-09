import TravelCard from "../components/TravelCard";
import { trips } from "../services/travelService";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Scopri il mondo con Noi</h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Prenota la tua prossima avventura e crea ricordi indimenticabili
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
        {trips.map((trip) => (
          <TravelCard key={trip.id} trip={trip} />
        ))}
      </div>
    </div>
  );
}
