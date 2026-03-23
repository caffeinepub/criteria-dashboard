import FilterPanel from "@/components/FilterPanel";
import OrderTable from "@/components/OrderTable";
import SummaryCards from "@/components/SummaryCards";

interface OrderTabProps {
  mode: "users" | "groups";
}

export default function OrderTab({ mode }: OrderTabProps) {
  return (
    <div className="space-y-4">
      <FilterPanel mode={mode} />
      <SummaryCards />
      <OrderTable />
    </div>
  );
}
