import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Bell, ChevronRight } from "lucide-react";

interface TopBarProps {
  version?: "v5" | "v6";
  onVersionChange?: (v: "v5" | "v6") => void;
}

export default function TopBar({
  version = "v6",
  onVersionChange,
}: TopBarProps) {
  const isV5 = version === "v5";
  const accentColor = isV5 ? "oklch(0.52 0.18 178)" : "oklch(0.48 0.22 262)";
  const activeAvatarBg = isV5 ? "oklch(0.52 0.18 178)" : "oklch(0.50 0.22 262)";
  const dotColor = isV5 ? "oklch(0.52 0.18 178)" : "oklch(0.50 0.22 262)";

  return (
    <header
      className="shrink-0 bg-white"
      style={{ borderBottom: "1px solid oklch(0.90 0.01 240)" }}
    >
      <div className="flex items-center justify-between px-4 py-2">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1 text-sm">
          <span style={{ color: "oklch(0.60 0.02 240)" }}>Dashboard</span>
          <ChevronRight
            className="w-3.5 h-3.5"
            style={{ color: "oklch(0.70 0.01 240)" }}
          />
          <span className="font-semibold" style={{ color: accentColor }}>
            Criteria
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Version switcher pill */}
          {onVersionChange && (
            <div
              className="flex items-center rounded-full p-0.5 mr-1"
              style={{
                background: "oklch(0.94 0.02 240)",
                border: "1px solid oklch(0.88 0.02 240)",
              }}
              data-ocid="topbar.version.toggle"
            >
              {(["v5", "v6"] as const).map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => onVersionChange(v)}
                  className="px-3 py-0.5 rounded-full text-[11px] font-bold transition-all duration-200"
                  style={{
                    background:
                      version === v
                        ? v === "v5"
                          ? "oklch(0.52 0.18 178)"
                          : "oklch(0.48 0.22 262)"
                        : "transparent",
                    color: version === v ? "white" : "oklch(0.52 0.04 240)",
                    boxShadow:
                      version === v ? "0 1px 4px oklch(0 0 0 / 0.18)" : "none",
                  }}
                  data-ocid={`topbar.version_${v}.button`}
                >
                  {v.toUpperCase()}
                </button>
              ))}
            </div>
          )}

          {/* Bell */}
          <button
            type="button"
            className="relative w-7 h-7 flex items-center justify-center rounded-md transition-colors hover:bg-gray-100"
            style={{ color: "oklch(0.55 0.02 240)" }}
            aria-label="Notifications"
            data-ocid="topbar.notifications.button"
          >
            <Bell className="w-4 h-4" />
            <span
              className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full"
              style={{ background: dotColor }}
            />
          </button>

          {/* Avatar + user */}
          <div
            className="flex items-center gap-2 pl-2"
            style={{ borderLeft: "1px solid oklch(0.90 0.01 240)" }}
          >
            <Avatar className="w-7 h-7">
              <AvatarFallback
                className="text-xs font-bold text-white"
                style={{ background: activeAvatarBg }}
              >
                PR
              </AvatarFallback>
            </Avatar>
            <div>
              <p
                className="text-xs font-semibold leading-tight"
                style={{ color: "oklch(0.25 0.04 245)" }}
              >
                Pruthvi
              </p>
              <p
                className="text-[10px]"
                style={{ color: "oklch(0.55 0.02 240)" }}
              >
                Admin
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="h-6 text-[10px] font-semibold px-2 rounded-full"
              style={{
                background: "oklch(0.92 0.07 145)",
                color: "oklch(0.42 0.17 145)",
                border: "1px solid oklch(0.78 0.12 145)",
              }}
              data-ocid="topbar.activity.button"
            >
              ● Online
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
