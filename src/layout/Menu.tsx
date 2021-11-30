import React, { useCallback, useEffect, useState } from 'react';
import { ElonRoute, useNavigate, useLocation } from '@elonwu/router';

import { Nav } from '@douyinfe/semi-ui';

import routes from '../routes';

import { NavItemProps } from '@douyinfe/semi-ui/lib/es/navigation';

import { isValidArray } from '@elonwu/utils';

interface MenuItem extends NavItemProps {
  path?: string;
  items?: MenuItem[];
}

const filterMenu = (routes?: ElonRoute[], parent?: ElonRoute): MenuItem[] => {
  let result: MenuItem[] = [];

  if (routes && isValidArray(routes)) {
    routes.forEach((route) => {
      const {
        path,

        key,
        title,
        icon,
        inMenu,
        routes: nestedRoutes,
      } = route;

      if (inMenu) {
        result.push({
          itemKey: key,
          text: title,
          icon,
          items: filterMenu(nestedRoutes, route),
          path: path || parent?.path, // 如果为 IndexRoute, 没有 path, 则使用父层级的 path
        });
      } else {
        result = result.concat(filterMenu(nestedRoutes, route));
      }
    });
  }

  return result;
};

const Menu = () => {
  const items = filterMenu(routes);

  // 路由
  const navigate = useNavigate();
  const locaiton = useLocation();

  // 已选中的
  const [selected, setSelected] = useState<string[]>([]);

  // 首次自动匹配
  useEffect(() => {
    const target = locaiton.pathname;

    // 递归匹配
    function matchKey(items: MenuItem[] = [], target: string): string | null {
      for (let item of items) {
        if (item.path === target) return item.itemKey as string;

        if (isValidArray(item.items)) {
          const subMatch = matchKey(item.items, target);
          if (subMatch) return subMatch;
        }
      }

      return null;
    }

    const matchedKey = matchKey(items, target);

    // 设置默认选中的
    if (matchedKey) setSelected([matchedKey]);
  }, []);

  // 根据点击匹配
  const onSelect = useCallback(
    (data: {
      selectedItems: MenuItem[];
      itemKey: string;
      selectedKeys: string[];
    }) => {
      const { itemKey, selectedItems, selectedKeys } = data;

      // 设定当前选择
      setSelected(selectedKeys);

      // menu 路由跳转
      const matchedItem = selectedItems.find(
        (item) => item.itemKey === itemKey,
      );

      if (matchedItem?.path) {
        navigate(matchedItem.path);
      }
    },
    [],
  );

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <Nav
      selectedKeys={selected}
      className="bg-gray-100 dark:bg-gray-500"
      bodyStyle={{ height: 320 }}
      items={items}
      onSelect={onSelect as any}
      header={{
        logo: (
          <img src="https://sf6-cdn-tos.douyinstatic.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/webcast_logo.svg" />
        ),
        text: <h3 onClick={toggleDarkMode}>BBGAME BI</h3>,
      }}
      footer={{ collapseButton: true }}
    />
  );
};

export default Menu;
