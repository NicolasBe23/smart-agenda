"use client";

import { AppointmentForm } from "@/components/forms/appointment-form";
import { CustomerInfo } from "@/components/ui/customer-info";
import { Title } from "@/components/ui/title";
import { useDatabase } from "@/database/db";
import { Appointment } from "@/entities/appointment";
import { useParams, useRouter } from "next/navigation";

export default function EditAppointment() {
  const params = useParams();
  const router = useRouter();
  const { getAppointment, updateAppointment } = useDatabase();

  const appointmentId = params.id as string;
  const appointment = getAppointment(appointmentId);

  function onSubmit(newValues: Appointment) {
    updateAppointment(appointmentId, newValues);
    router.push(`/customers/${appointment?.customerId}`);
  }

  if (!appointment) return null;

  return (
    <div className="flex flex-col gap-4">
      <CustomerInfo id={appointment.customerId} />
      <div className="border border-gray-700 bg-gray-950 p-6 rounded-md shadow-md flex flex-col gap-6 ">
        <Title>Edit Appointment</Title>
        <AppointmentForm
          onSubmit={onSubmit}
          defaultValues={appointment}
          customerId={appointment.customerId}
        />
      </div>
    </div>
  );
}
