import { ChartDataModel } from './../../models/chart-data.model';
import { VisualizerAjax } from './../../services/visualizers.ajax.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart, ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, BaseChartDirective } from 'ng2-charts';
import { TableData, MatTableData } from 'src/app/models/table-data.model';
import { forkJoin } from 'rxjs';
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
  chartType = '';
  chartPlugins = [];
  isDataAvailable = false;
  chartDataModel: ChartDataModel;

  tableData: MatTableData;
  constructor(private ajax: VisualizerAjax) {
  }
  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;
  ngOnInit() {
    forkJoin(
      this.ajax.getQuantityByMonth(),
        this.ajax.getAllRecords()
      ).subscribe(([r1, r2]) => {
        this.chartDataModel =r1;
        this.tableData = r2;
        console.log(r2);
        this.isDataAvailable = true;
      });
  }

  private initChart(){
    this.chartColors =  [
          {
            borderColor: 'black',
            backgroundColor: 'rgba(255,0,0,0.3)',
          },
        ];
      this.chartLegend = true;
      this.chartType = 'bar';
      this.chartPlugins = [];
  }
  private assignChartValue(c: ChartDataModel){
    this.chartData = c.chartData;
    this.chartLabels = c.chartLabels;
  }
}
;