"use client";

import { useDatabase } from "@/database/db";
import { useParams, useRouter } from "next/navigation";
import { AppointmentForm } from "@/components/forms/appointment-form";
import { Appointment } from "@/entities/appointment";
import { CustomerInfo } from "@/components/ui/customer-info";
import { Title } from "@/components/ui/title";

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
      <div className=" border-gray-700 bg-gray-950 p-6 rounded-md shadow-md flex flex-col gap-6 ">
        <button
          className="text-gray-400 hover:text-gray-300 w-fit"
          onClick={() => router.back()}
        >
          Cancel
        </button>
        <Title>New Appointment</Title>
        <AppointmentForm onSubmit={onSubmit} customerId={params.id as string} />
      </div>
    </div>
  );
}
