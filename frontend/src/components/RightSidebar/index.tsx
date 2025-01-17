// import { useNavigate } from 'react-router-dom';
import SidebarTrigger from '@/components/header/SidebarTrigger';
import { Sidebar, SidebarHeader, SidebarRail } from '@/components/ui/sidebar';

export default function RightSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  // const navigate = useNavigate();
  return (
    <Sidebar {...props} className="border-none">
      <SidebarHeader className="py-3">
        <div className="flex items-center justify-between">
          <SidebarTrigger />
        </div>
      </SidebarHeader>
      <SidebarRail />
    </Sidebar>
  );
}
