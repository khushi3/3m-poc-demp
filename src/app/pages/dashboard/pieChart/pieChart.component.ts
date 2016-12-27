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

    /*public  labelsPieOptions: any ={
      fullWidth: true,
      height: '300px',
      weight: '300px',
      tooltip: 'status'
      
    }
*/
   
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
   
  // public labelsPieColor: any;

   // public pieColor: any[];
 
  constructor(private _pieChartService: PieChartService) {

   
  let simplePieValue: number[];
    
  let barDataValues: number[];
  let barDataLabels: string[];

  
 this._pieChartService.getData().subscribe(data=>{

      this.satusChartValue= data.statusChartValues;  
      
      simplePieValue= new Array(data.statusChartValues.length);

      barDataValues= new Array(data.statusChartValues.length);
      barDataLabels= new Array(data.statusChartValues.length); 
     // this.pieColor= new Array(data.statusChartValues.length);
      for(var i=0; i<this.satusChartValue.length; i++){
        console.log(this.satusChartValue);
         
      //  this.pieColor[i]=this.satusChartValue[i].color;

        simplePieValue[i]= this.satusChartValue[i].percentage;

           // for bar data
        barDataValues[i]=this.satusChartValue[i].value;
        barDataLabels[i]=this.satusChartValue[i].label;


      }

       
 
this.simplePieData= {series: simplePieValue};
this.simpleBarData= {label:[barDataLabels,barDataLabels],series:[barDataValues,barDataValues]};

//this.labelsPieColor=this.pieColor;



}, error => console.log('Could not load List of Service'));

     
  }

 /* ngAfterViewInit() {
    if (!this._init) {
      this._loadPieCharts();
      this._updatePieCharts();
      this._init = true;
    }
  }
*/
 /* private _loadPieCharts() {

    jQuery('.chart').each(function () {
      let chart = jQuery(this);
      chart.easyPieChart({
        easing: 'easeOutBounce',
        onStep: function (from, to, percent) {
          jQuery(this.el).find('.percent').text(Math.round(percent));
        },
        barColor: jQuery(this).attr('data-rel'),
        trackColor: 'rgba(0,0,0,0)',
        size: 84,
        scaleLength: 0,
        animation: 2000,
        lineWidth: 9,
        lineCap: 'round',
      });
    });
  }*/
 
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
 

  /*private _updatePieCharts() {
    let getRandomArbitrary = (min, max) => { return Math.random() * (max - min) + min; };

    jQuery('.pie-charts .chart').each(function(index, chart) {
      jQuery(chart).data('easyPieChart').update(getRandomArbitrary(55, 90));
    });
  }*/
}
