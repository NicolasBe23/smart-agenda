"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Topbar() {
  return (
    <div className="h-14 w-full border-b border-gray-700 flex items-center justify-center gap-6 bg-gray-950">
      <NavItem href="/">Clients</NavItem>
      <NavItem href="/line">Line</NavItem>
      <NavItem href="/appointments">Consultas</NavItem>
    </div>
  );
}

interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

function NavItem({ href, children }: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      data-active={isActive}
      className="text-gray-400 hover:text-white data-[active=true]:text-white border-b data-[active=true]:border-white border-transparent px-2 duration-200"
    >
      {children}
    </Link>
  );
}
