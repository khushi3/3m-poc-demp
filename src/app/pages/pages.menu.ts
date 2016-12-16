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
  // {
  //   path: 'editors',
  //   data: {
  //     menu: {
  //       title: '3M Application',
  //       icon: 'ion-edit',
  //       selected: false,
  //       expanded: false,
  //       order: 100,
  //     }
  //   },
  //   children: [
  //   {
  //     path: 'ckeditor',
  //     data: {
  //       menu: {
  //         title: 'App1',
  //       }
  //     }
  //   },
  //   {
  //     path: 'ckeditor1',
  //     data: {
  //       menu: {
  //         title: 'App2',
  //       }
  //     }
  //   },
  //   {
  //     path: 'ckeditor2',
  //     data: {
  //       menu: {
  //         title: 'App3',
  //       }
  //     }
  //   }
  //   ]
  // },

  {
    path: 'charts',
    data: {
      menu: {
        title: 'Charts',
        icon: 'ion-stats-bars',
        selected: false,
        expanded: false,
        order: 200,
      }
    },
    children: [
    {
      path: 'chartist-js',
      data: {
        menu: {
          title: 'Chartist.Js',
        }
      }
    }
    ]
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
    // {
    //   path: 'basictables',
    //   data: {
    //     menu: {
    //       title: 'App1',
    //     }
    //   }
    // },
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

  {
    path: '',
    data: {
      menu: {
        title: 'Pages',
        icon: 'ion-document',
        selected: false,
        expanded: false,
        order: 650,
      }
    },
    children: [
    {
      path: ['/login'],
      data: {
        menu: {
          title: 'Login'
        }
      }
    },
    {
      path: ['/register'],
      data: {
        menu: {
          title: 'Register'
        }
      }
    }
    ]
  },
  ]
}
];
