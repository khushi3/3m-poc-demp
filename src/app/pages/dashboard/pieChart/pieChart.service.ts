import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';
import { Http } from '@angular/http';

import myGlobals = require('../../../global.config');

@Injectable()
export class PieChartService {

  private actionUrl: string;

  constructor(private _baConfig:BaThemeConfigProvider,private http:Http) {
    this.actionUrl = myGlobals.ServerWithApiUrlStatus;
  }

  getData() {
    
    return this.http.get(this.actionUrl)
                    .map(response => response.json());

   /* let pieColor = this._baConfig.get().colors.custom.dashboardPieChart;
    return [
      {
        color: pieColor,
        description: 'New Visits',
        stats: '57,820',
        icon: 'person',
      }, {
        color: pieColor,
        description: 'Purchases',
        stats: '$ 89,745',
        icon: 'money',
      }, {
        color: pieColor,
        description: 'Active Users',
        stats: '178,391',
        icon: 'face',
      }, {
        color: pieColor,
        description: 'Returned',
        stats: '32,592',
        icon: 'refresh',
      }
    ];*/
  }
}
