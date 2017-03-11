import { Routes, RouterModule }  from '@angular/router';

import { Dashboard } from './dashboard.component';
import {AngularChart} from './components/angularchart/angularchart.component';
import {KibanaChart} from './components/kibanaChart/kibanaChart.component';

 
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Dashboard,
    children: [
      { path: 'angularchart', component: AngularChart },
      { path: 'kibanachart', component:  KibanaChart }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
