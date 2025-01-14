"use client";

import { Appointment } from "@/entities/appointment";
import { useRouter } from "next/navigation";

interface Props {
  appointment: Appointment;
}

export function AppointmentInfo({ appointment }: Props) {
  const router = useRouter();
  return (
    <button onClick={() => router.push(`/appointments/${appointment.id}`)}>
      <div className="w-full shadow-md bg-gray-950 rounded-md p-2 px-4 border border-gray-700">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700">
              <th />
              <th className="p-2">Spherical</th>
              <th className="p-2">Cilindric</th>
              <th className="p-2">Axle</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-700">
              <th className="text-left p-2">Left Eye</th>
              <th className="p-2">{appointment.esfOD}</th>
              <th className="p-2">{appointment.cilOD}</th>
              <th className="p-2">{appointment.axleOD}</th>
            </tr>
            <tr>
              <th className="text-left p-2">Right Eye</th>
              <th className="p-2">{appointment.esfOE}</th>
              <th className="p-2">{appointment.cilOE}</th>
              <th className="p-2">{appointment.axleOE}</th>
            </tr>
          </tbody>
        </table>
      </div>
    </button>
  );
}
