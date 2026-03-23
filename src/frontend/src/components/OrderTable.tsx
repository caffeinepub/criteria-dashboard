import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import {
  ChevronDown,
  ChevronUp,
  ChevronsUpDown,
  Download,
  Info,
  Pencil,
  Search,
  SlidersHorizontal,
  Trash2,
} from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";

type SortDir = "asc" | "desc" | null;

interface Order {
  id: number;
  user: string;
  client: string;
  product: string;
  state: string;
  county: string;
  createdBy: string;
  createdDate: string;
  modifiedBy: string;
  modifiedDate: string;
  orderStatus: "RECEIVED" | "RE-PROCESS" | "BATCH ORDERS";
  subStatus: string;
  status: "Open" | "Hold" | "Closed";
}

const MOCK_ORDERS: Order[] = [
  {
    id: 1,
    user: "chandana.elukotappa",
    client: "First American Title",
    product: "Include: 10 YEAR SEARCH",
    state: "Alabama",
    county: "Montgomery",
    createdBy: "admin",
    createdDate: "03/10/2026",
    modifiedBy: "chandana.e",
    modifiedDate: "03/15/2026",
    orderStatus: "RECEIVED",
    subStatus: "Pending",
    status: "Open",
  },
  {
    id: 2,
    user: "abhishek.D",
    client: "Stewart Title",
    product: "Include: 20 YEAR SEARCH",
    state: "Texas",
    county: "Harris",
    createdBy: "admin",
    createdDate: "03/09/2026",
    modifiedBy: "abhishek.d",
    modifiedDate: "03/14/2026",
    orderStatus: "RE-PROCESS",
    subStatus: "In Progress",
    status: "Hold",
  },
  {
    id: 3,
    user: "amrutha",
    client: "Old Republic Title",
    product: "Include: 180 Real Estate",
    state: "Maryland",
    county: "Jefferson",
    createdBy: "supervisor",
    createdDate: "03/08/2026",
    modifiedBy: "amrutha",
    modifiedDate: "03/13/2026",
    orderStatus: "BATCH ORDERS",
    subStatus: "Pending",
    status: "Open",
  },
  {
    id: 4,
    user: "amjad.khan",
    client: "Chicago Title",
    product: "Include: 10 YEAR SEARCH",
    state: "California",
    county: "Los Angeles",
    createdBy: "admin",
    createdDate: "03/07/2026",
    modifiedBy: "amjad.khan",
    modifiedDate: "03/12/2026",
    orderStatus: "RECEIVED",
    subStatus: "Under Review",
    status: "Hold",
  },
  {
    id: 5,
    user: "priya.sharma",
    client: "Fidelity National Title",
    product: "Include: 20 YEAR SEARCH",
    state: "Alabama",
    county: "Jefferson",
    createdBy: "supervisor",
    createdDate: "03/06/2026",
    modifiedBy: "priya.s",
    modifiedDate: "03/11/2026",
    orderStatus: "RECEIVED",
    subStatus: "Pending",
    status: "Open",
  },
  {
    id: 6,
    user: "ravi.kumar",
    client: "Stewart Title",
    product: "Include: 180 Real Estate",
    state: "Texas",
    county: "Bexar",
    createdBy: "admin",
    createdDate: "03/05/2026",
    modifiedBy: "ravi.k",
    modifiedDate: "03/10/2026",
    orderStatus: "BATCH ORDERS",
    subStatus: "In Progress",
    status: "Closed",
  },
  {
    id: 7,
    user: "sanjana.reddy",
    client: "First American Title",
    product: "Include: 10 YEAR SEARCH",
    state: "Texas",
    county: "Travis",
    createdBy: "supervisor",
    createdDate: "03/04/2026",
    modifiedBy: "sanjana.r",
    modifiedDate: "03/09/2026",
    orderStatus: "RE-PROCESS",
    subStatus: "Pending",
    status: "Open",
  },
  {
    id: 8,
    user: "vikram.nair",
    client: "Old Republic Title",
    product: "Include: 20 YEAR SEARCH",
    state: "Maryland",
    county: "Prince George",
    createdBy: "admin",
    createdDate: "03/03/2026",
    modifiedBy: "vikram.n",
    modifiedDate: "03/08/2026",
    orderStatus: "RECEIVED",
    subStatus: "Under Review",
    status: "Hold",
  },
];

