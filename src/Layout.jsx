import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { SidebarItem } from './components/Sidebar';
import {
  LifeBuoy,
  NotebookPen,
  MapPinned,
  LayoutDashboard,
  Settings
} from "lucide-react";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar>
        <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" />
        <SidebarItem icon={<MapPinned size={20} />} text="City Map" active />
        <SidebarItem icon={<NotebookPen size={20} />} text="Readings" />
        
        <hr className="my-3" />
        <SidebarItem icon={<Settings size={20} />} text="Settings" />
        <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
      </Sidebar>
      <Navbar />
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
