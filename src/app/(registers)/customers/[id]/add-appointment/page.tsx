"use client";

import { AppointmentForm } from "@/components/forms/appointment-form";
import { CustomerInfo } from "@/components/ui/customer-info";
import { useDatabase } from "@/database/db";
import type { Appointment } from "@/entities/appointment";
import { useParams, useRouter } from "next/navigation";

export default function Page() {
  const params = useParams();
  const router = useRouter();
  const { createAppointment } = useDatabase();

  function onSubmit(appointment: Appointment) {
    const customerId = params.id as string;
    createAppointment(appointment, customerId);
    router.push(`/customers/${customerId}`);
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      <CustomerInfo id={params.id as string} />
      <AppointmentForm onSubmit={onSubmit} customerId={params.id as string} />
    </div>
  );
}
