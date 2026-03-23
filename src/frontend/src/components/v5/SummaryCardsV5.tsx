import {
  AlertTriangle,
  BarChart3,
  CheckCircle2,
  FileText,
  Layers,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

function MiniChip({
  label,
  count,
  bg,
  text,
}: { label: string; count: number; bg: string; text: string }) {
  return (
    <span
      className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-[9px] font-bold"
      style={{ background: bg, color: text }}
    >
      {label} <span>{count}</span>
    </span>
  );
}

export default function SummaryCardsV5() {
  return (
    <div className="grid grid-cols-5 gap-2">
      {/* Card 1: Total Orders */}
      <div
        className="bg-white rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-200 v5-card-enter"
        style={{
          borderTop: "3px solid oklch(0.52 0.18 178)",
          boxShadow: "0 1px 5px oklch(0 0 0 / 0.07)",
        }}
        data-ocid="v5_summary.card.1"
      >
        <div className="px-3 pt-2.5 pb-2">
          <div className="flex items-start justify-between mb-1.5">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "oklch(0.92 0.07 178)" }}
            >
              <FileText
                className="w-4 h-4"
                style={{ color: "oklch(0.52 0.18 178)" }}
              />
            </div>
            <div
              className="flex items-center gap-0.5 rounded-full px-1.5 py-0.5"
              style={{ background: "oklch(0.93 0.07 145)" }}
            >
              <TrendingUp
                className="w-2.5 h-2.5"
                style={{ color: "oklch(0.42 0.15 145)" }}
              />
              <span
                className="text-[9px] font-semibold"
                style={{ color: "oklch(0.42 0.15 145)" }}
              >
                +8%
              </span>
            </div>
          </div>
          <p
            className="text-2xl font-extrabold leading-none mb-0.5"
            style={{ color: "oklch(0.52 0.18 178)" }}
          >
            125
          </p>
          <p
            className="text-[10px] font-semibold mb-1.5"
            style={{ color: "oklch(0.45 0.03 240)" }}
          >
            Total Orders
          </p>
          <div className="flex gap-1 flex-wrap">
            <MiniChip
              label="Open"
              count={87}
              bg="oklch(0.92 0.07 178)"
              text="oklch(0.38 0.15 178)"
            />
            <MiniChip
              label="Hold"
              count={31}
              bg="oklch(0.94 0.07 55)"
              text="oklch(0.42 0.18 55)"
            />
            <MiniChip
              label="Closed"
              count={7}
              bg="oklch(0.92 0.01 240)"
              text="oklch(0.48 0.02 240)"
            />
          </div>
          <div
            className="w-full h-1 rounded-full mt-2"
            style={{ background: "oklch(0.92 0.07 178)" }}
          >
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{ width: "82%", background: "oklch(0.52 0.18 178)" }}
            />
          </div>
        </div>
      </div>

      {/* Card 2: Priority Files */}
      <div
        className="bg-white rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-200 v5-card-enter"
        style={{
          borderTop: "3px solid oklch(0.55 0.20 25)",
          boxShadow: "0 1px 5px oklch(0 0 0 / 0.07)",
          animationDelay: "60ms",
        }}
        data-ocid="v5_summary.card.2"
      >
        <div className="px-3 pt-2.5 pb-2">
          <div className="flex items-start justify-between mb-1.5">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "oklch(0.94 0.07 25)" }}
            >
              <CheckCircle2
                className="w-4 h-4"
                style={{ color: "oklch(0.52 0.20 25)" }}
              />
            </div>
            <div
              className="flex items-center gap-0.5 rounded-full px-1.5 py-0.5"
              style={{ background: "oklch(0.94 0.07 25)" }}
            >
              <TrendingUp
                className="w-2.5 h-2.5"
                style={{ color: "oklch(0.45 0.18 25)" }}
              />
              <span
                className="text-[9px] font-semibold"
                style={{ color: "oklch(0.45 0.18 25)" }}
              >
                +5%
              </span>
            </div>
          </div>
          <p
            className="text-2xl font-extrabold leading-none mb-0.5"
            style={{ color: "oklch(0.52 0.20 25)" }}
          >
            48
          </p>
          <p
            className="text-[10px] font-semibold mb-1.5"
            style={{ color: "oklch(0.45 0.03 240)" }}
          >
            Priority Files
          </p>
          <div className="flex gap-1 flex-wrap">
            <MiniChip
              label="Rush"
              count={22}
              bg="oklch(0.94 0.08 25)"
              text="oklch(0.45 0.20 25)"
            />
            <MiniChip
              label="Priority"
              count={18}
              bg="oklch(0.93 0.10 15)"
              text="oklch(0.45 0.22 15)"
            />
            <MiniChip
              label="Select"
              count={8}
              bg="oklch(0.92 0.07 178)"
              text="oklch(0.38 0.15 178)"
            />
          </div>
          <div
            className="w-full h-1 rounded-full mt-2"
            style={{ background: "oklch(0.94 0.07 25)" }}
          >
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{ width: "38%", background: "oklch(0.55 0.20 25)" }}
            />
          </div>
        </div>
      </div>

      {/* Card 3: File Categories */}
      <div
        className="bg-white rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-200 v5-card-enter"
        style={{
          borderTop: "3px solid oklch(0.52 0.18 145)",
          boxShadow: "0 1px 5px oklch(0 0 0 / 0.07)",
          animationDelay: "120ms",
        }}
        data-ocid="v5_summary.card.3"
      >
        <div className="px-3 pt-2.5 pb-2">
          <div className="flex items-start justify-between mb-1.5">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "oklch(0.92 0.07 145)" }}
            >
              <Layers
                className="w-4 h-4"
                style={{ color: "oklch(0.48 0.18 145)" }}
              />
            </div>
            <span
              className="text-[9px] font-medium px-1.5 py-0.5 rounded-full"
              style={{
                background: "oklch(0.92 0.07 145)",
                color: "oklch(0.42 0.15 145)",
              }}
            >
              100 files
            </span>
          </div>
          <p
            className="text-[10px] font-semibold mb-1.5"
            style={{ color: "oklch(0.45 0.03 240)" }}
          >
            File Categories
          </p>
          <div className="space-y-1">
            {[
              {
                label: "10 YR Search",
                count: 42,
                pct: 42,
                color: "oklch(0.52 0.18 178)",
              },
              {
                label: "20 YR Search",
                count: 28,
                pct: 28,
                color: "oklch(0.48 0.18 145)",
              },
              {
                label: "Run Down",
                count: 18,
                pct: 18,
                color: "oklch(0.52 0.20 300)",
              },
              {
                label: "Other",
                count: 12,
                pct: 12,
                color: "oklch(0.55 0.18 55)",
              },
            ].map((cat) => (
              <div key={cat.label}>
                <div className="flex items-center justify-between">
                  <span
                    className="text-[9px]"
                    style={{ color: "oklch(0.48 0.03 240)" }}
                  >
                    {cat.label}
                  </span>
                  <span
                    className="text-[9px] font-semibold"
                    style={{ color: cat.color }}
                  >
                    {cat.count}
                  </span>
                </div>
                <div
                  className="w-full h-1 rounded-full"
                  style={{ background: "oklch(0.93 0.01 240)" }}
                >
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${cat.pct}%`, background: cat.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card 4: Overdue Alerts */}
      <div
        className="bg-white rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-200 v5-card-enter"
        style={{
          borderTop: "3px solid oklch(0.52 0.20 25)",
          boxShadow: "0 1px 5px oklch(0 0 0 / 0.07)",
          animationDelay: "180ms",
        }}
        data-ocid="v5_summary.card.4"
      >
        <div className="px-3 pt-2.5 pb-2">
          <div className="flex items-start justify-between mb-1.5">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "oklch(0.94 0.06 25)" }}
            >
              <AlertTriangle
                className="w-4 h-4"
                style={{ color: "oklch(0.52 0.20 25)" }}
              />
            </div>
            <div
              className="flex items-center gap-0.5 rounded-full px-1.5 py-0.5"
              style={{ background: "oklch(0.94 0.06 25)" }}
            >
              <TrendingDown
                className="w-2.5 h-2.5"
                style={{ color: "oklch(0.45 0.18 25)" }}
              />
              <span
                className="text-[9px] font-semibold"
                style={{ color: "oklch(0.45 0.18 25)" }}
              >
                +3
              </span>
            </div>
          </div>
          <p
            className="text-2xl font-extrabold leading-none mb-0.5"
            style={{ color: "oklch(0.52 0.20 25)" }}
          >
            7
          </p>
          <p
            className="text-[10px] font-semibold mb-1.5"
            style={{ color: "oklch(0.45 0.03 240)" }}
          >
            Overdue Alerts
          </p>
          <div className="flex gap-1 flex-wrap">
            <MiniChip
              label="Urgent"
              count={3}
              bg="oklch(0.93 0.10 15)"
              text="oklch(0.45 0.22 15)"
            />
            <MiniChip
              label="Warning"
              count={4}
              bg="oklch(0.94 0.07 55)"
              text="oklch(0.42 0.18 55)"
            />
          </div>
          <div
            className="w-full h-1 rounded-full mt-2"
            style={{ background: "oklch(0.94 0.06 25)" }}
          >
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{ width: "6%", background: "oklch(0.52 0.20 25)" }}
            />
          </div>
        </div>
      </div>

      {/* Card 5: Status-Based Files */}
      <div
        className="bg-white rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-200 v5-card-enter"
        style={{
          borderTop: "3px solid oklch(0.52 0.18 290)",
          boxShadow: "0 1px 5px oklch(0 0 0 / 0.07)",
          animationDelay: "240ms",
        }}
        data-ocid="v5_summary.card.5"
      >
        <div className="px-3 pt-2.5 pb-2">
          <div className="flex items-start justify-between mb-1.5">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "oklch(0.93 0.07 290)" }}
            >
              <BarChart3
                className="w-4 h-4"
                style={{ color: "oklch(0.48 0.18 290)" }}
              />
            </div>
            <span
              className="text-[9px] font-medium px-1.5 py-0.5 rounded-full"
              style={{
                background: "oklch(0.93 0.07 290)",
                color: "oklch(0.42 0.15 290)",
              }}
            >
              125 total
            </span>
          </div>
          <p
            className="text-[10px] font-semibold mb-1.5"
            style={{ color: "oklch(0.45 0.03 240)" }}
          >
            Status-Based Files
          </p>
          <div className="space-y-1">
            {[
              {
                label: "Received",
                count: 45,
                pct: 36,
                color: "oklch(0.52 0.18 290)",
              },
              {
                label: "Re-Process",
                count: 38,
                pct: 30,
                color: "oklch(0.52 0.18 220)",
              },
              {
                label: "Batch",
                count: 42,
                pct: 34,
                color: "oklch(0.50 0.16 178)",
              },
            ].map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between">
                  <span
                    className="text-[9px]"
                    style={{ color: "oklch(0.48 0.03 240)" }}
                  >
                    {item.label}
                  </span>
                  <span
                    className="text-[9px] font-semibold"
                    style={{ color: item.color }}
                  >
                    {item.count}
                  </span>
                </div>
                <div
                  className="w-full h-1 rounded-full"
                  style={{ background: "oklch(0.93 0.01 240)" }}
                >
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${item.pct}%`, background: item.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
