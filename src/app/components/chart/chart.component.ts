import { ChartSettingService } from './../../services/chart-setting.service';
import { Label } from 'ng2-charts';
import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { ChartDataModel } from './../../models/chart-data.model';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.less']
})
export class ChartComponent implements OnInit {
  chartColors = [];
  chartLegend = true;
  chartType: ChartType = 'pie';
  chartPlugins = [];
  chartOptions: any ={};
  
  @Input('data') data: ChartDataModel;
  constructor(private chartSetting: ChartSettingService) {
  }

  ngOnInit() {
    let len = this.data.chartLabels.length;

    this.chartColors = this.chartSetting.getChartColors(this.chartType,len);
    this.chartOptions = this.chartSetting.getChartOptions(this.chartType);
  
  }

 
}
