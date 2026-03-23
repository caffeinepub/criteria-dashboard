import OrderTable from "@/components/OrderTable";
import SummaryCards from "@/components/SummaryCards";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AlertCircle, ChevronDown, ChevronRight, Info } from "lucide-react";
import { useState } from "react";

interface CriteriaProps {
  activeTab: "users" | "groups";
  onTabChange: (tab: "users" | "groups") => void;
}

export default function Criteria({ activeTab, onTabChange }: CriteriaProps) {
  const [workHistoryExpanded, setWorkHistoryExpanded] = useState(true);

  return (
    <div className="space-y-3">
      {/* Tab switcher */}
      <div className="flex items-center gap-2">
        <div
          className="inline-flex p-0.5 rounded-md"
          style={{
            background: "oklch(0.90 0.01 240)",
            border: "1px solid oklch(0.87 0.01 240)",
          }}
          data-ocid="criteria.tab"
          role="tablist"
        >
          {(["users", "groups"] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={activeTab === tab}
              onClick={() => onTabChange(tab)}
              className="px-4 py-1 text-xs font-semibold rounded capitalize transition-all duration-150"
              style={{
                background: activeTab === tab ? "white" : "transparent",
                color:
                  activeTab === tab
                    ? "oklch(0.48 0.22 262)"
                    : "oklch(0.52 0.03 240)",
                boxShadow:
                  activeTab === tab ? "0 1px 4px oklch(0 0 0 / 0.08)" : "none",
              }}
              data-ocid={`criteria.${tab}.tab`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Note banners */}
      <div
        className="flex items-center gap-2 px-4 py-2 rounded-lg"
        style={{
          background: "oklch(0.96 0.03 240)",
          border: "1px solid oklch(0.90 0.02 240)",
        }}
      >
        <Info
          className="w-3.5 h-3.5 shrink-0"
          style={{ color: "oklch(0.48 0.18 220)" }}
        />
        <span
          className="text-[11px] font-medium"
          style={{ color: "oklch(0.38 0.10 220)" }}
        >
          Note: Select At least one product, client, state
        </span>
      </div>
      <div
        className="flex items-center gap-2 px-4 py-2 rounded-lg"
        style={{
          background: "oklch(0.98 0.01 55)",
          border: "1px solid oklch(0.93 0.03 55)",
        }}
      >
        <AlertCircle
          className="w-3.5 h-3.5 shrink-0"
          style={{ color: "oklch(0.52 0.18 55)" }}
        />
        <span className="text-[10px]" style={{ color: "oklch(0.40 0.08 55)" }}>
          Note: If the status is &quot;Hold&quot;, it indicates that the
          criteria is currently on hold and cannot be used for processing
          orders.
        </span>
      </div>

      {/* Summary cards */}
      <SummaryCards />

      {/* Work History collapsible card */}
      <div
        className="bg-white rounded-lg border overflow-hidden"
        style={{ borderColor: "oklch(0.90 0.01 240)" }}
      >
        <button
          type="button"
          className="w-full flex items-center justify-between px-4 py-2.5 hover:bg-gray-50 transition-colors"
          onClick={() => setWorkHistoryExpanded((p) => !p)}
          data-ocid="criteria.work_history.toggle"
        >
          <div className="flex flex-col items-start">
            <span
              className="text-sm font-semibold"
              style={{ color: "oklch(0.25 0.04 245)" }}
            >
              Work History
            </span>
            <span
              className="text-[10px]"
              style={{ color: "oklch(0.55 0.02 240)" }}
            >
              Filter by Branch / Group /{" "}
              {activeTab === "users" ? "User" : "SubGroup"} and date range
            </span>
          </div>
          {workHistoryExpanded ? (
            <ChevronDown
              className="w-4 h-4 shrink-0"
              style={{ color: "oklch(0.55 0.02 240)" }}
            />
          ) : (
            <ChevronRight
              className="w-4 h-4 shrink-0"
              style={{ color: "oklch(0.55 0.02 240)" }}
            />
          )}
        </button>

        {workHistoryExpanded && (
          <div
            className="px-4 py-3 flex flex-wrap items-end gap-3"
            style={{ borderTop: "1px solid oklch(0.93 0.01 240)" }}
          >
            <div className="flex flex-col gap-1">
              <span
                className="text-[10px] font-medium"
                style={{ color: "oklch(0.52 0.03 240)" }}
              >
                Branch
              </span>
              <Select>
                <SelectTrigger
                  className="h-7 text-xs w-28"
                  data-ocid="work_history.branch.select"
                >
                  <SelectValue placeholder="Branch" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="BLR">BLR</SelectItem>
                  <SelectItem value="MUM">MUM</SelectItem>
                  <SelectItem value="DEL">DEL</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-1">
              <span
                className="text-[10px] font-medium"
                style={{ color: "oklch(0.52 0.03 240)" }}
              >
                Group
              </span>
              <Select>
                <SelectTrigger
                  className="h-7 text-xs w-32"
                  data-ocid="work_history.group.select"
                >
                  <SelectValue placeholder="Group" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="MTPROCESS">MTPROCESS</SelectItem>
                  <SelectItem value="ALPHA">ALPHA</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-1">
              <span
                className="text-[10px] font-medium"
                style={{ color: "oklch(0.52 0.03 240)" }}
              >
                {activeTab === "users" ? "Users" : "SubGroup"}
              </span>
              <Select>
                <SelectTrigger
                  className="h-7 text-xs w-32"
                  data-ocid="work_history.users_sub.select"
                >
                  <SelectValue
                    placeholder={
                      activeTab === "users" ? "Select User" : "Select SubGroup"
                    }
                  />
                </SelectTrigger>
                <SelectContent>
                  {activeTab === "users" ? (
                    <>
                      <SelectItem value="user1">Ravi Kumar</SelectItem>
                      <SelectItem value="user2">Priya Nair</SelectItem>
                    </>
                  ) : (
                    <>
                      <SelectItem value="sg1">SG-Alpha</SelectItem>
                      <SelectItem value="sg2">SG-Beta</SelectItem>
                    </>
                  )}
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-1">
              <span
                className="text-[10px] font-medium"
                style={{ color: "oklch(0.52 0.03 240)" }}
              >
                From Date
              </span>
              <input
                type="date"
                className="h-7 text-xs px-2 rounded-md border"
                style={{
                  borderColor: "oklch(0.87 0.01 240)",
                  color: "oklch(0.35 0.03 240)",
                }}
                data-ocid="work_history.from_date.input"
              />
            </div>
            <div className="flex flex-col gap-1">
              <span
                className="text-[10px] font-medium"
                style={{ color: "oklch(0.52 0.03 240)" }}
              >
                To Date
              </span>
              <input
                type="date"
                className="h-7 text-xs px-2 rounded-md border"
                style={{
                  borderColor: "oklch(0.87 0.01 240)",
                  color: "oklch(0.35 0.03 240)",
                }}
                data-ocid="work_history.to_date.input"
              />
            </div>
            <Button
              size="sm"
              className="h-7 text-xs text-white border-0 ml-auto"
              style={{ background: "oklch(0.50 0.22 262)" }}
              data-ocid="work_history.apply.button"
            >
              Apply
            </Button>
          </div>
        )}
      </div>

      {/* Order Table */}
      <OrderTable />
    </div>
  );
}
