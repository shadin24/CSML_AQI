import React from 'react';
import { NavLink } from 'react-router-dom';
import Sidebar, { SidebarItem } from './components/Sidebar';
import {
  LifeBuoy,
  NotebookPen,
  MapPinned,
  LayoutDashboard,
  Settings,
} from "lucide-react";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar>
        <NavLink to="/" activeClassName="active">
          <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" />
        </NavLink>
        <NavLink to="/map" activeClassName="active">
          <SidebarItem icon={<MapPinned size={20} />} text="City Map" />
        </NavLink>
        <NavLink to="/readings" activeClassName="active">
          <SidebarItem icon={<NotebookPen size={20} />} text="Readings" />
        </NavLink>
        <hr className="my-3" />
        <NavLink to="/settings" activeClassName="active">
          <SidebarItem icon={<Settings size={20} />} text="Settings" />
        </NavLink>
        <NavLink to="/help" activeClassName="active">
          <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
        </NavLink>
      </Sidebar>
      <div className="content w-full">{children}</div>
    </div>
  );
};

export default Layout;
