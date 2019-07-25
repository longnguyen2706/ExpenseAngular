import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { BaseChartDirective, Color, Label } from 'ng2-charts';
import { MatTableData } from 'src/app/models/table-entity.model';
import { ChartDataModel } from './../../models/chart-data.model';
import { VisualizerAjax } from './../../services/visualizers.ajax.service';
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
  
      this.ajax.getQuantityByMonth().subscribe(r => {
        this.chartDataModel =r.chart;
        this.tableData = r.table;
        this.isDataAvailable = true;
      });
  }

 
}
