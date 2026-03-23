import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Info, RotateCcw, Save } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface BasicFiltersV5Props {
  mode: "users" | "groups";
}

const ORDER_STATUS_OPTIONS = [
  { value: "RECEIVED", label: "RECEIVED" },
  { value: "RE-PROCESS", label: "RE-PROCESS" },
  { value: "BATCH ORDERS", label: "BATCH ORDERS" },
];

function RequiredLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-0.5 mb-1">
      <span
        className="text-[11px] font-semibold uppercase tracking-wide"
        style={{ color: "oklch(0.32 0.10 178)" }}
      >
        {children}
      </span>
      <span
        className="text-[11px] font-bold"
        style={{ color: "oklch(0.52 0.22 25)" }}
      >
        *
      </span>
    </div>
  );
}

export default function BasicFiltersV5({ mode }: BasicFiltersV5Props) {
  const [branch, setBranch] = useState("");
  const [group, setGroup] = useState("");
  const [users, setUsers] = useState("");
  const [orderStatus, setOrderStatus] = useState<string[]>([]);

  const toggleStatus = (val: string) => {
    setOrderStatus((prev) =>
      prev.includes(val) ? prev.filter((s) => s !== val) : [...prev, val],
    );
  };

  const handleReset = () => {
    setBranch("");
    setGroup("");
    setUsers("");
    setOrderStatus([]);
    toast("Filters reset");
  };

  const handleSave = () => toast.success("Criteria saved successfully");

  return (
    <div
      className="bg-white rounded-xl overflow-hidden"
      style={{
        border: "1px solid oklch(0.82 0.10 178)",
        boxShadow: "0 2px 8px oklch(0.52 0.18 178 / 0.10)",
      }}
      data-ocid="v5_basic_filters.panel"
    >
      {/* Note bar */}
      <div
        className="flex items-center gap-2 px-4 py-2"
        style={{
          background: "oklch(0.94 0.06 178)",
          borderBottom: "1px solid oklch(0.85 0.10 178)",
        }}
      >
        <Info
          className="w-3.5 h-3.5 shrink-0"
          style={{ color: "oklch(0.42 0.18 178)" }}
        />
        <span
          className="text-[11px] font-medium"
          style={{ color: "oklch(0.30 0.12 178)" }}
        >
          Note: Select At least one product, client, state
        </span>
      </div>

      <div className="px-4 py-3 space-y-3">
        {/* Row 1: Branch, Group, Users/SubGroup */}
        <div className="flex flex-wrap gap-x-4 gap-y-2 items-end">
          <div className="flex flex-col">
            <RequiredLabel>Branch</RequiredLabel>
            <Select value={branch} onValueChange={setBranch}>
              <SelectTrigger
                className="h-8 text-xs w-28"
                data-ocid="v5_basic_filters.branch.select"
              >
                <SelectValue placeholder="Select Branch" />
              </SelectTrigger>
              <SelectContent>
                {["BLR", "MUM", "DEL", "HYD", "CHE"].map((b) => (
                  <SelectItem key={b} value={b}>
                    {b}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col">
            <RequiredLabel>Group</RequiredLabel>
            <Select value={group} onValueChange={setGroup}>
              <SelectTrigger
                className="h-8 text-xs w-32"
                data-ocid="v5_basic_filters.group.select"
              >
                <SelectValue placeholder="Select Group" />
              </SelectTrigger>
              <SelectContent>
                {["MTPROCESS", "ALPHA", "BETA", "GAMMA"].map((g) => (
                  <SelectItem key={g} value={g}>
                    {g}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col">
            <RequiredLabel>
              {mode === "users" ? "Users" : "SubGroup"}
            </RequiredLabel>
            <Select value={users} onValueChange={setUsers}>
              <SelectTrigger
                className="h-8 text-xs w-36"
                data-ocid="v5_basic_filters.users.select"
              >
                <SelectValue
                  placeholder={
                    mode === "users" ? "Select Users" : "Select SubGroup"
                  }
                />
              </SelectTrigger>
              <SelectContent>
                {mode === "users" ? (
                  <>
                    <SelectItem value="ravi">Ravi Kumar</SelectItem>
                    <SelectItem value="priya">Priya Nair</SelectItem>
                    <SelectItem value="arun">Arun Singh</SelectItem>
                    <SelectItem value="amrutha">Amrutha</SelectItem>
                  </>
                ) : (
                  <>
                    <SelectItem value="sg1">SG-Alpha</SelectItem>
                    <SelectItem value="sg2">SG-Beta</SelectItem>
                    <SelectItem value="sg3">SG-Gamma</SelectItem>
                  </>
                )}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Row 2: Order Status */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 items-start">
          <div className="flex flex-col">
            <RequiredLabel>Order Status</RequiredLabel>
            <div
              className="flex items-center gap-4 px-3 py-2 rounded-lg"
              style={{ border: "1px solid oklch(0.78 0.12 178)" }}
            >
              {ORDER_STATUS_OPTIONS.map((opt) => (
                <div
                  key={opt.value}
                  className="flex items-center gap-1.5 cursor-pointer"
                >
                  <Checkbox
                    checked={orderStatus.includes(opt.value)}
                    onCheckedChange={() => toggleStatus(opt.value)}
                    className="w-3.5 h-3.5"
                    data-ocid={`v5_basic_filters.status_${opt.value.toLowerCase().replace(/[^a-z0-9]+/g, "_")}.checkbox`}
                  />
                  <span
                    className="text-xs font-medium"
                    style={{ color: "oklch(0.32 0.10 178)" }}
                  >
                    {opt.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-2 pt-1">
          <Button
            variant="ghost"
            size="sm"
            className="h-8 text-xs gap-1.5"
            style={{ color: "oklch(0.45 0.08 178)" }}
            onClick={handleReset}
            data-ocid="v5_basic_filters.reset.button"
          >
            <RotateCcw className="w-3 h-3" />
            Reset
          </Button>
          <Button
            size="sm"
            className="h-8 text-xs text-white border-0 gap-1.5"
            style={{ background: "oklch(0.52 0.18 178)" }}
            onClick={handleSave}
            data-ocid="v5_basic_filters.save.button"
          >
            <Save className="w-3 h-3" />
            Save
          </Button>
        </div>
      </div>

      {/* Bottom note */}
      <div
        className="flex items-center gap-2 px-4 py-2"
        style={{
          background: "oklch(0.96 0.04 55)",
          borderTop: "1px solid oklch(0.90 0.06 55)",
        }}
      >
        <Info
          className="w-3.5 h-3.5 shrink-0"
          style={{ color: "oklch(0.52 0.18 55)" }}
        />
        <span className="text-[10px]" style={{ color: "oklch(0.40 0.08 55)" }}>
          Note: If the status is &quot;Hold&quot;, it indicates that the
          criteria is currently on hold and cannot be used for processing
          orders.
        </span>
      </div>
    </div>
  );
}
