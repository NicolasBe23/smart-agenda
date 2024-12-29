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
  const [search, setSearch] = useState(""); // Estado para a busca

  // Filtra os clientes pelo nome
  const filteredCustomers = customers.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-11/12 max-w-7xl">
      <div className="flex w-full items-center gap-4 justify-between">
        <Input
          className="w-full max-w-lg"
          placeholder="Pesquisar..."
          value={search} // Conecta o estado ao input
          onChange={(e) => setSearch(e.target.value)} // Atualiza o estado
        />
        <Button onClick={() => router.push("/customers/new")}>
          Novo Cliente
        </Button>
      </div>

      <div className="w-full flex gap-4 flex-wrap mt-8">
        {filteredCustomers.map((c) => (
          <CustomerCard key={c.id} customer={c} />
        ))}
      </div>
    </div>
  );
}

function CustomerCard({ customer }: { customer: Customer }) {
  return (
    <div className="w-full max-w-sm bg-gray-950 rounded-md p-2 border border-gray-700">
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
    </div>
  );
}
