import { Title } from "@/components/ui/title";
import { LineList } from "./line-list";

export default function Line() {
  return (
    <div className="flex flex-col gap-4 w-11/12 max-w-7xl">
      <Title>Line</Title>
      <LineList />
    </div>
  );
}
