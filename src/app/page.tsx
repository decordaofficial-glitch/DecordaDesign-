import Image from "next/image";
import {
  MoreVertical,
  Plus,
  LayoutDashboard,
  Workflow,
  BookCopy,
  Users,
  Settings,
  HelpCircle,
  Search,
  ChevronsUpDown,
} from "lucide-react";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const workflows = [
    {
      name: "Quarterly review",
      status: "Live",
      lastUpdated: "2 days ago",
    },
    {
      name: "Onboarding sequence",
      status: "Live",
      lastUpdated: "3 days ago",
    },
    {
      name: "Sales outreach",
      status: "Paused",
      lastUpdated: "5 days ago",
    },
    {
      name: "Support follow-up",
      status: "Live",
      lastUpdated: "1 week ago",
    },
    {
      name: "Feature announcement",
      status: "Paused",
      lastUpdated: "2 weeks ago",
    },
  ];

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-primary"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
            <h2 className="text-lg font-semibold">Automations</h2>
          </div>
          <Button className="w-full">
            <Plus className="mr-2" /> Create new
          </Button>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Dashboard">
                <LayoutDashboard />
                Dashboard
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Workflows" isActive>
                <Workflow />
                Workflows
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Templates">
                <BookCopy />
                Templates
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Integrations">
                <LayoutDashboard />
                Integrations
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
          <Separator className="my-2" />
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Team">
                <Users />
                Team
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Settings">
                <Settings />
                Settings
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Help & Support">
                <HelpCircle />
                Help & Support
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="https://picsum.photos/seed/1/40/40" />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div className="flex-1 overflow-hidden">
              <p className="font-semibold truncate">Olivia Martin</p>
              <p className="text-xs text-muted-foreground truncate">
                olivia.martin@email.com
              </p>
            </div>
            <Button variant="ghost" size="icon">
              <MoreVertical />
            </Button>
          </div>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <div className="p-6">
          <header className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="md:hidden" />
              <h1 className="text-2xl font-semibold">Workflows</h1>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline">Upgrade</Button>
              <Button>
                <Plus className="mr-2" />
                Create workflow
              </Button>
            </div>
          </header>

          <Tabs defaultValue="active">
            <TabsList>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="archived">Archived</TabsTrigger>
            </TabsList>
            <TabsContent value="active">
              <div className="my-4 flex items-center gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search workflows..."
                    className="pl-10 w-full"
                  />
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="shrink-0">
                      Filter by status <ChevronsUpDown className="ml-2" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Live</DropdownMenuItem>
                    <DropdownMenuItem>Paused</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="border rounded-lg">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last updated</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {workflows.map((flow) => (
                      <TableRow key={flow.name}>
                        <TableCell className="font-medium">
                          {flow.name}
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              flow.status === "Live"
                                ? "secondary"
                                : "outline"
                            }
                            className="flex items-center gap-2 w-fit"
                          >
                            <span
                              className={`h-2 w-2 rounded-full ${
                                flow.status === "Live"
                                  ? "bg-green-500"
                                  : "bg-yellow-500"
                              }`}
                            ></span>
                            {flow.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{flow.lastUpdated}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                          <Button variant="ghost" size="icon">
                            <MoreVertical />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}