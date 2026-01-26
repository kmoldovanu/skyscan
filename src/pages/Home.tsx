import TravelCard from "../components/TravelCard";
import { trips } from "../services/travelService";

export default function Home() {
  return (
    <div>
      <h1>Benvenuto su Travel Booking</h1>
      <div className="trips-list">
        {trips.map((trip) => (
          <TravelCard key={trip.id} trip={trip} />
        ))}
      </div>
    </div>
  );
}
