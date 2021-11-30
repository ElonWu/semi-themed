import React from 'react';
import { Outlet } from '@elonwu/router';
import Menu from './Menu';

const GlobalLayout = () => {
  return (
    <div data-role="layout-contaienr" className="w-screen h-screen flex">
      <Menu />
      <div
        data-role="content-contaienr"
        className="flex-1 w-full h-full overflow-y-auto bg-gray-50 dark:bg-gray-600"
      >
        <Outlet />
      </div>
    </div>
  );
};

export default GlobalLayout;
