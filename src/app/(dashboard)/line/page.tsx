"use client";

import { Customer } from "@/entities/customer";
import { useDatabase } from "@/database/db";

export default function Customers() {
  const { customers } = useDatabase();

  return (
    <div className="w-full flex flex-col gap-4">
      {customers.map((c) => (
        <CustomerLine key={c.id} customer={c} />
      ))}
    </div>
  );
}

function CustomerLine({ customer }: { customer: Customer }) {
  return (
    <div className="w-full bg-gray-950 rounded-md p-2 border border-gray-700">
      <div className="p-2 border-b border-gray-700 flex justify-between items-center">
        <span>Name</span>
        <span>{customer.name}</span>
      </div>
    </div>
  );
}
