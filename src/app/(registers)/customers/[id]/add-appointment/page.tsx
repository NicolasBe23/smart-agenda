import { useDatabase } from "@/database/db";
import { useRouter } from "next/router";
import { AppointmentForm } from "@/components/forms/appointment-form";
import { Appointment } from "@/entities/appointment";
import { Title } from "@/components/ui/title";

export default function Page() {
  const router = useRouter();
  const { createAppointment } = useDatabase();
  function onSubmit(appointment: Appointment) {
    const customerId = router.query.id as string;
    const newAppointment = createAppointment(appointment, customerId);
    router.push(`/customers/${customerId}/appointments/${newAppointment}`);
  }

  return (
    <div className="w-full border border-gray-700 bg-gray-950 p-6 rounded-md shadow-md flex flex-col  gap-6 ">
      <Title>Novo Agendamento</Title>
      <AppointmentForm
        onSubmit={onSubmit}
        customerId={router.query.id as string}
      />
    </div>
  );
}
