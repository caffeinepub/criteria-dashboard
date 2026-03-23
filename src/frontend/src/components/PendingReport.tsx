import OrderTab from "@/components/OrderTab";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, UsersRound } from "lucide-react";

export default function PendingReport() {
  return (
    <div className="space-y-4 animate-fade-in">
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground tracking-tight">
          Pending Report
        </h1>
        <p className="text-muted-foreground text-sm mt-0.5">
          Monitor and manage pending orders across users and groups
        </p>
      </div>

      <Tabs defaultValue="users" className="w-full">
        <TabsList className="bg-card border border-border p-1 h-10 gap-1 rounded-lg shadow-xs">
          <TabsTrigger
            value="users"
            data-ocid="pending.users.tab"
            className="flex items-center gap-2 text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-sm rounded-md px-4"
          >
            <Users className="w-3.5 h-3.5" />
            Users
          </TabsTrigger>
          <TabsTrigger
            value="groups"
            data-ocid="pending.groups.tab"
            className="flex items-center gap-2 text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-sm rounded-md px-4"
          >
            <UsersRound className="w-3.5 h-3.5" />
            Groups
          </TabsTrigger>
        </TabsList>

        <TabsContent value="users" className="mt-4">
          <OrderTab mode="users" />
        </TabsContent>
        <TabsContent value="groups" className="mt-4">
          <OrderTab mode="groups" />
        </TabsContent>
      </Tabs>
    </div>
  );
}
