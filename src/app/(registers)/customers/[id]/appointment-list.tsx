"use client";

import { AppointmentInfo } from "@/components/ui/appointment-info";
import { Button } from "@/components/ui/button";
import { Title } from "@/components/ui/title";
import { useDatabase } from "@/database/db";
import { useRouter } from "next/navigation";

interface Props {
  customerId: string;
}

export function AppointmentList({ customerId }: Props) {
  const { appointments } = useDatabase();
  const router = useRouter();

  const custormerAppointments = appointments.filter(
    (appointment) => appointment.customerId === customerId
  );

  const isEmpty = custormerAppointments.length === 0;

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex items-center justify-between">
        <Title>Appointment</Title>
        <Button
          onClick={() =>
            router.push(`/customers/${customerId}/add-appointment`)
          }
        >
          New Appointment
        </Button>
      </div>
      {isEmpty ? (
        <div>
          <span>No appointments found</span>
        </div>
      ) : (
        custormerAppointments.map((appointment) => (
          <AppointmentInfo appointment={appointment} key={appointment.id} />
        ))
      )}
    </div>
  );
}
