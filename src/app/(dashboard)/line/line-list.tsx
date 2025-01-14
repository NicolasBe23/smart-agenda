"use client";

import { Button } from "@/components/ui/button";
import { useDatabase } from "@/database/db";
import { useRouter } from "next/navigation";

export function LineList() {
  const router = useRouter();
  const { customers, removeCustomerFromLine } = useDatabase();
  const customersInLine = customers.filter((customer) => customer.inLine);
  const isEmptyLine = customersInLine.length === 0;

  function handleRemoveCustomerFromLine(customerId: string) {
    removeCustomerFromLine(customerId);
  }

  return (
    <div className="w-full shadow-md bg-gray-950 rounded-md p-2 px-4 border border-gray-700">
      {isEmptyLine ? (
        <div className="w-full flex justify-center items-center p-6">
          <p className="text-gray-400">No customers in line</p>
        </div>
      ) : (
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-center">Position</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {customersInLine.map((customer, index) => (
              <tr className="border-b border-gray-700" key={customer.id}>
                <td
                  className="text-left p-2 cursor-pointer"
                  onClick={() =>
                    router.push(`customers/${customer.id}/add-appointment`)
                  }
                >
                  {customer.name}
                </td>
                <td className="p-2 text-center">{index + 1}</td>
                <td className="p-2 flex justify-end items-center">
                  <Button
                    onClick={() => handleRemoveCustomerFromLine(customer.id)}
                  >
                    Remove from line
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
