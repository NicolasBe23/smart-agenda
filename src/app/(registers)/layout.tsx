import { GoBackButton } from "@/components/ui/go-back-button";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-11/12 max-w-7xl mx-auto py-6">
      <GoBackButton />
      {children}
    </div>
  );
}
