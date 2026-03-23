import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ChevronDown,
  ChevronLeft,
  Filter,
  Plus,
  RotateCcw,
  Save,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface FilterSidebarProps {
  mode: "users" | "groups";
}

const ORDER_STATUS_OPTIONS = [
  { value: "RECEIVED", label: "RECEIVED" },
  { value: "RE-PROCESS", label: "RE-PROCESS" },
  { value: "BATCH ORDERS", label: "BATCH ORDERS" },
];

export default function FilterSidebar({ mode }: FilterSidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [basicExpanded, setBasicExpanded] = useState(true);
  const [optionalExpanded, setOptionalExpanded] = useState(false);
  const [orderStatus, setOrderStatus] = useState<string[]>([]);
  // optional filter states
  const [client, setClient] = useState("");
  const [clientExclude, setClientExclude] = useState(false);
  const [product, setProduct] = useState("");
  const [productExclude, setProductExclude] = useState(false);
  const [stateVal, setStateVal] = useState("");
  const [stateExclude, setStateExclude] = useState(false);
  const [county, setCounty] = useState("");
  const [countyExclude, setCountyExclude] = useState(false);
  const [fileOrderType, setFileOrderType] = useState("");
  const [paidSite, setPaidSite] = useState("");

  const toggleStatus = (val: string) =>
    setOrderStatus((prev) =>
      prev.includes(val) ? prev.filter((s) => s !== val) : [...prev, val],
    );

  const handleReset = () => {
    setOrderStatus([]);
    setClient("");
    setClientExclude(false);
    setProduct("");
    setProductExclude(false);
    setStateVal("");
    setStateExclude(false);
    setCounty("");
    setCountyExclude(false);
    setFileOrderType("");
    setPaidSite("");
    toast.success("Filters reset");
  };
  const handleSave = () => toast.success("Filters saved");

  if (collapsed) {
    return (
      <div
        className="flex flex-col shrink-0 w-7 h-full border-r items-center pt-3"
        style={{ background: "white", borderColor: "oklch(0.90 0.01 240)" }}
      >
        <button
          type="button"
          onClick={() => setCollapsed(false)}
          className="w-5 h-5 flex items-center justify-center rounded hover:bg-gray-100 transition-colors"
          style={{ color: "oklch(0.55 0.02 240)" }}
          data-ocid="filter_sidebar.expand.button"
        >
          <ChevronDown className="w-3.5 h-3.5 -rotate-90" />
        </button>
      </div>
    );
  }

  return (
    <div
      className="flex flex-col shrink-0 w-52 h-full border-r overflow-y-auto"
      style={{
        background: "white",
        borderColor: "oklch(0.90 0.01 240)",
        minWidth: "208px",
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-3 py-2.5 shrink-0"
        style={{ borderBottom: "1px solid oklch(0.92 0.01 240)" }}
      >
        <span
          className="text-sm font-semibold"
          style={{ color: "oklch(0.25 0.04 245)" }}
        >
          Filters
        </span>
        <button
          type="button"
          onClick={() => setCollapsed(true)}
          className="w-5 h-5 flex items-center justify-center rounded hover:bg-gray-100 transition-colors"
          style={{ color: "oklch(0.55 0.02 240)" }}
          data-ocid="filter_sidebar.collapse.button"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Basic Filters */}
      <div style={{ borderBottom: "1px solid oklch(0.93 0.01 240)" }}>
        <button
          type="button"
          className="w-full flex items-center justify-between px-3 py-2 transition-colors hover:bg-gray-50"
          onClick={() => setBasicExpanded((p) => !p)}
          data-ocid="filter_sidebar.basic_filters.toggle"
        >
          <span
            className="text-xs font-semibold"
            style={{ color: "oklch(0.35 0.04 245)" }}
          >
            Basic Filters
          </span>
          <ChevronDown
            className={`w-3 h-3 transition-transform duration-200 ${basicExpanded ? "" : "-rotate-90"}`}
            style={{ color: "oklch(0.55 0.02 240)" }}
          />
        </button>

        {basicExpanded && (
          <div className="px-3 pb-3 space-y-2.5">
            {/* Branch */}
            <div>
              <Label
                className="text-[10px] font-medium mb-1 block"
                style={{ color: "oklch(0.52 0.03 240)" }}
              >
                Branch <span style={{ color: "oklch(0.52 0.22 25)" }}>*</span>
              </Label>
              <Select defaultValue="blr">
                <SelectTrigger
                  className="h-7 text-xs"
                  data-ocid="filter.branch.select"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="blr">BLR</SelectItem>
                  <SelectItem value="mum">MUM</SelectItem>
                  <SelectItem value="del">DEL</SelectItem>
                  <SelectItem value="hyd">HYD</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Group */}
            <div>
              <Label
                className="text-[10px] font-medium mb-1 block"
                style={{ color: "oklch(0.52 0.03 240)" }}
              >
                Group <span style={{ color: "oklch(0.52 0.22 25)" }}>*</span>
              </Label>
              <Select>
                <SelectTrigger
                  className="h-7 text-xs"
                  data-ocid="filter.group.select"
                >
                  <SelectValue placeholder="Select Group" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mtprocess">MTPROCESS</SelectItem>
                  <SelectItem value="alpha">ALPHA</SelectItem>
                  <SelectItem value="beta">BETA</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Users / SubGroup */}
            <div>
              <Label
                className="text-[10px] font-medium mb-1 block"
                style={{ color: "oklch(0.52 0.03 240)" }}
              >
                {mode === "users" ? "Users" : "SubGroup"}{" "}
                <span style={{ color: "oklch(0.52 0.22 25)" }}>*</span>
              </Label>
              <Select>
                <SelectTrigger
                  className="h-7 text-xs"
                  data-ocid="filter.users.select"
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
                      <SelectItem value="chandana">
                        chandana.elukotappa
                      </SelectItem>
                      <SelectItem value="abhishek">abhishek.D</SelectItem>
                      <SelectItem value="amrutha">amrutha</SelectItem>
                    </>
                  ) : (
                    <>
                      <SelectItem value="sg1">SubGroup Alpha</SelectItem>
                      <SelectItem value="sg2">SubGroup Beta</SelectItem>
                    </>
                  )}
                </SelectContent>
              </Select>
            </div>

            {/* Order Status */}
            <div>
              <Label
                className="text-[10px] font-medium mb-1.5 block"
                style={{ color: "oklch(0.52 0.03 240)" }}
              >
                Order Status{" "}
                <span style={{ color: "oklch(0.52 0.22 25)" }}>*</span>
              </Label>
              <div className="space-y-1.5">
                {ORDER_STATUS_OPTIONS.map((opt) => (
                  <div
                    key={opt.value}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <Checkbox
                      checked={orderStatus.includes(opt.value)}
                      onCheckedChange={() => toggleStatus(opt.value)}
                      className="w-3.5 h-3.5"
                      data-ocid={`filter.status_${opt.value.toLowerCase().replace(/[^a-z0-9]+/g, "_")}.checkbox`}
                    />
                    <span
                      className="text-[11px] font-medium"
                      style={{ color: "oklch(0.35 0.05 245)" }}
                    >
                      {opt.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Optional Filters */}
      <div style={{ borderBottom: "1px solid oklch(0.93 0.01 240)" }}>
        <button
          type="button"
          className="w-full flex items-center gap-1.5 px-3 py-2 transition-colors hover:bg-gray-50"
          onClick={() => setOptionalExpanded((p) => !p)}
          data-ocid="filter_sidebar.optional_filters.toggle"
        >
          <Filter
            className="w-3 h-3"
            style={{ color: "oklch(0.50 0.22 262)" }}
          />
          <span
            className="text-xs font-medium"
            style={{ color: "oklch(0.50 0.22 262)" }}
          >
            Optional Filters
          </span>
          <ChevronDown
            className={`w-3 h-3 ml-auto transition-transform duration-200 ${optionalExpanded ? "" : "-rotate-90"}`}
            style={{ color: "oklch(0.55 0.02 240)" }}
          />
        </button>

        {optionalExpanded && (
          <div className="px-3 pb-3 space-y-2.5">
            {/* Client */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <Label
                  className="text-[10px] font-medium"
                  style={{ color: "oklch(0.52 0.03 240)" }}
                >
                  Client
                </Label>
                <div className="flex items-center gap-1">
                  <Checkbox
                    checked={clientExclude}
                    onCheckedChange={(v) => setClientExclude(!!v)}
                    className="w-3 h-3"
                  />
                  <span
                    className="text-[9px]"
                    style={{ color: "oklch(0.55 0.03 240)" }}
                  >
                    Exclude
                  </span>
                </div>
              </div>
              <Select value={client} onValueChange={setClient}>
                <SelectTrigger
                  className="h-7 text-xs"
                  data-ocid="filter.client.select"
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

            {/* Product */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <Label
                  className="text-[10px] font-medium"
                  style={{ color: "oklch(0.52 0.03 240)" }}
                >
                  Product
                </Label>
                <div className="flex items-center gap-1">
                  <Checkbox
                    checked={productExclude}
                    onCheckedChange={(v) => setProductExclude(!!v)}
                    className="w-3 h-3"
                  />
                  <span
                    className="text-[9px]"
                    style={{ color: "oklch(0.55 0.03 240)" }}
                  >
                    Exclude
                  </span>
                </div>
              </div>
              <Select value={product} onValueChange={setProduct}>
                <SelectTrigger
                  className="h-7 text-xs"
                  data-ocid="filter.product.select"
                >
                  <SelectValue placeholder="Select Product" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10yr">10 YR SEARCH</SelectItem>
                  <SelectItem value="20yr">20 YR SEARCH</SelectItem>
                  <SelectItem value="rundown">Run Down</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* State */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <Label
                  className="text-[10px] font-medium"
                  style={{ color: "oklch(0.52 0.03 240)" }}
                >
                  State
                </Label>
                <div className="flex items-center gap-1">
                  <Checkbox
                    checked={stateExclude}
                    onCheckedChange={(v) => setStateExclude(!!v)}
                    className="w-3 h-3"
                  />
                  <span
                    className="text-[9px]"
                    style={{ color: "oklch(0.55 0.03 240)" }}
                  >
                    Exclude
                  </span>
                </div>
              </div>
              <Select value={stateVal} onValueChange={setStateVal}>
                <SelectTrigger
                  className="h-7 text-xs"
                  data-ocid="filter.state.select"
                >
                  <SelectValue placeholder="Select State" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="AL">Alabama</SelectItem>
                  <SelectItem value="TX">Texas</SelectItem>
                  <SelectItem value="MD">Maryland</SelectItem>
                  <SelectItem value="CA">California</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* County */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <Label
                  className="text-[10px] font-medium"
                  style={{ color: "oklch(0.52 0.03 240)" }}
                >
                  County
                </Label>
                <div className="flex items-center gap-1">
                  <Checkbox
                    checked={countyExclude}
                    onCheckedChange={(v) => setCountyExclude(!!v)}
                    className="w-3 h-3"
                  />
                  <span
                    className="text-[9px]"
                    style={{ color: "oklch(0.55 0.03 240)" }}
                  >
                    Exclude
                  </span>
                </div>
              </div>
              <Select value={county} onValueChange={setCounty}>
                <SelectTrigger
                  className="h-7 text-xs"
                  data-ocid="filter.county.select"
                >
                  <SelectValue placeholder="Select County" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="autauga">Autauga</SelectItem>
                  <SelectItem value="baldwin">Baldwin</SelectItem>
                  <SelectItem value="montgomery">Montgomery</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* File Order Type */}
            <div>
              <Label
                className="text-[10px] font-medium mb-1 block"
                style={{ color: "oklch(0.52 0.03 240)" }}
              >
                File Order Type
              </Label>
              <Select value={fileOrderType} onValueChange={setFileOrderType}>
                <SelectTrigger
                  className="h-7 text-xs"
                  data-ocid="filter.file_order_type.select"
                >
                  <SelectValue placeholder="Order Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="priority">Priority</SelectItem>
                  <SelectItem value="rush">Rush</SelectItem>
                  <SelectItem value="select">Select</SelectItem>
                  <SelectItem value="due_date">Due Date</SelectItem>
                  <SelectItem value="promised_date">Promised Date</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Paid Sites */}
            <div>
              <Label
                className="text-[10px] font-medium mb-1 block"
                style={{ color: "oklch(0.52 0.03 240)" }}
              >
                Paid Sites
              </Label>
              <Select value={paidSite} onValueChange={setPaidSite}>
                <SelectTrigger
                  className="h-7 text-xs"
                  data-ocid="filter.paidsites.select"
                >
                  <SelectValue placeholder="Paid Sites" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="siteA">Site A</SelectItem>
                  <SelectItem value="siteB">Site B</SelectItem>
                  <SelectItem value="siteC">Site C</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}
      </div>

      {/* Bottom actions */}
      <div className="mt-auto px-3 py-3 flex gap-2 shrink-0">
        <Button
          variant="outline"
          size="sm"
          className="flex-1 h-7 text-xs gap-1"
          onClick={handleReset}
          data-ocid="filter_sidebar.reset.button"
        >
          <RotateCcw className="w-3 h-3" />
          Reset
        </Button>
        <Button
          size="sm"
          className="flex-1 h-7 text-xs gap-1 text-white border-0"
          style={{ background: "oklch(0.50 0.22 262)" }}
          onClick={handleSave}
          data-ocid="filter_sidebar.save.button"
        >
          <Save className="w-3 h-3" />
          Save
        </Button>
      </div>
    </div>
  );
}
