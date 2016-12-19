import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';
import { Http } from '@angular/http';

@Injectable()
export class TrafficChartService {

  constructor(private _baConfig:BaThemeConfigProvider, private http:Http) {
  }


  getData() {
    //let dashboardColors = this._baConfig.get().colors.dashboard;
    //public newobject = [];

return this.http.get('http://172.16.103.25:8080/ElasticSearchClient/elk/statusChart')
                    .map(response => response.json());

    //return newObject;
    /*return [
      {
        value: 820,
        color: dashboardColors.white,
        highlight: colorHelper.shade(dashboardColors.white, 15),
        label: 'Status 200',
        percentage: 82,
        order: 4,
      }, {
        value: 80,
        color: dashboardColors.gossip,
        highlight: colorHelper.shade(dashboardColors.gossip, 15),
        label: 'Status 304',
        percentage: 8,
        order: 0,
      },{
        value: 100,
        color: dashboardColors.silverTree,
        highlight: colorHelper.shade(dashboardColors.silverTree, 15),
        label: 'Status 302',
        percentage: 5,
        order: 2,
      }, {
        value: 100,
        color: dashboardColors.surfieGreen,
        highlight: colorHelper.shade(dashboardColors.surfieGreen, 15),
        label: 'Status 404',
        percentage: 4,
        order: 3,
      },{
        value: 10,
        color: dashboardColors.blueStone,
        highlight: colorHelper.shade(dashboardColors.blueStone, 15),
        label: 'Status 500',
        percentage: 1,
        order: 1,
      },
    ];*/
  }
}
