import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Building2,
  Clock,
  FileText,
  GraduationCap,
  LayoutGrid,
  LogOut,
  Users,
} from "lucide-react";

const navItems = [
  { icon: LayoutGrid, label: "Criteria", active: true },
  { icon: Clock, label: "HR Attendance Report", active: false },
  { icon: GraduationCap, label: "Training Management", active: false },
  { icon: Users, label: "Employee Management", active: false },
  { icon: FileText, label: "Reports", active: false },
];

export default function SidebarV5() {
  return (
    <aside
      className="flex flex-col shrink-0 w-48"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.22 0.10 178) 0%, oklch(0.16 0.08 178) 100%)",
        height: "100vh",
        minHeight: "100%",
        position: "sticky",
        top: 0,
        alignSelf: "stretch",
      }}
    >
      {/* Logo area */}
      <div
        className="flex items-center gap-2.5 px-4 py-4"
        style={{ borderBottom: "1px solid oklch(0.30 0.07 178)" }}
      >
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
          style={{
            background: "oklch(0.52 0.18 178)",
            boxShadow: "0 0 16px oklch(0.52 0.18 178 / 0.55)",
          }}
        >
          <Building2 className="w-4 h-4 text-white" />
        </div>
        <div>
          <p
            className="text-sm font-bold leading-tight"
            style={{ color: "white" }}
          >
            Criteria
          </p>
          <p
            className="text-[10px] leading-tight"
            style={{ color: "oklch(0.68 0.08 178)" }}
          >
            Dashboard
          </p>
        </div>
      </div>

      {/* Nav items */}
      <nav className="flex-1 flex flex-col py-3 gap-0.5 px-2">
        {navItems.map((item) => (
          <button
            key={item.label}
            type="button"
            className="flex items-center gap-2.5 px-3 py-2 rounded-lg transition-all duration-150 text-left w-full"
            style={{
              background: item.active ? "oklch(0.52 0.18 178)" : "transparent",
              color: item.active ? "white" : "oklch(0.68 0.07 178)",
              boxShadow: item.active
                ? "0 2px 8px oklch(0.52 0.18 178 / 0.4)"
                : "none",
            }}
            onMouseEnter={(e) => {
              if (!item.active) {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "oklch(0.28 0.08 178)";
                (e.currentTarget as HTMLButtonElement).style.color = "white";
              }
            }}
            onMouseLeave={(e) => {
              if (!item.active) {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "transparent";
                (e.currentTarget as HTMLButtonElement).style.color =
                  "oklch(0.68 0.07 178)";
              }
            }}
            data-ocid={`v5_sidebar.${item.label.toLowerCase().replace(/\s+/g, "_")}.link`}
          >
            <item.icon className="w-4 h-4 shrink-0" />
            <span className="text-xs font-medium truncate">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* User profile at bottom */}
      <div
        className="px-3 py-3"
        style={{ borderTop: "1px solid oklch(0.30 0.07 178)" }}
      >
        <div className="flex items-center gap-2">
          <Avatar className="w-7 h-7 shrink-0">
            <AvatarFallback
              className="text-xs font-bold text-white"
              style={{ background: "oklch(0.52 0.18 178)" }}
            >
              PR
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p
              className="text-xs font-semibold leading-tight truncate"
              style={{ color: "white" }}
            >
              Pruthvi
            </p>
            <p
              className="text-[10px] leading-tight"
              style={{ color: "oklch(0.62 0.07 178)" }}
            >
              Admin
            </p>
          </div>
          <button
            type="button"
            className="w-6 h-6 flex items-center justify-center rounded transition-colors hover:bg-white/10"
            style={{ color: "oklch(0.62 0.07 178)" }}
            data-ocid="v5_sidebar.logout.button"
          >
            <LogOut className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
}
