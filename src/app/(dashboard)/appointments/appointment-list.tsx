"use client";

import { AppointmentInfo } from "@/components/ui/appointment-info";
import { useDatabase } from "@/database/db";

export function Appointmentlist() {
  const { appointments } = useDatabase();
  const isEmptyAppointments = appointments.length === 0;

  return (
    <div className="w-full flex flex-col gap-4">
      {isEmptyAppointments ? (
        <div className="w-full flex justify-center items-center p-6">
          <p className="text-gray-400">No appointments</p>
        </div>
      ) : (
        appointments.map((appointment) => (
          <AppointmentInfo key={appointment.id} appointment={appointment} />
        ))
      )}
    </div>
  );
}
