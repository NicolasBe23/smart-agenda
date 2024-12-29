"use client";
import { CustomerForm } from "@/components/forms/customer-form";
import { Title } from "@/components/ui/title";
import { useDatabase } from "@/database/db";
import type { Customer } from "@/entities/customer";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const { createCustomer } = useDatabase();
  function onSubmit(customer: Customer) {
    const customerId = Math.random().toString();
    createCustomer({ ...customer, id: customerId });
    router.push(`/customers/${customerId}`);
  }
  return (
    <div className="w-full border border-gray-700 bg-gray-950 p-6 rounded-md shadow-md flex flex-col  gap-6 ">
      <Title>Novo Cliente</Title>
      <CustomerForm onSubmit={onSubmit} />
    </div>
  );
}
