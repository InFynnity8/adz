import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  BrainCog,
  Command,
  FolderOpen,
  Frame,
  GalleryVerticalEnd,
  HelpCircle,
  Home,
  List,
  LogOut,
  Map,
  PieChart,
  Settings,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { FaBuysellads } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Product Suite",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Automatic Reporting",
          url: "#",
        },
        {
          title: "Advanced Budget management",
          url: "#",
        },
        {
          title: "Programmatic Advertising",
          url: "#",
        },
        {
          title: "Become a ClickTech Partner",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props} className="text-white">
      <SidebarHeader>
        <SidebarMenuButton  className="pointer-events-none">
          <div className=" flex items-center justify-center w-full flex-1 font-bold text-3xl text-white">
            <FaBuysellads size={30} />
            <p className="text-2xl">dz</p>
          </div>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu className="px-2 -mb-3">
          <Link to="/dashboard">
            <SidebarMenuButton>
              <Home />
              <span>Home</span>
            </SidebarMenuButton>
          </Link>
          <Link to="/dashboard/projects">
          <SidebarMenuButton>
            <FolderOpen />
            <span>Projects</span>
          </SidebarMenuButton>
          </Link>
          <Link to="/dashboard/profiles">
          <SidebarMenuButton>
            <List />
            <span>Profiles</span>
          </SidebarMenuButton>
          </Link>
        </SidebarMenu>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu >
          <SidebarMenuButton>
            <BookOpen />
            <span>Billing</span>
          </SidebarMenuButton>
          <SidebarMenuButton>
            <Settings />
            <span>Settings</span>
          </SidebarMenuButton>
          <SidebarMenuButton>
            <HelpCircle />
            <span>Support</span>
          </SidebarMenuButton>
          <Link to="/login">
          <SidebarMenuButton>
            <LogOut />
            <span>Logout</span>
          </SidebarMenuButton>
          </Link>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
