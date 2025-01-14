"use client";

import { CustomerForm } from "@/components/forms/customer-form";
import { Title } from "@/components/ui/title";
import { useDatabase } from "@/database/db";
import type { Customer } from "@/entities/customer";
import { useParams, useRouter } from "next/navigation";

export default function EditCustomer() {
  const params = useParams();
  const router = useRouter();
  const { getCustomer, updateCustomer } = useDatabase();

  const customerId = params.id as string;
  const customer = getCustomer(customerId);

  function onSubmit(newValues: Customer) {
    updateCustomer(customerId, newValues);
    router.push(`/customers/${customerId}`);
  }

  return (
    <div className="w-full border border-gray-700 bg-gray-950 p-6 rounded-md shadow-md flex flex-col gap-6 ">
      <Title>Editar Cliente</Title>
      <CustomerForm onSubmit={onSubmit} defaultValues={customer} />
    </div>
  );
}
