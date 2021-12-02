import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { createContext, useMediaQuery } from '@elonwu/hooks';
import { useDarkMode, useRouteInit } from '@/hooks';

const { Provider, useContext } = createContext('MediaQuery');

export const useGlobal = useContext;

const Global = () => {
  // 路由初始化参数收集
  const routeInit = useRouteInit();

  // 适配
  const responsive = useMediaQuery();
  const [isMobile, isTablet, isPC] = (responsive || []) as boolean[];

  // 主题
  const { theme, toggleDarkMode } = useDarkMode();

  // 语言
  const [lang, setLang] = useState('zh-cn');

  return (
    <Provider
      value={{
        // 路由相关
        ...routeInit,

        // 主题
        theme,
        toggleDarkMode,

        // 自适应
        isMobile,
        isTablet,
        isPC,

        // 多语言
        lang,
        setLang,
      }}
    >
      <Outlet />
    </Provider>
  );
};

export default Global;
