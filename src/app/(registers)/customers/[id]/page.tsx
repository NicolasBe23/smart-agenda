import { CustomerInfo } from "@/components/ui/customer-info";

interface PageProps {
  params: { id: string };
}

export default async function Customer({ params }: PageProps) {
  const { id } = await params;
  return (
    <div>
      <CustomerInfo id={id} />
    </div>
  );
}
