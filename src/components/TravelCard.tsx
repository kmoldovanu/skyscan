import type { Trip } from "../types/trip";
import { motion } from "framer-motion";

interface Props {
  trip: Trip;
}

export default function TravelCard({ trip }: Props) {
  return (
    <motion.div
      className="travel-card"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <h3>{trip.name}</h3>
      <p>Prezzo: €{trip.price}</p>
    </motion.div>
  );
}
