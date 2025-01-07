import { CustomerInfo } from "@/components/ui/customer-info";
import { AppointmentList } from "./appointment-list";

interface PageProps {
  params: { id: string };
}

export default async function Customer({ params }: PageProps) {
  const { id } = await params;
  return (
    <div className="w-full flex flex-col gap-12">
      <CustomerInfo id={id} />
      <AppointmentList customerId={id} />
    </div>
  );
}
