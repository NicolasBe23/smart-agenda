"use client";
import { CustomerForm } from "@/components/forms/customer-form";
import { Title } from "@/components/ui/title";
import type { Customer } from "@/entities/customer";

export default function Page() {
  function onSubmit(customer: Customer) {
    console.log(customer);
  }
  return (
    <div className="w-full border border-gray-700 bg-gray-950 p-6 rounded-md shadow-md flex flex-col  gap-6 ">
      <Title>Novo Cliente</Title>
      <CustomerForm onSubmit={onSubmit} />
    </div>
  );
}
