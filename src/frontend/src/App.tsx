import Criteria from "@/components/Criteria";
import FilterSidebar from "@/components/FilterSidebar";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import { Toaster } from "@/components/ui/sonner";
import CriteriaV5 from "@/components/v5/CriteriaV5";
import SidebarV5 from "@/components/v5/SidebarV5";
import { useState } from "react";

export default function App() {
  const [activeTab, setActiveTab] = useState<"users" | "groups">("users");
  const [version, setVersion] = useState<"v5" | "v6">("v6");

  const isV5 = version === "v5";

  return (
    <div
      className="flex w-screen overflow-hidden"
      style={{
        height: "100vh",
        background: isV5 ? "oklch(0.955 0.012 178)" : "oklch(0.955 0.006 240)",
        transition: "background 0.4s ease",
      }}
    >
      {/* Sidebar */}
      {isV5 ? <SidebarV5 /> : <Sidebar />}

      {/* V6-only: filter sidebar */}
      {!isV5 && <FilterSidebar mode={activeTab} />}

      {/* Main content column */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <TopBar version={version} onVersionChange={setVersion} />
        <main className="flex-1 overflow-y-auto p-3">
          {isV5 ? (
            <CriteriaV5 activeTab={activeTab} onTabChange={setActiveTab} />
          ) : (
            <Criteria activeTab={activeTab} onTabChange={setActiveTab} />
          )}
        </main>
        <footer
          className="shrink-0 px-4 py-2 text-center text-xs"
          style={{
            borderTop: "1px solid oklch(0.90 0.01 240)",
            background: "white",
            color: "oklch(0.55 0.02 240)",
          }}
        >
          © {new Date().getFullYear()}. Built with{" "}
          <span style={{ color: "oklch(0.58 0.18 25)" }}>♥</span> using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noreferrer"
            className="underline"
            style={{
              color: isV5 ? "oklch(0.52 0.18 178)" : "oklch(0.48 0.2 262)",
            }}
          >
            caffeine.ai
          </a>
        </footer>
      </div>
      <Toaster />
    </div>
  );
}
