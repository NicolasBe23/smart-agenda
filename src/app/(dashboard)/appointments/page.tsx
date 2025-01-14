import { Title } from "@/components/ui/title";
import { AppointmentList } from "./appointment-list";

export default function Appointments() {
  return (
    <div className="flex flex-col gap-4 w-11/12 max-w-7xl">
      <Title>Appointments</Title>
      <AppointmentList />
    </div>
  );
}
