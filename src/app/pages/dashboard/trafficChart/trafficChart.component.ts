import {Component, ViewEncapsulation, ElementRef} from '@angular/core';

import {Chart} from './trafficChart.loader.ts';
import {TrafficChartService} from './trafficChart.service';

@Component({
  selector: 'traffic-chart',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./trafficChart.scss')],
  template: require('./trafficChart.html')
})

// TODO: move chart.js to it's own component
export class TrafficChart {

  public doughnutData: Array<Object>;
  public totalCount: any;

  constructor(private trafficChartService:TrafficChartService) {

   this.trafficChartService.getData().subscribe(data => {
      this.doughnutData = data.statusChartValues;
      this.totalCount = data.total;
      this._loadDoughnutCharts();
    }, error => console.log('Could not load List of Service'));
   
    //this.doughnutData = this.trafficChartService.getData().statusChartValues;
  }

 //console.log('sec 5' +this.doughnutData);
  /*ngAfterViewInit() {
    this._loadDoughnutCharts();
  }*/

  private _loadDoughnutCharts() {
  console.log('sec 3' +this.doughnutData);
    let el = jQuery('.chart-area').get(0);
    new Chart(el.getContext('2d')).Doughnut(this.doughnutData, {
      segmentShowStroke: false,
      percentageInnerCutout : 64,
      responsive: true
    });
  }
}
