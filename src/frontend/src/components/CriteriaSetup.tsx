import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  ChevronDown,
  ChevronRight,
  Info,
  RotateCcw,
  Save,
  SlidersHorizontal,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function CriteriaSetup() {
  const [expanded, setExpanded] = useState(false);
  const [saved, setSaved] = useState(false);
  const [dailyTarget, setDailyTarget] = useState("150");
  const [maxPending, setMaxPending] = useState("40");
  const [overdueAfter, setOverdueAfter] = useState("24");
  const [priorityMode, setPriorityMode] = useState("normal");
  const [teamNotes, setTeamNotes] = useState("");

  const handleSave = () => {
    setSaved(true);
    toast.success("Criteria saved successfully");
  };

  const handleReset = () => {
    setDailyTarget("150");
    setMaxPending("40");
    setOverdueAfter("24");
    setPriorityMode("normal");
    setTeamNotes("");
    setSaved(false);
    toast("Criteria reset to defaults");
  };

  const modeLabel: Record<string, string> = {
    normal: "Normal",
    high: "High Urgency",
    critical: "Critical",
  };

  return (
    <div
      className="rounded-xl overflow-hidden transition-all duration-200"
      style={{
        background: "oklch(0.975 0.012 262)",
        border: "1px solid oklch(0.85 0.06 262)",
        boxShadow: "0 1px 6px oklch(0.48 0.22 262 / 0.10)",
      }}
      data-ocid="criteria_setup.panel"
    >
      {/* Header */}
      <button
        type="button"
        className="w-full flex items-center justify-between px-4 py-3 group"
        onClick={() => setExpanded((p) => !p)}
        data-ocid="criteria_setup.toggle"
      >
        <div className="flex items-center gap-2.5">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{ background: "oklch(0.92 0.08 262)" }}
          >
            <SlidersHorizontal
              className="w-3.5 h-3.5"
              style={{ color: "oklch(0.48 0.22 262)" }}
            />
          </div>
          <div className="text-left">
            <div className="flex items-center gap-2">
              <span
                className="text-sm font-bold"
                style={{ color: "oklch(0.28 0.08 262)" }}
              >
                Criteria Setup
              </span>
              <span
                className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full uppercase tracking-wide"
                style={{
                  background: "oklch(0.88 0.10 262)",
                  color: "oklch(0.40 0.20 262)",
                }}
              >
                Team Lead
              </span>
              {saved && (
                <span
                  className="text-[9px] font-medium px-1.5 py-0.5 rounded-full"
                  style={{
                    background: "oklch(0.92 0.07 145)",
                    color: "oklch(0.42 0.15 145)",
                  }}
                  data-ocid="criteria_setup.success_state"
                >
                  ✓ Saved · Target {dailyTarget}/day · Overdue &gt;
                  {overdueAfter}h · {modeLabel[priorityMode]}
                </span>
              )}
            </div>
            <span
              className="text-[10px]"
              style={{ color: "oklch(0.52 0.06 262)" }}
            >
              Configure thresholds for your team
            </span>
          </div>
        </div>
        {expanded ? (
          <ChevronDown
            className="w-4 h-4 shrink-0"
            style={{ color: "oklch(0.52 0.10 262)" }}
          />
        ) : (
          <ChevronRight
            className="w-4 h-4 shrink-0"
            style={{ color: "oklch(0.52 0.10 262)" }}
          />
        )}
      </button>

      {expanded && (
        <div
          className="px-4 pb-4"
          style={{ borderTop: "1px solid oklch(0.87 0.06 262)" }}
        >
          {/* Info banner */}
          <div
            className="flex items-start gap-2 rounded-lg px-3 py-2.5 mt-3 mb-4"
            style={{
              background: "oklch(0.94 0.06 220)",
              border: "1px solid oklch(0.82 0.10 220)",
            }}
          >
            <Info
              className="w-3.5 h-3.5 mt-0.5 shrink-0"
              style={{ color: "oklch(0.46 0.18 220)" }}
            />
            <p
              className="text-[11px]"
              style={{ color: "oklch(0.38 0.12 220)" }}
            >
              Set these values to help your team prioritize work. These criteria
              are visible to all team members.
            </p>
          </div>

          {/* Grid of inputs */}
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="flex flex-col gap-1.5">
              <Label
                className="text-[11px] font-semibold"
                style={{ color: "oklch(0.38 0.10 262)" }}
              >
                Daily Order Target
              </Label>
              <div className="flex items-center gap-1.5">
                <Input
                  type="number"
                  value={dailyTarget}
                  onChange={(e) => setDailyTarget(e.target.value)}
                  className="h-8 text-xs flex-1"
                  style={{ borderColor: "oklch(0.82 0.08 262)" }}
                  data-ocid="criteria_setup.daily_target.input"
                />
                <span
                  className="text-[10px] whitespace-nowrap"
                  style={{ color: "oklch(0.55 0.05 262)" }}
                >
                  orders/day
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label
                className="text-[11px] font-semibold"
                style={{ color: "oklch(0.38 0.10 262)" }}
              >
                Max Pending Threshold
              </Label>
              <div className="flex items-center gap-1.5">
                <Input
                  type="number"
                  value={maxPending}
                  onChange={(e) => setMaxPending(e.target.value)}
                  className="h-8 text-xs flex-1"
                  style={{ borderColor: "oklch(0.82 0.08 262)" }}
                  data-ocid="criteria_setup.max_pending.input"
                />
                <span
                  className="text-[10px] whitespace-nowrap"
                  style={{ color: "oklch(0.55 0.05 262)" }}
                >
                  orders (alert)
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label
                className="text-[11px] font-semibold"
                style={{ color: "oklch(0.38 0.10 262)" }}
              >
                Overdue Alert After
              </Label>
              <div className="flex items-center gap-1.5">
                <Input
                  type="number"
                  value={overdueAfter}
                  onChange={(e) => setOverdueAfter(e.target.value)}
                  className="h-8 text-xs flex-1"
                  style={{ borderColor: "oklch(0.82 0.08 262)" }}
                  data-ocid="criteria_setup.overdue_after.input"
                />
                <span
                  className="text-[10px] whitespace-nowrap"
                  style={{ color: "oklch(0.55 0.05 262)" }}
                >
                  hours
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label
                className="text-[11px] font-semibold"
                style={{ color: "oklch(0.38 0.10 262)" }}
              >
                Priority Mode
              </Label>
              <Select value={priorityMode} onValueChange={setPriorityMode}>
                <SelectTrigger
                  className="h-8 text-xs"
                  style={{ borderColor: "oklch(0.82 0.08 262)" }}
                  data-ocid="criteria_setup.priority_mode.select"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="normal">Normal</SelectItem>
                  <SelectItem value="high">High Urgency</SelectItem>
                  <SelectItem value="critical">Critical</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Team Notes */}
          <div className="flex flex-col gap-1.5 mb-4">
            <Label
              className="text-[11px] font-semibold"
              style={{ color: "oklch(0.38 0.10 262)" }}
            >
              Team Notes / Instructions
            </Label>
            <Textarea
              value={teamNotes}
              onChange={(e) => setTeamNotes(e.target.value)}
              placeholder="e.g. Focus on Rush orders first. Escalate any overdue > 48hrs to supervisor..."
              className="text-xs resize-none"
              rows={3}
              style={{ borderColor: "oklch(0.82 0.08 262)" }}
              data-ocid="criteria_setup.notes.textarea"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              className="h-8 text-xs text-white border-0 gap-1.5"
              style={{ background: "oklch(0.48 0.22 262)" }}
              onClick={handleSave}
              data-ocid="criteria_setup.save.button"
            >
              <Save className="w-3 h-3" />
              Save Criteria
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 text-xs gap-1.5"
              style={{ color: "oklch(0.50 0.08 262)" }}
              onClick={handleReset}
              data-ocid="criteria_setup.reset.button"
            >
              <RotateCcw className="w-3 h-3" />
              Reset
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
