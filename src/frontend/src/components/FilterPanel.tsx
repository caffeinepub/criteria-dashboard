import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { History, RotateCcw, Save } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface FilterPanelProps {
  mode: "users" | "groups";
}

const FILE_ORDER_TYPES = [
  { value: "priority", label: "Priority" },
  { value: "rush", label: "Rush" },
  { value: "select", label: "Select" },
  { value: "due_date", label: "Due Date" },
  { value: "promised_date", label: "Promised Date" },
];

const ORDER_STATUSES = ["RECEIVED", "RE-PROCESS", "BATCH ORDERS"];

export default function FilterPanel({ mode }: FilterPanelProps) {
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([
    "RECEIVED",
  ]);
  const [excludeProduct, setExcludeProduct] = useState(false);
  const [excludeClient, setExcludeClient] = useState(false);
  const [excludeState, setExcludeState] = useState(false);
  const [excludeCounty, setExcludeCounty] = useState(false);

  const toggleStatus = (s: string) =>
    setSelectedStatuses((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s],
    );

  const handleReset = () => {
    setSelectedStatuses(["RECEIVED"]);
    setExcludeProduct(false);
    setExcludeClient(false);
    setExcludeState(false);
    setExcludeCounty(false);
    toast.success("Filters reset");
  };

  const handleSave = () => toast.success("Filters saved successfully");

  return (
    <div
      className="clean-card rounded-xl p-3.5"
      style={{
        borderLeft: "3px solid oklch(0.52 0.18 178)",
        background:
          "linear-gradient(to right, oklch(0.97 0.025 178), white 30%)",
      }}
    >
      {/* Row 1: dropdowns */}
      <div className="grid grid-cols-4 xl:grid-cols-8 gap-2.5 mb-3">
        <FilterField label="Branch *">
          <Select defaultValue="blr">
            <SelectTrigger
              data-ocid="filter.branch.select"
              className="h-7 text-xs rounded-full"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="blr">BLR</SelectItem>
              <SelectItem value="mum">MUM</SelectItem>
              <SelectItem value="del">DEL</SelectItem>
            </SelectContent>
          </Select>
        </FilterField>

        <FilterField label="Group *">
          <Select defaultValue="mtprocess">
            <SelectTrigger
              data-ocid="filter.group.select"
              className="h-7 text-xs rounded-full"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mtprocess">MTPROCESS</SelectItem>
              <SelectItem value="alpha">ALPHA</SelectItem>
              <SelectItem value="beta">BETA</SelectItem>
            </SelectContent>
          </Select>
        </FilterField>

        <FilterField label={mode === "users" ? "Users *" : "SubGroup *"}>
          <Select>
            <SelectTrigger
              data-ocid="filter.users.select"
              className="h-7 text-xs rounded-full"
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
                  <SelectItem value="chandana">chandana.elukotappa</SelectItem>
                  <SelectItem value="abhishek">abhishek.D</SelectItem>
                  <SelectItem value="amrutha">amrutha</SelectItem>
                  <SelectItem value="amjad">amjad.khan</SelectItem>
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
        </FilterField>

        <FilterField
          label="Product"
          extra={
            <ExcludeToggle
              active={excludeProduct}
              onChange={setExcludeProduct}
              label="Exclude"
            />
          }
        >
          <Select>
            <SelectTrigger
              data-ocid="filter.product.select"
              className="h-7 text-xs rounded-full"
            >
              <SelectValue placeholder="Select Product" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10year">10 YEAR SEARCH</SelectItem>
              <SelectItem value="20year">20 YEAR SEARCH</SelectItem>
              <SelectItem value="realestate">180 Real Estate</SelectItem>
            </SelectContent>
          </Select>
        </FilterField>

        <FilterField
          label="Client"
          extra={
            <ExcludeToggle
              active={excludeClient}
              onChange={setExcludeClient}
              label="Exclude"
            />
          }
        >
          <Select>
            <SelectTrigger
              data-ocid="filter.client.select"
              className="h-7 text-xs rounded-full"
            >
              <SelectValue placeholder="Select Client" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="c1">First American Title</SelectItem>
              <SelectItem value="c2">Stewart Title</SelectItem>
              <SelectItem value="c3">Old Republic Title</SelectItem>
            </SelectContent>
          </Select>
        </FilterField>

        <FilterField
          label="State"
          extra={
            <ExcludeToggle
              active={excludeState}
              onChange={setExcludeState}
              label="Exclude"
            />
          }
        >
          <Select>
            <SelectTrigger
              data-ocid="filter.state.select"
              className="h-7 text-xs rounded-full"
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
        </FilterField>

        <FilterField
          label="County"
          extra={
            <ExcludeToggle
              active={excludeCounty}
              onChange={setExcludeCounty}
              label="Exclude"
            />
          }
        >
          <Select>
            <SelectTrigger
              data-ocid="filter.county.select"
              className="h-7 text-xs rounded-full"
            >
              <SelectValue placeholder="Select County" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="montgomery">Montgomery</SelectItem>
              <SelectItem value="harris">Harris</SelectItem>
              <SelectItem value="jefferson">Jefferson</SelectItem>
            </SelectContent>
          </Select>
        </FilterField>

        <FilterField label="File Order Type">
          <Select>
            <SelectTrigger
              data-ocid="filter.fileordertype.select"
              className="h-7 text-xs rounded-full"
            >
              <SelectValue placeholder="Select Type" />
            </SelectTrigger>
            <SelectContent>
              {FILE_ORDER_TYPES.map((t) => (
                <SelectItem key={t.value} value={t.value}>
                  {t.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FilterField>
      </div>

      {/* Divider */}
      <div
        className="h-px mb-3"
        style={{ background: "oklch(0.88 0.02 185)" }}
      />

      {/* Row 2: statuses + sub status + actions — single horizontal line */}
      <div className="flex flex-wrap items-end gap-3">
        <div>
          <Label className="text-[10px] font-semibold uppercase tracking-widest mb-1.5 block text-muted-foreground">
            Order Status *
          </Label>
          <div className="flex gap-1.5">
            {ORDER_STATUSES.map((s) => (
              <button
                key={s}
                type="button"
                className="pill-toggle"
                data-active={selectedStatuses.includes(s) ? "true" : "false"}
                onClick={() => toggleStatus(s)}
                data-ocid={`filter.status.${s.toLowerCase().replace(/[^a-z0-9]/g, "")}.checkbox`}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    background: selectedStatuses.includes(s)
                      ? "oklch(0.52 0.18 178)"
                      : "oklch(0.72 0.02 200)",
                    transition: "background-color 0.15s ease-out",
                  }}
                />
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="w-40">
          <Label className="text-[10px] font-semibold uppercase tracking-widest mb-1.5 block text-muted-foreground">
            Sub Status
          </Label>
          <Select>
            <SelectTrigger
              data-ocid="filter.substatus.select"
              className="h-7 text-xs rounded-full"
            >
              <SelectValue placeholder="Select Sub Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="inprogress">In Progress</SelectItem>
              <SelectItem value="review">Under Review</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Action buttons */}
        <div className="ml-auto flex items-center gap-1.5">
          <Button
            variant="ghost"
            size="sm"
            className="gap-1.5 text-xs h-7 rounded-full border"
            style={{
              borderColor: "oklch(0.85 0.02 185)",
              color: "oklch(0.52 0.02 200)",
              transition:
                "background-color 0.15s ease-out, color 0.15s ease-out",
            }}
            data-ocid="filter.workhistory.button"
          >
            <History className="w-3.5 h-3.5" />
            View Work History
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="gap-1.5 text-xs h-7 rounded-full border"
            style={{
              borderColor: "oklch(0.85 0.02 185)",
              color: "oklch(0.52 0.02 200)",
              transition:
                "background-color 0.15s ease-out, color 0.15s ease-out",
            }}
            onClick={handleReset}
            data-ocid="filter.reset.button"
          >
            <RotateCcw className="w-3 h-3" />
            Reset
          </Button>
          <Button
            size="sm"
            className="gap-1.5 text-xs h-7 text-white border-0 rounded-full primary-btn"
            onClick={handleSave}
            data-ocid="filter.save.button"
          >
            <Save className="w-3 h-3" />
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}

function FilterField({
  label,
  children,
  extra,
}: {
  label: string;
  children: React.ReactNode;
  extra?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between">
        <Label className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          {label}
        </Label>
        {extra}
      </div>
      {children}
    </div>
  );
}

function ExcludeToggle({
  active,
  onChange,
  label,
}: {
  active: boolean;
  onChange: (v: boolean) => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!active)}
      className="text-[9px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded-full"
      style={{
        transition:
          "background-color 0.15s ease-out, color 0.15s ease-out, border-color 0.15s ease-out",
        ...(active
          ? {
              background: "oklch(0.93 0.06 25)",
              color: "oklch(0.48 0.2 25)",
              border: "1px solid oklch(0.8 0.12 25)",
            }
          : {
              background: "oklch(0.95 0.005 185)",
              color: "oklch(0.5 0.02 200)",
              border: "1px solid oklch(0.88 0.02 185)",
            }),
      }}
    >
      {label}
    </button>
  );
}
