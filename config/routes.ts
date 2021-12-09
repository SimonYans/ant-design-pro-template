export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/jfcompanysupplier_edit',
    component: './TableList',
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/vehicle_list',
    component: './TableList',
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/driver_list',
    component: './TableList',
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/driver_vehicle',
    component: './TableList',
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/waybill_list',
    component: './TableList',
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/receipt_list',
    component: './TableList',
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/maincontract_list',
    component: './TableList',
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/assistantcontract_list',
    component: './TableList',
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/linesupplierpayable_list',
    component: './TableList',
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/waybill_confirm_list',
    component: './TableList',
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/capacity_confirm_list',
    component: './TableList',
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/payablebill_list',
    component: './TableList',
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/ssouser_list',
    component: './TableList',
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/ssorole_list',
    component: './TableList',
  },

  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },

  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
