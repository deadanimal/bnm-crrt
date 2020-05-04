export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    isCollapsed?: boolean;
    isCollapsing?: any;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    type?: string;
    collapse?: string;
    children?: ChildrenItems2[];
    isCollapsed?: boolean;
}
export interface ChildrenItems2 {
    path?: string;
    title?: string;
    type?: string;
}
//Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: '/admin/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-desktop text-warning'
  },
  {
    path: '/admin/risk-management',
    title: 'Management',
    type: 'sub',
    icontype: 'fas fa-cogs text-purple',
    isCollapsed: false,
    collapse: 'risk',
    children: [
      { path: 'create', title: 'Create New', type: 'link' }
    ]
  },
  {
    path: '/admin/analytics',
    title: 'BI & Analytics',
    type: 'link',
    icontype: 'far fa-chart-bar text-blue'
  },
  {
    path: '/admin/audit-trail',
    title: 'Audit Trails',
    type: 'link',
    icontype: 'fas fa-route text-purple'
  },
  {
    path: '/admin/institution',
    title: 'Institution Management',
    type: 'link',
    icontype: 'far fa-chart-bar text-blue'
  },
  {
    path: '/admin/profile',
    title: 'Profile',
    type: 'link',
    icontype: 'far fa-id-badge text-green'
  },
  {
    path: '/admin/settings',
    title: 'Settings',
    type: 'link',
    icontype: 'fas fa-sliders-h text-orange'
  }
];

export const ROUTESUSER: RouteInfo[] = [
  {
    path: '/user/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-desktop text-blue'
  },
  {
    path: '/user/report',
    title: 'Report',
    type: 'link',
    icontype: 'fas fa-chart-bar text-purple'
  },
  {
    path: '/user/analytics',
    title: 'Analytics',
    type: 'link',
    icontype: 'fas fa-chart-pie text-green'
  },
  {
    path: '/admin/profile',
    title: 'Profile',
    type: 'link',
    icontype: 'far fa-id-badge text-indigo'
  },
  {
    path: '/admin/settings',
    title: 'Settings',
    type: 'link',
    icontype: 'fas fa-sliders-h text-orange'
  }
];

/*
{
  path: '',
  title: '',
  type: 'link',
  icontype: ''
}
*/