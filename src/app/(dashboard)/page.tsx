import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Customers() {
  return (
    <div className="w-11/12 max-w-7xl">
      <div className="flex w-full items-center gap-4 justify-between">
        <Input className="w-full max-w-lg" placeholder="Pesquisar..." />
        <Link href="/customers/new">
          <Button>Novo Cliente</Button>
        </Link>
      </div>
    </div>
  );
}
