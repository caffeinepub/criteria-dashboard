import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDown, ChevronRight, Filter, X } from "lucide-react";
import { useState } from "react";

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-1">
      <span
        className="text-[10px] font-semibold"
        style={{ color: "oklch(0.40 0.06 262)" }}
      >
        {children}
      </span>
      <span className="text-[9px]" style={{ color: "oklch(0.62 0.03 262)" }}>
        (optional)
      </span>
    </div>
  );
}

export default function OtherFilters() {
  const [expanded, setExpanded] = useState(false);
  const [paidSite, setPaidSite] = useState("");
  const [fileOrderType, setFileOrderType] = useState("");
  const [subStatus, setSubStatus] = useState("");

  const activeCount = [paidSite, fileOrderType, subStatus].filter(
    Boolean,
  ).length;
  const hasFilters = activeCount > 0;

  const handleClear = () => {
    setPaidSite("");
    setFileOrderType("");
    setSubStatus("");
  };

  return (
    <div
      className="rounded-xl overflow-hidden transition-all duration-200"
      style={{
        background: "white",
        border: "1px dashed oklch(0.83 0.06 262)",
        boxShadow: "0 1px 3px oklch(0 0 0 / 0.04)",
      }}
      data-ocid="other_filters.panel"
    >
      <button
        type="button"
        className="w-full flex items-center justify-between px-4 py-2.5"
        onClick={() => setExpanded((p) => !p)}
        data-ocid="other_filters.toggle"
      >
        <div className="flex items-center gap-2">
          <Filter
            className="w-3.5 h-3.5"
            style={{ color: "oklch(0.50 0.15 262)" }}
          />
          <span
            className="text-xs font-semibold"
            style={{ color: "oklch(0.38 0.12 262)" }}
          >
            Optional Filters
          </span>
          {activeCount > 0 && (
            <span
              className="text-[9px] font-bold px-1.5 py-0.5 rounded-full"
              style={{
                background: "oklch(0.88 0.10 262)",
                color: "oklch(0.38 0.18 262)",
              }}
            >
              {activeCount} active
            </span>
          )}
        </div>
        {expanded ? (
          <ChevronDown
            className="w-3.5 h-3.5"
            style={{ color: "oklch(0.50 0.10 262)" }}
          />
        ) : (
          <ChevronRight
            className="w-3.5 h-3.5"
            style={{ color: "oklch(0.50 0.10 262)" }}
          />
        )}
      </button>

      {expanded && (
        <div
          className="px-4 py-3 flex flex-wrap items-end gap-3"
          style={{ borderTop: "1px dashed oklch(0.88 0.05 262)" }}
        >
          {/* Paid Sites */}
          <div className="flex flex-col gap-1">
            <FieldLabel>Paid Sites</FieldLabel>
            <Select value={paidSite} onValueChange={setPaidSite}>
              <SelectTrigger
                className="h-7 text-xs w-28"
                data-ocid="other_filters.paid_sites.select"
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

          {/* File Order Type */}
          <div className="flex flex-col gap-1">
            <FieldLabel>File Order Type</FieldLabel>
            <Select value={fileOrderType} onValueChange={setFileOrderType}>
              <SelectTrigger
                className="h-7 text-xs w-36"
                data-ocid="other_filters.file_order_type.select"
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

          {/* Sub Status */}
          <div className="flex flex-col gap-1">
            <FieldLabel>Sub Status</FieldLabel>
            <Select value={subStatus} onValueChange={setSubStatus}>
              <SelectTrigger
                className="h-7 text-xs w-32"
                data-ocid="other_filters.sub_status.select"
              >
                <SelectValue placeholder="Sub Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="inprogress">In Progress</SelectItem>
                <SelectItem value="review">Under Review</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2 ml-auto">
            {hasFilters && (
              <button
                type="button"
                className="flex items-center gap-1 text-[10px] hover:underline"
                style={{ color: "oklch(0.52 0.12 262)" }}
                onClick={handleClear}
                data-ocid="other_filters.clear.button"
              >
                <X className="w-3 h-3" />
                Clear All
              </button>
            )}
            <Button
              size="sm"
              className="h-7 text-xs text-white border-0"
              style={{ background: "oklch(0.50 0.22 262)" }}
              data-ocid="other_filters.apply.button"
            >
              Apply
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