function StatusChip({ status }: { status: Order["status"] }) {
  const map: Record<string, { bg: string; color: string; border: string }> = {
    Open: {
      bg: "oklch(0.92 0.06 145)",
      color: "oklch(0.35 0.17 145)",
      border: "oklch(0.78 0.12 145)",
    },
    Hold: {
      bg: "oklch(0.93 0.06 55)",
      color: "oklch(0.42 0.16 55)",
      border: "oklch(0.8 0.12 55)",
    },
    Closed: {
      bg: "oklch(0.94 0.005 240)",
      color: "oklch(0.45 0.01 240)",
      border: "oklch(0.85 0.01 240)",
    },
  };
  const s = map[status];
  return (
    <span
      className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold"
      style={{
        background: s.bg,
        color: s.color,
        border: `1px solid ${s.border}`,
      }}
    >
      {status}
    </span>
  );
}

function OrderStatusChip({ status }: { status: Order["orderStatus"] }) {
  const map: Record<string, { bg: string; color: string; border: string }> = {
    RECEIVED: {
      bg: "oklch(0.92 0.07 178)",
      color: "oklch(0.38 0.18 178)",
      border: "oklch(0.72 0.12 178)",
    },
    "RE-PROCESS": {
      bg: "oklch(0.92 0.05 195)",
      color: "oklch(0.38 0.18 195)",
      border: "oklch(0.75 0.1 195)",
    },
    "BATCH ORDERS": {
      bg: "oklch(0.93 0.06 25)",
      color: "oklch(0.45 0.18 25)",
      border: "oklch(0.8 0.12 25)",
    },
  };
  const s = map[status];
  return (
    <span
      className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold whitespace-nowrap"
      style={{
        background: s.bg,
        color: s.color,
        border: `1px solid ${s.border}`,
      }}
    >
      {status}
    </span>
  );
}

type SortKey = keyof Order;

function SortIcon({ dir }: { dir: SortDir }) {
  if (dir === "asc")
    return (
      <ChevronUp
        className="w-3 h-3"
        style={{ color: "oklch(0.52 0.18 178)" }}
      />
    );
  if (dir === "desc")
    return (
      <ChevronDown
        className="w-3 h-3"
        style={{ color: "oklch(0.52 0.18 178)" }}
      />
    );
  return <ChevronsUpDown className="w-3 h-3 text-muted-foreground" />;
}

