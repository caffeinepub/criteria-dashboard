import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RotateCcw, Search } from "lucide-react";
import { toast } from "sonner";

interface FilterPanelV5Props {
  mode: "users" | "groups";
}

export default function FilterPanelV5({ mode }: FilterPanelV5Props) {
  const handleReset = () => toast.success("Filters reset");
  const handleApply = () => toast.success("Filters applied");

  return (
    <div
      className="bg-white px-4 py-3"
      style={{
        borderBottom: "2px solid oklch(0.78 0.12 178)",
        borderRadius: "0.5rem 0.5rem 0 0",
        boxShadow: "0 2px 8px oklch(0.52 0.18 178 / 0.08)",
      }}
    >
      <div className="flex flex-wrap items-end gap-3">
        {/* Branch */}
        <div className="flex flex-col gap-1">
          <span
            className="text-[10px] font-semibold uppercase tracking-wide"
            style={{ color: "oklch(0.52 0.18 178)" }}
          >
            Branch
          </span>
          <Select defaultValue="blr">
            <SelectTrigger
              className="h-7 text-xs w-24"
              style={{ borderColor: "oklch(0.78 0.12 178)" }}
              data-ocid="v5_filter.branch.select"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="blr">BLR</SelectItem>
              <SelectItem value="mum">MUM</SelectItem>
              <SelectItem value="del">DEL</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Group */}
        <div className="flex flex-col gap-1">
          <span
            className="text-[10px] font-semibold uppercase tracking-wide"
            style={{ color: "oklch(0.52 0.18 178)" }}
          >
            Group
          </span>
          <Select>
            <SelectTrigger
              className="h-7 text-xs w-28"
              style={{ borderColor: "oklch(0.78 0.12 178)" }}
              data-ocid="v5_filter.group.select"
            >
              <SelectValue placeholder="Group" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mtprocess">MTPROCESS</SelectItem>
              <SelectItem value="alpha">ALPHA</SelectItem>
              <SelectItem value="beta">BETA</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Users / SubGroup */}
        <div className="flex flex-col gap-1">
          <span
            className="text-[10px] font-semibold uppercase tracking-wide"
            style={{ color: "oklch(0.52 0.18 178)" }}
          >
            {mode === "users" ? "Users" : "SubGroup"}
          </span>
          <Select>
            <SelectTrigger
              className="h-7 text-xs w-32"
              style={{ borderColor: "oklch(0.78 0.12 178)" }}
              data-ocid="v5_filter.users.select"
            >
              <SelectValue
                placeholder={
                  mode === "users" ? "Select User" : "Select SubGroup"
                }
              />
            </SelectTrigger>
            <SelectContent>
              {mode === "users" ? (
                <>
                  <SelectItem value="chandana">chandana.elukotappa</SelectItem>
                  <SelectItem value="abhishek">abhishek.D</SelectItem>
                  <SelectItem value="amrutha">amrutha</SelectItem>
                </>
              ) : (
                <>
                  <SelectItem value="sg1">SubGroup Alpha</SelectItem>
                  <SelectItem value="sg2">SubGroup Beta</SelectItem>
                  <SelectItem value="sg3">SubGroup Gamma</SelectItem>
                </>
              )}
            </SelectContent>
          </Select>
        </div>

        {/* Product */}
        <div className="flex flex-col gap-1">
          <span
            className="text-[10px] font-semibold uppercase tracking-wide"
            style={{ color: "oklch(0.52 0.18 178)" }}
          >
            Product
          </span>
          <div className="relative">
            <Search
              className="absolute left-2 top-1/2 -translate-y-1/2 w-3 h-3"
              style={{ color: "oklch(0.60 0.10 178)" }}
            />
            <Input
              placeholder="Search…"
              className="h-7 text-xs pl-6 w-28"
              style={{ borderColor: "oklch(0.78 0.12 178)" }}
              data-ocid="v5_filter.product.input"
            />
          </div>
        </div>

        {/* Client */}
        <div className="flex flex-col gap-1">
          <span
            className="text-[10px] font-semibold uppercase tracking-wide"
            style={{ color: "oklch(0.52 0.18 178)" }}
          >
            Client
          </span>
          <Select>
            <SelectTrigger
              className="h-7 text-xs w-36"
              style={{ borderColor: "oklch(0.78 0.12 178)" }}
              data-ocid="v5_filter.client.select"
            >
              <SelectValue placeholder="Select Client" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="c1">First American Title</SelectItem>
              <SelectItem value="c2">Stewart Title</SelectItem>
              <SelectItem value="c3">Old Republic Title</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* State */}
        <div className="flex flex-col gap-1">
          <span
            className="text-[10px] font-semibold uppercase tracking-wide"
            style={{ color: "oklch(0.52 0.18 178)" }}
          >
            State
          </span>
          <Select>
            <SelectTrigger
              className="h-7 text-xs w-28"
              style={{ borderColor: "oklch(0.78 0.12 178)" }}
              data-ocid="v5_filter.state.select"
            >
              <SelectValue placeholder="Select State" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="al">Alabama</SelectItem>
              <SelectItem value="tx">Texas</SelectItem>
              <SelectItem value="md">Maryland</SelectItem>
              <SelectItem value="ca">California</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 ml-auto">
          <Button
            variant="outline"
            size="sm"
            className="h-7 text-xs gap-1"
            style={{
              borderColor: "oklch(0.78 0.12 178)",
              color: "oklch(0.42 0.15 178)",
            }}
            onClick={handleReset}
            data-ocid="v5_filter.reset.button"
          >
            <RotateCcw className="w-3 h-3" />
            Reset
          </Button>
          <Button
            size="sm"
            className="h-7 text-xs text-white border-0"
            style={{ background: "oklch(0.52 0.18 178)" }}
            onClick={handleApply}
            data-ocid="v5_filter.apply.button"
          >
            Apply
          </Button>
        </div>
      </div>
    </div>
  );
}
