import * as React from "react"
import {
  AudioWaveform,
  // BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  // Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/aConnection/bShadcnConnection/components/nav-main"
// import { NavProjects } from "@/aConnection/bShadcnConnection/components/nav-projects"
import { NavUser } from "@/aConnection/bShadcnConnection/components/nav-user"
import { TeamSwitcher } from "@/aConnection/bShadcnConnection/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/aConnection/bShadcnConnection/components/ui/sidebar"
import fullRoute from "@/bLove/gRoute/bFullRoute"


// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Happify Admin",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Happify Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Happify Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Base Setup",
      url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.cBaseRoute.aListRoute,
      icon: SquareTerminal,
      isActive: false,
      items: [
        {
          title: "Base Many To One",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.aBaseManyToOneRoute.aListRoute,
        },
        {
          title: "Base Many To Many",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.bBaseManyToManyRoute.aListRoute,
        },
        {
          title: "Base",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.cBaseRoute.aListRoute,
        },
        {
          title: "Base One To One",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.dBaseOneToOneRoute.aListRoute,
        },
        {
          title: "Base One To Many",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.eBaseOneToManyRoute.aListRoute,
        },
      ],
    },
    {
      title: "User Administration",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "User",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministration.aUserRoute.aListRoute,
        },
        {
          title: "Role",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministration.bRoleRoute.aListRoute,
        },
        {
          title: "Menu",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministration.cMenuRoute.aListRoute,
        },
      ],
    },
  ],
  cHappifyMain: [
    {
      title: "Main Section",
      url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cHappifyMainRoute.aQuestionRoute.aListRoute,
      icon: SquareTerminal,
      isActive: false,
      items: [
        {
          title: "questionnaire",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cHappifyMainRoute.aQuestionRoute.aListRoute,
        },
        {
          title: "Factor",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cHappifyMainRoute.bFactorRoute.aListRoute,
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ReduxCall, APICall, navigate, ...props }: (React.ComponentProps<typeof Sidebar> & { ReduxCall?: any,APICall?: any, navigate?: any })) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain header="For Developer" items={data.navMain} />
        <NavMain header="Happify Stuffs" items={data.cHappifyMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} ReduxCall={ReduxCall} APICall={APICall} navigate={navigate} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
