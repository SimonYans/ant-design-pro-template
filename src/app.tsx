import { PageLoading } from '@ant-design/pro-layout';
// import type { RequestConfig, RunTimeLayoutConfig } from 'umi';
import type { RunTimeLayoutConfig } from 'umi';
import { history } from 'umi';
import RightContent from '@/components/RightContent';
import Footer from '@/components/Footer';
import { currentUser as queryCurrentUser, loadUserMenu } from './services/api';
import SwitchTabsLayout from './layouts/SwitchTabsLayout';
import type { Settings } from '../config/defaultSettings';
import defaultSettings from '../config/defaultSettings';
// import { getToken } from '@/utils/cookie';
// import { RequestOptionsInit } from 'umi-request';
import logo from '/public/logo_w.svg';

// const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/user/login';

/** 获取用户信息比较慢的时候会展示一个 loading */
export const initialStateConfig = {
  loading: <PageLoading />,
};

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<{
  token?: string;
  settings?: Partial<Settings>;
  currentUser?: API.CurrentUser;
  currentRoles?: API.CurrentRoleItem[];
  fetchUserInfo?: () => Promise<API.UserInfo | undefined>;
}> {
  const fetchUserInfo = async () => {
    try {
      const msg = await queryCurrentUser();
      return msg.result;
    } catch (error) {
      history.push(loginPath);
    }
    return undefined;
  };

  if (history.location.pathname !== loginPath) {
    // 如果是登录页面，不执行
    const userInfo = await fetchUserInfo();
    return {
      fetchUserInfo,
      currentUser: userInfo?.user,
      currentRoles: userInfo?.roles,
      settings: defaultSettings,
    };
  }
  return {
    fetchUserInfo,
    settings: defaultSettings,
  };
}

/*const authHeaderInterceptor = (url: string, options: RequestOptionsInit) => {
  let authHeader = {};
  if (getToken()) {
    authHeader = { token: getToken() };
  }
  return {
    url: url,
    options: { ...options, interceptors: true, headers: authHeader },
  };
};

export const request: RequestConfig = {
  timeout: 30000,
  credentials: 'include',
  errorConfig: {},
  middlewares: [],
  requestInterceptors: [authHeaderInterceptor],
  responseInterceptors: [],
};*/

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  const { switchTabs, ...restSettings } = initialState?.settings || {};
  return {
    rightContentRender: () => (
      <RightContent switchTabsReloadable={switchTabs?.mode && switchTabs.reloadable} />
    ),
    disableContentMargin: false,
    waterMarkProps: {
      content: initialState?.currentUser?.name,
    },
    className: switchTabs?.mode && 'custom-by-switch-tabs',
    childrenRender: (children, props) => {
      const { route } = props;
      return (
        <SwitchTabsLayout
          mode={switchTabs?.mode}
          persistent={switchTabs?.persistent}
          fixed={switchTabs?.fixed}
          routes={route!.routes}
          footerRender={() => <Footer />}
        >
          {children}
        </SwitchTabsLayout>
      );
    },
    onPageChange: () => {
      /*const { location } = history;
      // 如果没有登录，重定向到 login
      if (!initialState?.token && location.pathname !== loginPath) {
        window.location.href = loginPath;
      }*/
    },
    menu: {
      locale: false,
      // 每当 initialState?.currentUser?.id 发生修改时重新执行 request
      params: {
        userId: initialState?.currentUser?.id,
      },
      request: async () => {
        const menuData = await loadUserMenu();
        const formatMenu = (menu: any) => {
          menu.forEach((item: any) => {
            item.name = item.title;
            item.icon = '';
            item.path = item.jump
              ? item.jump.split('~')[item.jump.split('~').length - 1].split('?')[0]
              : '';
            if (item.list) {
              item.children = item.list;
              formatMenu(item.children);
            }
          });
        };
        if (menuData.result) {
          formatMenu(menuData.result);
          return menuData.result;
        }
        return [];
      },
    },
    links: [],
    menuHeaderRender: undefined,
    logo: logo,
    // 自定义 403 页面
    // unAccessible: <div>unAccessible</div>,
    // 增加一个 loading 的状态
    // childrenRender: (children) => {
    //   if (initialState.loading) return <PageLoading />;
    //   return children;
    // },
    ...restSettings,
  };
};
