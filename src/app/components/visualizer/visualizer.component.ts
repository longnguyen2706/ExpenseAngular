import { ChartDataModel } from './../../models/chart-data.model';
import { VisualizerAjax } from './../../services/visualizers.ajax.service';
import { Component, OnInit } from '@angular/core';
import { Chart, ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { TouchSequence } from 'selenium-webdriver';
@Component({
  selector: 'app-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.less']
})
export class VisualizerComponent implements OnInit {
 
  chartData: ChartDataSets[];
  chartLabels: Label[];
  chartColors: Color[];
  chartLegend = true;
  chartType = 'line';
  chartPlugins = [];
  constructor(private ajax: VisualizerAjax) {
  }

  ngOnInit() {
    this.initChart()
    this.ajax.getSalesByYear().subscribe(result => this.assignChartValue(result));
  }

  private initChart(){
    this.chartColors =  [
          {
            borderColor: 'black',
            backgroundColor: 'rgba(255,0,0,0.3)',
          },
        ];
      this.chartLegend = true;
      this.chartType = 'line';
      this.chartPlugins = [];
  }
  private assignChartValue(c: ChartDataModel){
    this.chartData = c.chartData;
    this.chartLabels = c.chartLabels;
  }
}
