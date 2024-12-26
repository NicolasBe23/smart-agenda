import { Topbar } from "./topbar";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="w-full min-h-screen flex items-center flex-col gap-6 ">
      <Topbar />
      {children}
    </div>
  );
}
