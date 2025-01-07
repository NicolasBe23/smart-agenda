"use client";

import { useDatabase } from "@/database/db";
import { useParams, useRouter } from "next/navigation";
import { AppointmentForm } from "@/components/forms/appointment-form";
import { Appointment } from "@/entities/appointment";
import { CustomerInfo } from "@/components/ui/customer-info";

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
    <div className="w-full flex flex-col gap-4">
      <CustomerInfo id={params.id as string} />
      <AppointmentForm onSubmit={onSubmit} customerId={params.id as string} />
    </div>
  );
}
