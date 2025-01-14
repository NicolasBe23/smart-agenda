"use client";

import { useDatabase } from "@/database/db";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "./button";
import { useRouter } from "next/navigation";

interface Props {
  id: string;
}

export function CustomerInfo({ id }: Props) {
  const router = useRouter();
  const { getCustomer, deleteCustomer } = useDatabase();
  const customer = getCustomer(id);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const handleDeleteCustomer = (customerId: string) => {
    deleteCustomer(customerId);

    router.push("/");
  };

  return (
    <div className="w-full shadow-md bg-gray-950 rounded-md px-2 border border-gray-700">
      <div className="p-2 border-b border-gray-700 flex justify-between items-center">
        <span>Name:</span>
        <span>{customer?.name}</span>
      </div>
      <div className="p-2 border-b border-gray-700 flex justify-between items-center">
        <span>Age:</span>
        <span>{customer?.age}</span>
      </div>
      <div className="p-2 flex border-b border-gray-700 justify-between items-center">
        <span>Address:</span>
        <span>{customer?.address}</span>
      </div>
      <div className="p-2 flex border-b border-gray-700 justify-between items-center">
        <span>NIF:</span>
        <span>{customer?.nif}</span>
      </div>
      <div className="p-2 flex border-b border-gray-700 justify-between items-center">
        <span>Phone:</span>
        <span>{customer?.phone}</span>
      </div>
      <div className="p-2 flex justify-between items-center">
        <span>Email:</span>
        <span>{customer?.email}</span>
      </div>
      <div className="p-2 flex justify-end items-center gap-2">
        <Button>Add to Line</Button>
        <Button onClick={() => handleDeleteCustomer(id)}>Delete</Button>
        <Button onClick={() => router.push(`/customers/${id}/edit`)}>
          Edit
        </Button>
      </div>
    </div>
  );
}
