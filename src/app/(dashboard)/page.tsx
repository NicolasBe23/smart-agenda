"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
export default function Customers() {
  const router = useRouter();
  return (
    <div className="w-11/12 max-w-7xl">
      <div className="flex w-full items-center gap-4 justify-between">
        <Input className="w-full max-w-lg" placeholder="Pesquisar..." />
        <Button onClick={() => router.push("/customers/new")}>
          Novo Cliente
        </Button>
      </div>
    </div>
  );
}
