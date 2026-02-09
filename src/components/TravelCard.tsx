import type { Trip } from "../types/trip";

interface Props {
  trip: Trip;
}

export default function TravelCard({ trip }: Props) {
  return (
    <div className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl">
      <img src={trip.img} alt="" className="w-full h-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{ trip.name }</div>
        <p className="text-gray-500 text-base">{trip.desc}</p>
        {/* TODO: Continuare da qui! */}
      </div>
    </div>
  );
}
