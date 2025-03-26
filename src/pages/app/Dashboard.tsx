import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { PlusCircle } from "lucide-react"
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div >
        <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="shadow-sm flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4 w-full">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            {/* bar */}
            <div className=" w-full flex items-center justify-between">
              <h1 className="font-bold text-[24px]">Welcome</h1>
              {/* buttons */}
              <div className="flex items-center gap-4">
                <Button variant="outline" className="border-[1px] border-blue-950 cursor-pointer">
                  Projects/Profiles
                </Button>
                <Button className="rounded-3xl cursor-pointer">
                  <PlusCircle/> Add New
                </Button>
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          
        <Outlet/>
        </div>
      </SidebarInset>
    </SidebarProvider>
    </div>
  )
}

export default Dashboard