import {Component, ViewEncapsulation} from '@angular/core';

import {PieChartService} from './pieChart.service';
import {Injectable} from '@angular/core';
// import 'chart.js';

import './pieChart.loader.ts';

@Component({
  selector: 'pie-chart',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./pieChart.scss')],
  template: require('./pieChart.html')
})
// TODO: move easypiechart to component
@Injectable()
export class PieChart {


  public  simpleBarData: any ;
   public simpleBarOptions: any= {
      fullWidth: true,
      height: '300px',
      responsive: true,
       multiTooltipTemplate: function(label) {
        return label.label + ': ' + label.value;
    }
    }
     
   public simplePieData: any;
   public simplePieOptions: any ={
      fullWidth: true,
      height: '300px',
      weight: '300px',
      labelInterpolationFnc: function (value) {
        return value + '%';
      }
    }
   

   public satusChartValue: any;
   
  constructor(private _pieChartService: PieChartService) {

   
  let simplePieValue: number[];
    
  let barDataValues: number[];
  let barDataLabels: string[];

  
 this._pieChartService.getData().subscribe(data=>{

      this.satusChartValue= data.statusChartValues;  
      
      simplePieValue= new Array(data.statusChartValues.length);

      barDataValues= new Array(data.statusChartValues.length);
      barDataLabels= new Array(data.statusChartValues.length); 
      for(var i=0; i<this.satusChartValue.length; i++){
        console.log(this.satusChartValue);
         

        simplePieValue[i]= this.satusChartValue[i].percentage;

           // for bar data
        barDataValues[i]=this.satusChartValue[i].value;
        barDataLabels[i]=this.satusChartValue[i].label;


      }
 
this.simplePieData= {series: simplePieValue};

this.simpleBarData= {labels:barDataLabels,series:[barDataValues,barDataLabels]};

}, error => console.log('Could not load List of Service'));

     
  }

 public getResponsive(padding, offset) {
    return [
      ['screen and (min-width: 1550px)', {
        chartPadding: padding,
        labelOffset: offset,
        labelDirection: 'explode',
        labelInterpolationFnc: function (value) {
          return value;
        }
      }],
      ['screen and (max-width: 1200px)', {
        chartPadding: padding,
        labelOffset: offset,
        labelDirection: 'explode',
        labelInterpolationFnc: function (value) {
          return value;
        }
      }],
      ['screen and (max-width: 600px)', {
        chartPadding: 0,
        labelOffset: 0,
        labelInterpolationFnc: function (value) {
          return value[0];
        }
      }]
    ];
  }
 
}
