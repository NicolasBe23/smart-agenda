import { CustomerInfo } from "@/components/ui/customerInfo";

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
