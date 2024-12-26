export function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="text-gray-100 flex flex-col gap-2">{children}</label>
  );
}
