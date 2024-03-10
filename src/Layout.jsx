import React from 'react';
import Sidebar from './components/Sidebar'


const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;