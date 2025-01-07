import { CustomerInfo } from "@/components/ui/customer-info";
import { AppointmentList } from "./appointment-list";

interface PageProps {
  params: { id: string };
}

export default async function Customer({ params }: PageProps) {
  const { id } = await params;

  return (
    <div className="flex flex-col gap-12 w-full">
      <CustomerInfo id={id} />
      <AppointmentList customerId={id} />
    </div>
  );
}
