import OrderTable from "@/components/OrderTable";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import BasicFiltersV5 from "@/components/v5/BasicFiltersV5";
import CriteriaSetupV5 from "@/components/v5/CriteriaSetupV5";
import OtherFiltersV5 from "@/components/v5/OtherFiltersV5";
import SummaryCardsV5 from "@/components/v5/SummaryCardsV5";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

interface CriteriaV5Props {
  activeTab: "users" | "groups";
  onTabChange: (tab: "users" | "groups") => void;
}

export default function CriteriaV5({
  activeTab,
  onTabChange,
}: CriteriaV5Props) {
  const [workHistoryExpanded, setWorkHistoryExpanded] = useState(false);

  return (
    <div className="space-y-2 v5-row-fade">
      {/* Tab switcher + Team Lead button */}
      <div className="flex items-center gap-2">
        <div
          className="inline-flex p-0.5 rounded-lg"
          style={{
            background: "oklch(0.90 0.05 178)",
            border: "1px solid oklch(0.80 0.10 178)",
          }}
          data-ocid="v5_criteria.tab"
          role="tablist"
        >
          {(["users", "groups"] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={activeTab === tab}
              onClick={() => onTabChange(tab)}
              className="px-4 py-1.5 text-xs font-semibold rounded-md capitalize transition-all duration-200"
              style={{
                background:
                  activeTab === tab ? "oklch(0.52 0.18 178)" : "transparent",
                color: activeTab === tab ? "white" : "oklch(0.40 0.12 178)",
                boxShadow:
                  activeTab === tab
                    ? "0 2px 8px oklch(0.52 0.18 178 / 0.4)"
                    : "none",
              }}
              data-ocid={`v5_criteria.${tab}.tab`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        {/* Team Lead Criteria Setup - compact button opens dialog */}
        <CriteriaSetupV5 />
      </div>

      {/* Basic Filters - Main Criteria Form */}
      <BasicFiltersV5 mode={activeTab} />

      {/* Summary cards */}
      <SummaryCardsV5 />

      {/* Optional Filters */}
      <OtherFiltersV5 />

      {/* Work History collapsible */}
      <div
        className="bg-white rounded-xl border-0 overflow-hidden"
        style={{ boxShadow: "0 1px 5px oklch(0 0 0 / 0.07)" }}
      >
        <button
          type="button"
          className="w-full flex items-center justify-between px-4 py-2 transition-colors"
          style={{
            borderBottom: workHistoryExpanded
              ? "1px solid oklch(0.90 0.06 178)"
              : "none",
          }}
          onClick={() => setWorkHistoryExpanded((p) => !p)}
          data-ocid="v5_criteria.work_history.toggle"
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background =
              "oklch(0.97 0.04 178)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "white";
          }}
        >
          <div className="flex items-center gap-2">
            <span
              className="text-xs font-semibold"
              style={{ color: "oklch(0.25 0.04 245)" }}
            >
              Work History
            </span>
            <span
              className="text-[10px] px-1.5 py-0.5 rounded-full"
              style={{
                background: "oklch(0.92 0.06 178)",
                color: "oklch(0.42 0.15 178)",
              }}
            >
              Branch / Group / {activeTab === "users" ? "User" : "SubGroup"} +
              dates
            </span>
          </div>
          {workHistoryExpanded ? (
            <ChevronDown
              className="w-3.5 h-3.5 shrink-0"
              style={{ color: "oklch(0.52 0.18 178)" }}
            />
          ) : (
            <ChevronRight
              className="w-3.5 h-3.5 shrink-0"
              style={{ color: "oklch(0.52 0.18 178)" }}
            />
          )}
        </button>

        {workHistoryExpanded && (
          <div className="px-4 py-2.5 flex flex-wrap items-end gap-2.5">
            <div className="flex flex-col gap-0.5">
              <span
                className="text-[10px] font-semibold uppercase tracking-wide"
                style={{ color: "oklch(0.52 0.18 178)" }}
              >
                Branch
              </span>
              <Select>
                <SelectTrigger
                  className="h-7 text-xs w-24"
                  data-ocid="v5_work_history.branch.select"
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
            <div className="flex flex-col gap-0.5">
              <span
                className="text-[10px] font-semibold uppercase tracking-wide"
                style={{ color: "oklch(0.52 0.18 178)" }}
              >
                Group
              </span>
              <Select>
                <SelectTrigger
                  className="h-7 text-xs w-28"
                  data-ocid="v5_work_history.group.select"
                >
                  <SelectValue placeholder="Group" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="MTPROCESS">MTPROCESS</SelectItem>
                  <SelectItem value="ALPHA">ALPHA</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-0.5">
              <span
                className="text-[10px] font-semibold uppercase tracking-wide"
                style={{ color: "oklch(0.52 0.18 178)" }}
              >
                {activeTab === "users" ? "Users" : "SubGroup"}
              </span>
              <Select>
                <SelectTrigger
                  className="h-7 text-xs w-28"
                  data-ocid="v5_work_history.users_sub.select"
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
            <div className="flex flex-col gap-0.5">
              <span
                className="text-[10px] font-semibold uppercase tracking-wide"
                style={{ color: "oklch(0.52 0.18 178)" }}
              >
                From
              </span>
              <input
                type="date"
                className="h-7 text-xs px-2 rounded-md border"
                style={{
                  borderColor: "oklch(0.78 0.12 178)",
                  color: "oklch(0.35 0.03 240)",
                }}
                data-ocid="v5_work_history.from_date.input"
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <span
                className="text-[10px] font-semibold uppercase tracking-wide"
                style={{ color: "oklch(0.52 0.18 178)" }}
              >
                To
              </span>
              <input
                type="date"
                className="h-7 text-xs px-2 rounded-md border"
                style={{
                  borderColor: "oklch(0.78 0.12 178)",
                  color: "oklch(0.35 0.03 240)",
                }}
                data-ocid="v5_work_history.to_date.input"
              />
            </div>
            <Button
              size="sm"
              className="h-7 text-xs text-white border-0 ml-auto"
              style={{ background: "oklch(0.52 0.18 178)" }}
              data-ocid="v5_work_history.apply.button"
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
