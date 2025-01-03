"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useDatabase } from "@/database/db";
import { Customer } from "@/entities/customer";
import { useState } from "react";

export default function Customers() {
  const router = useRouter();
  const { customers } = useDatabase();
  const [search, setSearch] = useState("");

  const filteredCustomers = customers.filter((c) =>
    c.name.toLowerCase().startsWith(search.toLowerCase())
  );

  const isThereAnyCustomers = filteredCustomers.length > 0;

  return (
    <div className="w-11/12 max-w-7xl">
      <div className="flex w-full items-center gap-4 justify-between">
        <Input
          className="w-full max-w-lg"
          placeholder="Pesquisar..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button onClick={() => router.push("/customers/new")}>
          Novo Cliente
        </Button>
      </div>

      {isThereAnyCustomers ? (
        <div className="w-full flex gap-4 flex-wrap mt-8">
          {filteredCustomers.map((c) => (
            <CustomerCard key={c.id} customer={c} />
          ))}
        </div>
      ) : (
        <div className="w-full flex justify-center items-center mt-8">
          <p className="text-gray-400">Nenhum cliente encontrado {search}</p>
        </div>
      )}
    </div>
  );
}

function CustomerCard({ customer }: { customer: Customer }) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(`/customers/${customer.id}`)}
      className="w-full max-w-sm bg-gray-950 rounded-md p-2 border border-gray-700"
    >
      <div className="p-2 border-b border-gray-700 flex justify-between items-center">
        <span>Nome</span>
        <span>{customer.name}</span>
      </div>
      <div className="p-2 border-b border-gray-700 flex justify-between items-center">
        <span>Idade</span>
        <span>{customer.age}</span>
      </div>
      <div className="p-2  flex justify-between items-center">
        <span>Endereço</span>
        <span>{customer.address}</span>
      </div>
    </button>
  );
}
