import {
  AlertTriangle,
  CheckCircle2,
  Clock,
  FileText,
  Layers,
  Target,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

function RingGauge({
  pct,
  color,
  size = 48,
}: { pct: number; color: string; size?: number }) {
  const r = (size - 8) / 2;
  const circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;
  return (
    <svg
      width={size}
      height={size}
      style={{ transform: "rotate(-90deg)" }}
      aria-label="gauge"
    >
      <title>gauge</title>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="oklch(0.93 0.01 240)"
        strokeWidth={5}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={color}
        strokeWidth={5}
        strokeDasharray={`${dash} ${circ}`}
        strokeLinecap="round"
        style={{ transition: "stroke-dasharray 0.8s ease" }}
      />
    </svg>
  );
}

function StatPill({
  label,
  value,
  color,
}: { label: string; value: string | number; color: string }) {
  return (
    <div
      className="flex flex-col items-center px-2 py-1 rounded-lg"
      style={{ background: "oklch(0.96 0.01 240)" }}
    >
      <span className="text-sm font-bold" style={{ color }}>
        {value}
      </span>
      <span
        className="text-[9px] font-medium"
        style={{ color: "oklch(0.55 0.02 240)" }}
      >
        {label}
      </span>
    </div>
  );
}

export default function SummaryCards() {
  return (
    <div className="grid grid-cols-4 gap-3">
      {/* Card 1: Total Orders - ring gauge style */}
      <div
        className="bg-white rounded-xl p-4 flex flex-col hover:shadow-md transition-shadow duration-200"
        style={{
          border: "1px solid oklch(0.91 0.01 240)",
          boxShadow: "0 1px 4px oklch(0 0 0 / 0.05)",
        }}
        data-ocid="summary.card.1"
      >
        <div className="flex items-center justify-between mb-3">
          <div>
            <p
              className="text-[10px] font-semibold uppercase tracking-wider"
              style={{ color: "oklch(0.55 0.03 240)" }}
            >
              Total Orders
            </p>
            <p
              className="text-2xl font-black mt-0.5"
              style={{ color: "oklch(0.35 0.20 262)" }}
            >
              125
            </p>
          </div>
          <RingGauge pct={69} color="oklch(0.50 0.20 262)" />
        </div>
        <div className="flex gap-1.5 flex-wrap">
          <StatPill label="Open" value={87} color="oklch(0.42 0.15 145)" />
          <StatPill label="Hold" value={31} color="oklch(0.48 0.18 55)" />
          <StatPill label="Closed" value={7} color="oklch(0.50 0.02 240)" />
        </div>
        <div className="flex items-center gap-1 mt-3">
          <TrendingUp
            className="w-3 h-3"
            style={{ color: "oklch(0.42 0.15 145)" }}
          />
          <span
            className="text-[10px] font-semibold"
            style={{ color: "oklch(0.42 0.15 145)" }}
          >
            +8% vs yesterday
          </span>
        </div>
      </div>

      {/* Card 2: Priority Files - stacked bar style */}
      <div
        className="bg-white rounded-xl p-4 flex flex-col hover:shadow-md transition-shadow duration-200"
        style={{
          border: "1px solid oklch(0.91 0.01 240)",
          boxShadow: "0 1px 4px oklch(0 0 0 / 0.05)",
        }}
        data-ocid="summary.card.2"
      >
        <div className="flex items-center justify-between mb-2">
          <div>
            <p
              className="text-[10px] font-semibold uppercase tracking-wider"
              style={{ color: "oklch(0.55 0.03 240)" }}
            >
              Priority Files
            </p>
            <p
              className="text-2xl font-black mt-0.5"
              style={{ color: "oklch(0.42 0.20 25)" }}
            >
              48
            </p>
          </div>
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ background: "oklch(0.94 0.07 25)" }}
          >
            <CheckCircle2
              className="w-5 h-5"
              style={{ color: "oklch(0.52 0.20 25)" }}
            />
          </div>
        </div>
        {/* Stacked bar */}
        <div
          className="w-full h-3 rounded-full overflow-hidden flex gap-0.5 mb-2"
          style={{ background: "oklch(0.93 0.01 240)" }}
        >
          <div
            style={{
              width: `${(22 / 48) * 100}%`,
              background: "oklch(0.55 0.20 25)",
              borderRadius: "9999px 0 0 9999px",
            }}
          />
          <div
            style={{
              width: `${(18 / 48) * 100}%`,
              background: "oklch(0.52 0.18 15)",
            }}
          />
          <div
            style={{
              width: `${(8 / 48) * 100}%`,
              background: "oklch(0.52 0.18 262)",
              borderRadius: "0 9999px 9999px 0",
            }}
          />
        </div>
        <div className="flex items-center gap-2 text-[10px]">
          <span className="flex items-center gap-1">
            <span
              className="w-2 h-2 rounded-sm inline-block"
              style={{ background: "oklch(0.55 0.20 25)" }}
            />
            Rush 22
          </span>
          <span className="flex items-center gap-1">
            <span
              className="w-2 h-2 rounded-sm inline-block"
              style={{ background: "oklch(0.52 0.18 15)" }}
            />
            Priority 18
          </span>
          <span className="flex items-center gap-1">
            <span
              className="w-2 h-2 rounded-sm inline-block"
              style={{ background: "oklch(0.52 0.18 262)" }}
            />
            Select 8
          </span>
        </div>
        <div className="flex items-center gap-1 mt-auto pt-2">
          <TrendingUp
            className="w-3 h-3"
            style={{ color: "oklch(0.45 0.18 25)" }}
          />
          <span
            className="text-[10px] font-semibold"
            style={{ color: "oklch(0.45 0.18 25)" }}
          >
            +5% this week
          </span>
        </div>
      </div>

      {/* Card 3: File Categories - horizontal bar list */}
      <div
        className="bg-white rounded-xl p-4 flex flex-col hover:shadow-md transition-shadow duration-200"
        style={{
          border: "1px solid oklch(0.91 0.01 240)",
          boxShadow: "0 1px 4px oklch(0 0 0 / 0.05)",
        }}
        data-ocid="summary.card.3"
      >
        <div className="flex items-center justify-between mb-3">
          <div>
            <p
              className="text-[10px] font-semibold uppercase tracking-wider"
              style={{ color: "oklch(0.55 0.03 240)" }}
            >
              File Categories
            </p>
            <p
              className="text-2xl font-black mt-0.5"
              style={{ color: "oklch(0.40 0.18 300)" }}
            >
              100
            </p>
          </div>
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ background: "oklch(0.93 0.06 300)" }}
          >
            <Layers
              className="w-5 h-5"
              style={{ color: "oklch(0.48 0.18 300)" }}
            />
          </div>
        </div>
        <div className="space-y-2">
          {[
            {
              label: "10 YR Search",
              count: 42,
              pct: 42,
              color: "oklch(0.50 0.20 262)",
            },
            {
              label: "20 YR Search",
              count: 28,
              pct: 28,
              color: "oklch(0.50 0.18 178)",
            },
            {
              label: "Run Down",
              count: 18,
              pct: 18,
              color: "oklch(0.50 0.18 300)",
            },
            {
              label: "Other",
              count: 12,
              pct: 12,
              color: "oklch(0.52 0.16 55)",
            },
          ].map((c) => (
            <div key={c.label} className="flex items-center gap-2">
              <span
                className="text-[10px] w-20 shrink-0"
                style={{ color: "oklch(0.45 0.03 240)" }}
              >
                {c.label}
              </span>
              <div
                className="flex-1 h-2 rounded-full"
                style={{ background: "oklch(0.93 0.01 240)" }}
              >
                <div
                  className="h-full rounded-full"
                  style={{ width: `${c.pct}%`, background: c.color }}
                />
              </div>
              <span
                className="text-[10px] font-bold w-5 text-right"
                style={{ color: c.color }}
              >
                {c.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Card 4: Overdue Alerts - target vs actual */}
      <div
        className="bg-white rounded-xl p-4 flex flex-col hover:shadow-md transition-shadow duration-200"
        style={{
          border: "1px solid oklch(0.91 0.01 240)",
          boxShadow: "0 1px 4px oklch(0 0 0 / 0.05)",
        }}
        data-ocid="summary.card.4"
      >
        <div className="flex items-center justify-between mb-3">
          <div>
            <p
              className="text-[10px] font-semibold uppercase tracking-wider"
              style={{ color: "oklch(0.55 0.03 240)" }}
            >
              Overdue Alerts
            </p>
            <p
              className="text-2xl font-black mt-0.5"
              style={{ color: "oklch(0.45 0.22 15)" }}
            >
              7
            </p>
          </div>
          <RingGauge pct={35} color="oklch(0.52 0.22 15)" />
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: "oklch(0.52 0.22 15)" }}
              />
              <span
                className="text-[10px]"
                style={{ color: "oklch(0.45 0.03 240)" }}
              >
                Urgent
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="w-20 h-1.5 rounded-full"
                style={{ background: "oklch(0.93 0.01 240)" }}
              >
                <div
                  className="h-full rounded-full"
                  style={{ width: "43%", background: "oklch(0.52 0.22 15)" }}
                />
              </div>
              <span
                className="text-[10px] font-bold"
                style={{ color: "oklch(0.45 0.20 15)" }}
              >
                3
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: "oklch(0.55 0.18 55)" }}
              />
              <span
                className="text-[10px]"
                style={{ color: "oklch(0.45 0.03 240)" }}
              >
                Warning
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="w-20 h-1.5 rounded-full"
                style={{ background: "oklch(0.93 0.01 240)" }}
              >
                <div
                  className="h-full rounded-full"
                  style={{ width: "57%", background: "oklch(0.55 0.18 55)" }}
                />
              </div>
              <span
                className="text-[10px] font-bold"
                style={{ color: "oklch(0.48 0.16 55)" }}
              >
                4
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1 mt-3">
          <TrendingDown
            className="w-3 h-3"
            style={{ color: "oklch(0.50 0.18 15)" }}
          />
          <span
            className="text-[10px] font-semibold"
            style={{ color: "oklch(0.50 0.18 15)" }}
          >
            +3 since yesterday
          </span>
        </div>
      </div>
    </div>
  );
}
