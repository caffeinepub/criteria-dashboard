import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDown, ChevronRight, Filter, X } from "lucide-react";
import { useState } from "react";

export default function OtherFiltersV5() {
  const [expanded, setExpanded] = useState(false);
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

  const activeCount = [
    client,
    product,
    stateVal,
    county,
    fileOrderType,
    paidSite,
  ].filter(Boolean).length;

  const handleClear = () => {
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
  };

  return (
    <div
      className="rounded-xl overflow-hidden transition-all duration-200"
      style={{
        background: "white",
        border: "1px dashed oklch(0.78 0.12 178)",
        boxShadow: "0 1px 3px oklch(0 0 0 / 0.05)",
      }}
      data-ocid="v5_other_filters.panel"
    >
      {/* Header toggle */}
      <button
        type="button"
        className="w-full flex items-center justify-between px-4 py-2.5 transition-colors"
        onClick={() => setExpanded((p) => !p)}
        data-ocid="v5_other_filters.toggle"
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background =
            "oklch(0.97 0.04 178)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = "white";
        }}
      >
        <div className="flex items-center gap-2">
          <Filter
            className="w-3.5 h-3.5"
            style={{ color: "oklch(0.48 0.18 178)" }}
          />
          <span
            className="text-xs font-semibold"
            style={{ color: "oklch(0.38 0.15 178)" }}
          >
            Optional Filters
          </span>
          {activeCount > 0 && (
            <span
              className="text-[9px] font-bold px-1.5 py-0.5 rounded-full"
              style={{
                background: "oklch(0.88 0.10 178)",
                color: "oklch(0.38 0.18 178)",
              }}
            >
              {activeCount} active
            </span>
          )}
        </div>
        {expanded ? (
          <ChevronDown
            className="w-3.5 h-3.5"
            style={{ color: "oklch(0.48 0.15 178)" }}
          />
        ) : (
          <ChevronRight
            className="w-3.5 h-3.5"
            style={{ color: "oklch(0.48 0.15 178)" }}
          />
        )}
      </button>

      {/* Expanded: filters in a row */}
      {expanded && (
        <div
          className="px-4 pb-3 pt-2"
          style={{ borderTop: "1px dashed oklch(0.82 0.10 178)" }}
        >
          <div className="flex flex-wrap items-end gap-3">
            {/* Client */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1.5">
                <span
                  className="text-[10px] font-semibold uppercase tracking-wide"
                  style={{ color: "oklch(0.52 0.18 178)" }}
                >
                  Client
                </span>
                <Checkbox
                  checked={clientExclude}
                  onCheckedChange={(v) => setClientExclude(!!v)}
                  className="w-3 h-3"
                />
                <span
                  className="text-[9px]"
                  style={{ color: "oklch(0.55 0.05 178)" }}
                >
                  Excl
                </span>
              </div>
              <Select value={client} onValueChange={setClient}>
                <SelectTrigger
                  className="h-7 text-xs w-36"
                  style={{ borderColor: "oklch(0.78 0.12 178)" }}
                  data-ocid="v5_other_filters.client.select"
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
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1.5">
                <span
                  className="text-[10px] font-semibold uppercase tracking-wide"
                  style={{ color: "oklch(0.52 0.18 178)" }}
                >
                  Product
                </span>
                <Checkbox
                  checked={productExclude}
                  onCheckedChange={(v) => setProductExclude(!!v)}
                  className="w-3 h-3"
                />
                <span
                  className="text-[9px]"
                  style={{ color: "oklch(0.55 0.05 178)" }}
                >
                  Excl
                </span>
              </div>
              <Select value={product} onValueChange={setProduct}>
                <SelectTrigger
                  className="h-7 text-xs w-32"
                  style={{ borderColor: "oklch(0.78 0.12 178)" }}
                  data-ocid="v5_other_filters.product.select"
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
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1.5">
                <span
                  className="text-[10px] font-semibold uppercase tracking-wide"
                  style={{ color: "oklch(0.52 0.18 178)" }}
                >
                  State
                </span>
                <Checkbox
                  checked={stateExclude}
                  onCheckedChange={(v) => setStateExclude(!!v)}
                  className="w-3 h-3"
                />
                <span
                  className="text-[9px]"
                  style={{ color: "oklch(0.55 0.05 178)" }}
                >
                  Excl
                </span>
              </div>
              <Select value={stateVal} onValueChange={setStateVal}>
                <SelectTrigger
                  className="h-7 text-xs w-28"
                  style={{ borderColor: "oklch(0.78 0.12 178)" }}
                  data-ocid="v5_other_filters.state.select"
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
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1.5">
                <span
                  className="text-[10px] font-semibold uppercase tracking-wide"
                  style={{ color: "oklch(0.52 0.18 178)" }}
                >
                  County
                </span>
                <Checkbox
                  checked={countyExclude}
                  onCheckedChange={(v) => setCountyExclude(!!v)}
                  className="w-3 h-3"
                />
                <span
                  className="text-[9px]"
                  style={{ color: "oklch(0.55 0.05 178)" }}
                >
                  Excl
                </span>
              </div>
              <Select value={county} onValueChange={setCounty}>
                <SelectTrigger
                  className="h-7 text-xs w-28"
                  style={{ borderColor: "oklch(0.78 0.12 178)" }}
                  data-ocid="v5_other_filters.county.select"
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
            <div className="flex flex-col gap-1">
              <span
                className="text-[10px] font-semibold uppercase tracking-wide"
                style={{ color: "oklch(0.52 0.18 178)" }}
              >
                File Order Type
              </span>
              <Select value={fileOrderType} onValueChange={setFileOrderType}>
                <SelectTrigger
                  className="h-7 text-xs w-32"
                  style={{ borderColor: "oklch(0.78 0.12 178)" }}
                  data-ocid="v5_other_filters.file_order_type.select"
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
            <div className="flex flex-col gap-1">
              <span
                className="text-[10px] font-semibold uppercase tracking-wide"
                style={{ color: "oklch(0.52 0.18 178)" }}
              >
                Paid Sites
              </span>
              <Select value={paidSite} onValueChange={setPaidSite}>
                <SelectTrigger
                  className="h-7 text-xs w-28"
                  style={{ borderColor: "oklch(0.78 0.12 178)" }}
                  data-ocid="v5_other_filters.paid_sites.select"
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

            {/* Actions */}
            <div className="flex items-center gap-2 ml-auto">
              {activeCount > 0 && (
                <button
                  type="button"
                  className="flex items-center gap-1 text-[10px] hover:underline"
                  style={{ color: "oklch(0.42 0.15 178)" }}
                  onClick={handleClear}
                  data-ocid="v5_other_filters.clear.button"
                >
                  <X className="w-3 h-3" />
                  Clear
                </button>
              )}
              <Button
                size="sm"
                className="h-7 text-xs text-white border-0"
                style={{ background: "oklch(0.52 0.18 178)" }}
                data-ocid="v5_other_filters.apply.button"
              >
                Apply
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
