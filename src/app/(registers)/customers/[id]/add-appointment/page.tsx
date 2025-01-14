"use client";

import { AppointmentForm } from "@/components/forms/appointment-form";
import { CustomerInfo } from "@/components/ui/customer-info";
import { Title } from "@/components/ui/title";
import { useDatabase } from "@/database/db";
import type { Appointment } from "@/entities/appointment";
import { useParams, useRouter } from "next/navigation";

export default function AddAppointment() {
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

      <div className="border border-gray-700 bg-gray-950 p-6 rounded-md shadow-md flex flex-col gap-4">
        <button
          className="text-gray-400 hover:text-gray-300 w-fit"
          onClick={() => router.back()}
        >
          Cancel
        </button>

        <Title>Add Appointment</Title>
        <AppointmentForm onSubmit={onSubmit} customerId={params.id as string} />
      </div>
    
    </div>
  );
}
