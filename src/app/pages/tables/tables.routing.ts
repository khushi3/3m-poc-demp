import { Routes, RouterModule }  from '@angular/router';

import { Tables } from './tables.component';
import { SmartTables } from './components/smartTables/smartTables.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Tables,
    children: [
      { path: 'smarttables', component: SmartTables }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