export default function OrderTable() {
  const [orders, setOrders] = useState<Order[]>(MOCK_ORDERS);
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState<SortKey | null>(null);
  const [sortDir, setSortDir] = useState<SortDir>(null);
  const [page] = useState(1);
  const pageSize = 10;

  const toggleSelect = (id: number) =>
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const allChecked = orders.length > 0 && selected.size === orders.length;
  const someChecked = selected.size > 0 && selected.size < orders.length;

  const toggleAll = () =>
    setSelected(allChecked ? new Set() : new Set(orders.map((o) => o.id)));

  const handleSort = (key: SortKey) => {
    if (sortKey !== key) {
      setSortKey(key);
      setSortDir("asc");
    } else if (sortDir === "asc") {
      setSortDir("desc");
    } else {
      setSortKey(null);
      setSortDir(null);
    }
  };

  const filtered = useMemo(() => {
    let data = orders.filter(
      (o) =>
        !search ||
        Object.values(o).some((v) =>
          String(v).toLowerCase().includes(search.toLowerCase()),
        ),
    );
    if (sortKey && sortDir) {
      data = [...data].sort((a, b) => {
        const av = String(a[sortKey]).toLowerCase();
        const bv = String(b[sortKey]).toLowerCase();
        return sortDir === "asc" ? av.localeCompare(bv) : bv.localeCompare(av);
      });
    }
    return data;
  }, [orders, search, sortKey, sortDir]);

  const paged = filtered.slice((page - 1) * pageSize, page * pageSize);

  const deleteSelected = () => {
    const count = selected.size;
    setOrders((prev) => prev.filter((o) => !selected.has(o.id)));
    setSelected(new Set());
    toast.success(`${count} order(s) deleted`);
  };

  const deleteAll = () => {
    setOrders([]);
    setSelected(new Set());
    toast.success("All orders deleted");
  };

  const handleEdit = (id: number) => toast.info(`Editing order #${id}`);

  const exportCSV = () => {
    const headers = [
      "SLNO",
      "USER",
      "CLIENT",
      "PRODUCT",
      "STATE",
      "COUNTY",
      "CREATED BY",
      "CREATED DATE",
      "ORDER STATUS",
      "STATUS",
    ];
    const rows = orders.map((o) =>
      [
        o.id,
        o.user,
        o.client,
        o.product,
        o.state,
        o.county,
        o.createdBy,
        o.createdDate,
        o.orderStatus,
        o.status,
      ].join(","),
    );
    const csv = [headers.join(","), ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "criteria_orders.csv";
    a.click();
    URL.revokeObjectURL(url);
    toast.success("CSV exported");
  };

  const TH = ({
    label,
    sortable,
    sk,
  }: { label: string; sortable?: boolean; sk?: SortKey }) => (
    <th
      className={cn(
        "px-3 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wider whitespace-nowrap border-b",
        sortable &&
          "cursor-pointer select-none hover:text-foreground transition-colors duration-150",
      )}
      style={{
        background: "oklch(0.95 0.04 178)",
        color: "oklch(0.38 0.14 178)",
      }}
      onClick={sortable && sk ? () => handleSort(sk) : undefined}
      onKeyDown={
        sortable && sk
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") handleSort(sk);
            }
          : undefined
      }
    >
      <div className="flex items-center gap-1">
        {label}
        {sortable && sk && <SortIcon dir={sortKey === sk ? sortDir : null} />}
      </div>
    </th>
  );

  return (
    <TooltipProvider>
      <div className="clean-card rounded-lg overflow-hidden">
        {/* Toolbar */}
        <div className="flex items-center justify-between px-3.5 py-2.5 gap-3 flex-wrap border-b border-border bg-white">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <Checkbox
                checked={allChecked}
                ref={(el) => {
                  if (el) (el as HTMLInputElement).indeterminate = someChecked;
                }}
                onCheckedChange={toggleAll}
                id="select-all-cb"
                data-ocid="table.selectall.checkbox"
              />
              <label
                htmlFor="select-all-cb"
                className="text-xs font-medium cursor-pointer text-muted-foreground"
              >
                Select All
              </label>
            </div>

            <div className="h-4 w-px bg-border" />

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  size="sm"
                  disabled={selected.size === 0}
                  variant="ghost"
                  className="gap-1.5 text-xs h-7 border"
                  style={
                    selected.size > 0
                      ? {
                          color: "oklch(0.45 0.18 25)",
                          borderColor: "oklch(0.8 0.12 25)",
                          background: "oklch(0.93 0.06 25)",
                        }
                      : {}
                  }
                  data-ocid="table.deleteselected.button"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Delete Selected
                  {selected.size > 0 && (
                    <span
                      className="ml-1 rounded px-1 text-[10px] font-bold"
                      style={{
                        background: "oklch(0.8 0.12 25)",
                        color: "oklch(0.45 0.18 25)",
                      }}
                    >
                      {selected.size}
                    </span>
                  )}
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent data-ocid="table.deleteselected.dialog">
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete Selected Orders</AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to delete {selected.size} selected
                    order(s)? This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel data-ocid="table.deleteselected.cancel.button">
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction
                    onClick={deleteSelected}
                    className="bg-destructive hover:bg-destructive/90"
                    data-ocid="table.deleteselected.confirm.button"
                  >
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-1.5 text-xs h-7 border"
                  style={{
                    color: "oklch(0.45 0.18 25)",
                    borderColor: "oklch(0.85 0.06 25)",
                  }}
                  data-ocid="table.deleteall.button"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Delete All
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent data-ocid="table.deleteall.dialog">
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete All Orders</AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to delete ALL {orders.length} orders?
                    This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel data-ocid="table.deleteall.cancel.button">
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction
                    onClick={deleteAll}
                    className="bg-destructive hover:bg-destructive/90"
                    data-ocid="table.deleteall.confirm.button"
                  >
                    Delete All
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>

          <div className="flex items-center gap-2">
            <span
              className="text-xs font-bold px-2 py-0.5 rounded-full"
              style={{
                background: "oklch(0.92 0.07 178)",
                color: "oklch(0.38 0.18 178)",
                border: "1px solid oklch(0.72 0.12 178)",
              }}
            >
              {filtered.length} rows
            </span>
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
              <Input
                placeholder="Search orders..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-8 h-7 text-xs w-44"
                data-ocid="table.search.input"
              />
            </div>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-7 w-7 p-0 border border-border"
                  onClick={exportCSV}
                  data-ocid="table.export.button"
                >
                  <Download className="w-3.5 h-3.5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Export CSV</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-7 w-7 p-0 border border-border"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Column Filters</TooltipContent>
            </Tooltip>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-xs">
            <thead>
              <tr>
                <th
                  className="w-9 px-3 py-2.5 border-b"
                  style={{ background: "oklch(0.95 0.04 178)" }}
                >
                  <Checkbox checked={allChecked} onCheckedChange={toggleAll} />
                </th>
                <TH label="SL" sortable sk="id" />
                <TH label="User" sortable sk="user" />
                <TH label="Client" sortable sk="client" />
                <TH label="Product" sortable sk="product" />
                <TH label="State" sortable sk="state" />
                <TH label="County" sortable sk="county" />
                <TH label="Created By / Date" sortable sk="createdDate" />
                <TH label="Modified By / Date" sortable sk="modifiedDate" />
                <TH label="Order Status" sortable sk="orderStatus" />
                <TH label="Sub Status" sortable sk="subStatus" />
                <TH label="Status" sortable sk="status" />
                <th
                  className="px-3 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wider border-b"
                  style={{
                    background: "oklch(0.95 0.04 178)",
                    color: "oklch(0.38 0.14 178)",
                  }}
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {paged.length === 0 ? (
                <tr>
                  <td
                    colSpan={13}
                    className="px-4 py-10 text-center"
                    data-ocid="table.empty_state"
                  >
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-muted">
                        <Search className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <p className="text-sm font-semibold font-display text-foreground">
                        No orders found
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Try adjusting your search or filters
                      </p>
                    </div>
                  </td>
                </tr>
              ) : (
                paged.map((order, idx) => (
                  <tr
                    key={order.id}
                    className={cn(
                      "table-row-animated transition-colors duration-100 row-hover border-b border-border last:border-b-0",
                      selected.has(order.id) && "row-selected",
                      idx % 2 === 1 && !selected.has(order.id) && "bg-muted/40",
                    )}
                    data-ocid={`table.item.${idx + 1}`}
                  >
                    <td className="px-3 py-2">
                      <Checkbox
                        checked={selected.has(order.id)}
                        onCheckedChange={() => toggleSelect(order.id)}
                        data-ocid={`table.checkbox.${idx + 1}`}
                      />
                    </td>
                    <td className="px-3 py-2 text-muted-foreground font-medium">
                      {(page - 1) * pageSize + idx + 1}
                    </td>
                    <td className="px-3 py-2 font-semibold text-foreground">
                      {order.user}
                    </td>
                    <td className="px-3 py-2 text-muted-foreground">
                      {order.client}
                    </td>
                    <td className="px-3 py-2">
                      <span className="inline-block max-w-[160px] truncate text-muted-foreground">
                        {order.product}
                      </span>
                    </td>
                    <td className="px-3 py-2 text-muted-foreground">
                      {order.state}
                    </td>
                    <td className="px-3 py-2 text-muted-foreground">
                      {order.county}
                    </td>
                    <td className="px-3 py-2">
                      <div className="text-foreground">{order.createdBy}</div>
                      <div className="text-[10px] text-muted-foreground">
                        {order.createdDate}
                      </div>
                    </td>
                    <td className="px-3 py-2">
                      <div className="text-foreground">{order.modifiedBy}</div>
                      <div className="text-[10px] text-muted-foreground">
                        {order.modifiedDate}
                      </div>
                    </td>
                    <td className="px-3 py-2">
                      <OrderStatusChip status={order.orderStatus} />
                    </td>
                    <td className="px-3 py-2 text-muted-foreground">
                      {order.subStatus}
                    </td>
                    <td className="px-3 py-2">
                      <StatusChip status={order.status} />
                    </td>
                    <td className="px-3 py-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0 hover:bg-accent"
                        style={{ color: "oklch(0.52 0.18 178)" }}
                        onClick={() => handleEdit(order.id)}
                        data-ocid={`table.edit_button.${idx + 1}`}
                      >
                        <Pencil className="w-3.5 h-3.5" />
                      </Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-3.5 py-2.5 border-t border-border bg-white">
          <p className="text-xs text-muted-foreground">
            Showing{" "}
            <span className="font-semibold text-foreground">
              {Math.min((page - 1) * pageSize + 1, filtered.length)}-
              {Math.min(page * pageSize, filtered.length)}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-foreground">
              {filtered.length}
            </span>{" "}
            orders
          </p>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              className="h-6 w-6 p-0 text-xs rounded-full border border-border"
              disabled
              data-ocid="table.pagination_prev"
            >
              ‹
            </Button>
            <Button
              size="sm"
              className="h-6 w-6 p-0 text-xs rounded-full font-bold text-white border-0"
              style={{ background: "oklch(0.52 0.18 178)" }}
              data-ocid="table.pagination_next"
            >
              1
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-6 w-6 p-0 text-xs rounded-full border border-border"
              disabled
            >
              ›
            </Button>
          </div>
        </div>

        {/* Note bar */}
        <div
          className="px-3.5 py-2 flex items-start gap-2"
          style={{
            background: "oklch(0.96 0.04 55)",
            borderTop: "1px solid oklch(0.88 0.08 55)",
          }}
        >
          <Info
            className="w-3.5 h-3.5 shrink-0 mt-0.5"
            style={{ color: "oklch(0.55 0.16 55)" }}
          />
          <p className="text-[11px]" style={{ color: "oklch(0.42 0.12 55)" }}>
            <span className="font-bold">Note:</span> If the status is{" "}
            <span className="font-bold">'Hold'</span>, it indicates that the
            criteria is currently on hold and cannot be used for processing
            orders.
          </p>
        </div>
      </div>
    </TooltipProvider>
  );
}
