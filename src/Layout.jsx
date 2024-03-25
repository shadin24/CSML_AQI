import React from 'react';
import { NavLink } from 'react-router-dom';
import Sidebar, { SidebarItem } from './components/Sidebar';
import Navbar from './components/Navbar';
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
        <NavLink to="/" activeClassName="bg-gray-200 text-gray-900"> {/* Updated NavLink */}
          <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" />
        </NavLink>
        <NavLink to="/map" activeClassName="bg-gray-200 text-gray-900"> {/* Updated NavLink */}
          <SidebarItem icon={<MapPinned size={20} />} text="City Map" />
        </NavLink>
        <NavLink to="/readings" activeClassName="bg-gray-200 text-gray-900"> {/* Updated NavLink */}
          <SidebarItem icon={<NotebookPen size={20} />} text="Readings" />
        </NavLink>
        <hr className="my-3" />
        <NavLink to="/settings" activeClassName="bg-gray-200 text-gray-900">
          <SidebarItem icon={<Settings size={20} />} text="Settings" />
        </NavLink>
        <NavLink to="/help" activeClassName="bg-gray-200 text-gray-900">
          <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
        </NavLink>
      </Sidebar>
      
      <div className="content w-full">{children}</div>
 
    </div>
  );
};

export default Layout;
