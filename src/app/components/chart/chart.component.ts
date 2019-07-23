import { ChartDataModel } from './../../models/chart-data.model';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label, Color, BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.less']
})
export class ChartComponent implements OnInit {

  // chartData: ChartDataSets[];
  // chartLabels: Label[];
 
 chartColors =  [
            {
              borderColor: 'black',
              backgroundColor: 'rgba(255,0,0,0.3)',
            },
          ];
        chartLegend = true;
      chartType = 'line';
      chartPlugins = [];

  @Input ('data') data: ChartDataModel;
  constructor() {
  }
 
  ngOnInit(){
    // this.initChart();
    // this.assignChartValue();
  }

  // private initChart(){
  //   this.chartColors =  [
  //         {
  //           borderColor: 'black',
  //           backgroundColor: 'rgba(255,0,0,0.3)',
  //         },
  //       ];
  //     this.chartLegend = true;
  //     this.chartType = 'bar';
  //     this.chartPlugins = [];
  // }
  // private assignChartValue(){
  //   this.chartData = this.c.chartData;
  //   this.chartLabels = this.c.chartLabels;
  // }
}
