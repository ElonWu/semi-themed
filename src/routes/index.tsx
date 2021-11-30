import { ElonRoute } from '@elonwu/router';

import { IconUser, IconStar, IconSetting } from '@douyinfe/semi-icons';

import Page1 from '@/pages/Page1';
import Page2 from '@/pages/Page2';
import Page3 from '@/pages/Page3';

import GlobalNotFound from '@/pages/GlobalNotFound';

import Layout from '@/layout/Global';

const routes: ElonRoute[] = [
  // 默认页面
  {
    path: '/',
    key: 'Global',
    routes: [
      {
        index: true,
        redirect: '/page1',
      },
      {
        component: Layout,
        key: 'Layout',
        routes: [
          {
            inMenu: true,
            title: '测试1',
            path: '/page1',
            component: Page1,
            key: 'page1',
            icon: <IconUser />,
          },

          {
            inMenu: true,
            title: '测试2',
            path: '/page2',
            component: Page2,
            key: 'page2',
            icon: <IconStar />,
          },
        ],
      },

      {
        inMenu: true,
        title: '测试3',
        path: '/page3',
        component: Page3,
        key: 'page3',
        icon: <IconSetting />,
      },

      // 全局 404页面
      {
        path: '*',
        key: 'GlobalNotFound',
        component: GlobalNotFound,
        title: '404',
      },
    ],
  },
];

export default routes;
