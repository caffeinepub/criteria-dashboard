import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Building2,
  Clock,
  FileText,
  GraduationCap,
  LayoutGrid,
  Users,
} from "lucide-react";

const navItems = [
  { icon: LayoutGrid, label: "Criteria", active: true },
  { icon: Clock, label: "HR Attendance Report", active: false },
  { icon: GraduationCap, label: "Training Management", active: false },
  { icon: Users, label: "Employee Management", active: false },
  { icon: FileText, label: "Reports", active: false },
];

export default function Sidebar() {
  return (
    <TooltipProvider delayDuration={200}>
      <aside
        className="flex flex-col shrink-0 w-11 h-full"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.22 0.055 245) 0%, oklch(0.17 0.04 245) 100%)",
        }}
      >
        {/* Logo icon */}
        <div
          className="flex items-center justify-center py-3"
          style={{ borderBottom: "1px solid oklch(0.30 0.04 245)" }}
        >
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{
              background: "oklch(0.50 0.22 262)",
              boxShadow: "0 0 12px oklch(0.50 0.22 262 / 0.5)",
            }}
          >
            <Building2 className="w-3.5 h-3.5 text-white" />
          </div>
        </div>

        {/* User icon at top of nav */}
        <div className="flex items-center justify-center py-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center cursor-pointer"
                style={{ background: "oklch(0.50 0.22 262 / 0.3)" }}
              >
                <Users
                  className="w-3 h-3"
                  style={{ color: "oklch(0.78 0.1 262)" }}
                />
              </div>
            </TooltipTrigger>
            <TooltipContent side="right">Admin User</TooltipContent>
          </Tooltip>
        </div>

        {/* Nav */}
        <nav className="flex-1 flex flex-col items-center py-2 gap-1">
          {navItems.map((item) => (
            <Tooltip key={item.label}>
              <TooltipTrigger asChild>
                <button
                  type="button"
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-150"
                  style={{
                    background: item.active
                      ? "oklch(0.50 0.22 262)"
                      : "transparent",
                    color: item.active ? "white" : "oklch(0.62 0.06 245)",
                  }}
                  onMouseEnter={(e) => {
                    if (!item.active) {
                      (e.currentTarget as HTMLButtonElement).style.background =
                        "oklch(0.28 0.05 245)";
                      (e.currentTarget as HTMLButtonElement).style.color =
                        "white";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!item.active) {
                      (e.currentTarget as HTMLButtonElement).style.background =
                        "transparent";
                      (e.currentTarget as HTMLButtonElement).style.color =
                        "oklch(0.62 0.06 245)";
                    }
                  }}
                  data-ocid={`sidebar.${item.label.toLowerCase().replace(/\s+/g, "_")}.link`}
                >
                  <item.icon className="w-4 h-4" />
                </button>
              </TooltipTrigger>
              <TooltipContent side="right">{item.label}</TooltipContent>
            </Tooltip>
          ))}
        </nav>
      </aside>
    </TooltipProvider>
  );
}
