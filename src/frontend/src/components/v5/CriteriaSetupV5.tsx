import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { RotateCcw, Save, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function CriteriaSetupV5() {
  const [dailyTarget, setDailyTarget] = useState("150");
  const [maxPending, setMaxPending] = useState("40");
  const [overdueAfter, setOverdueAfter] = useState("24");
  const [priorityMode, setPriorityMode] = useState("normal");
  const [teamNotes, setTeamNotes] = useState("");
  const [saved, setSaved] = useState(false);

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

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 hover:shadow-sm"
          style={{
            background: saved ? "oklch(0.92 0.07 145)" : "oklch(0.90 0.08 178)",
            color: saved ? "oklch(0.38 0.18 145)" : "oklch(0.38 0.18 178)",
            border: saved
              ? "1px solid oklch(0.78 0.12 145)"
              : "1px solid oklch(0.78 0.12 178)",
          }}
          data-ocid="v5_criteria_setup.trigger.button"
        >
          <SlidersHorizontal className="w-3 h-3" />
          Team Lead
          <span
            className="text-[9px] px-1 py-0.5 rounded-full font-bold"
            style={{
              background: saved
                ? "oklch(0.42 0.15 145)"
                : "oklch(0.52 0.18 178)",
              color: "white",
            }}
          >
            {saved ? "✓" : "TL"}
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-sm">
            <SlidersHorizontal
              className="w-4 h-4"
              style={{ color: "oklch(0.52 0.18 178)" }}
            />
            Criteria Setup
            <span
              className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full uppercase"
              style={{
                background: "oklch(0.88 0.12 178)",
                color: "oklch(0.38 0.18 178)",
              }}
            >
              Team Lead
            </span>
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-3 pt-1">
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1">
              <Label
                className="text-[11px] font-semibold"
                style={{ color: "oklch(0.35 0.12 178)" }}
              >
                Daily Order Target
              </Label>
              <div className="flex items-center gap-1">
                <Input
                  type="number"
                  value={dailyTarget}
                  onChange={(e) => setDailyTarget(e.target.value)}
                  className="h-7 text-xs"
                  style={{ borderColor: "oklch(0.78 0.12 178)" }}
                  data-ocid="v5_criteria_setup.daily_target.input"
                />
                <span
                  className="text-[10px] whitespace-nowrap"
                  style={{ color: "oklch(0.52 0.08 178)" }}
                >
                  /day
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <Label
                className="text-[11px] font-semibold"
                style={{ color: "oklch(0.35 0.12 178)" }}
              >
                Max Pending
              </Label>
              <div className="flex items-center gap-1">
                <Input
                  type="number"
                  value={maxPending}
                  onChange={(e) => setMaxPending(e.target.value)}
                  className="h-7 text-xs"
                  style={{ borderColor: "oklch(0.78 0.12 178)" }}
                  data-ocid="v5_criteria_setup.max_pending.input"
                />
                <span
                  className="text-[10px] whitespace-nowrap"
                  style={{ color: "oklch(0.52 0.08 178)" }}
                >
                  orders
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <Label
                className="text-[11px] font-semibold"
                style={{ color: "oklch(0.35 0.12 178)" }}
              >
                Overdue After
              </Label>
              <div className="flex items-center gap-1">
                <Input
                  type="number"
                  value={overdueAfter}
                  onChange={(e) => setOverdueAfter(e.target.value)}
                  className="h-7 text-xs"
                  style={{ borderColor: "oklch(0.78 0.12 178)" }}
                  data-ocid="v5_criteria_setup.overdue_after.input"
                />
                <span
                  className="text-[10px] whitespace-nowrap"
                  style={{ color: "oklch(0.52 0.08 178)" }}
                >
                  hrs
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <Label
                className="text-[11px] font-semibold"
                style={{ color: "oklch(0.35 0.12 178)" }}
              >
                Priority Mode
              </Label>
              <Select value={priorityMode} onValueChange={setPriorityMode}>
                <SelectTrigger
                  className="h-7 text-xs"
                  style={{ borderColor: "oklch(0.78 0.12 178)" }}
                  data-ocid="v5_criteria_setup.priority_mode.select"
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
          <div className="flex flex-col gap-1">
            <Label
              className="text-[11px] font-semibold"
              style={{ color: "oklch(0.35 0.12 178)" }}
            >
              Team Notes
            </Label>
            <Textarea
              value={teamNotes}
              onChange={(e) => setTeamNotes(e.target.value)}
              placeholder="e.g. Focus on Rush orders first..."
              className="text-xs resize-none"
              rows={2}
              style={{ borderColor: "oklch(0.78 0.12 178)" }}
              data-ocid="v5_criteria_setup.notes.textarea"
            />
          </div>
          <div className="flex items-center gap-2 pt-1">
            <Button
              size="sm"
              className="h-7 text-xs text-white border-0 gap-1.5"
              style={{ background: "oklch(0.52 0.18 178)" }}
              onClick={handleSave}
              data-ocid="v5_criteria_setup.save.button"
            >
              <Save className="w-3 h-3" />
              Save
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-7 text-xs gap-1.5"
              style={{ color: "oklch(0.48 0.10 178)" }}
              onClick={handleReset}
              data-ocid="v5_criteria_setup.reset.button"
            >
              <RotateCcw className="w-3 h-3" />
              Reset
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
