export const PAGES_MENU = [
{
  path: 'pages',
  children: [
  {
    path: 'dashboard',
    data: {
      menu: {
        title: 'Dashboard',
        icon: 'ion-android-home',
        selected: false,
        expanded: false,
        order: 0
      }
    }
  },

   {
    path: 'tables',
    data: {
      menu: {
        title: '3M Application',
        icon: 'ion-grid',
        selected: false,
        expanded: false,
        order: 500,
      }
    },
    children: [
 
    {
      path: 'smarttables',
      data: {
        menu: {
          title: 'App1',
        }
      }
    }
    ]
  },
 
  ]
}
];
