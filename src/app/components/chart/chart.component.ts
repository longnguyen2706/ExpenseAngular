import { Component, Input, OnInit } from "@angular/core";
import { ChartType } from "chart.js";
import { ChartDataModel } from "./../../models/chart-data.model";
import { ChartSettingService } from "./../../services/chart-setting.service";

@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.less"]
})
export class ChartComponent implements OnInit {
  chartColors = [];
  chartLegend = true;
  chartType: ChartType = "bar";
  chartPlugins = [];
  chartOptions: any = {};
  types: Array<ChartType> = ["bar", "line", "pie", "polarArea"];

  @Input("data") data: ChartDataModel;
  constructor(private chartSetting: ChartSettingService) {}

  ngOnInit() {
    let len = this.data.chartLabels.length;
    this.chartColors = this.chartSetting.getChartColors(this.chartType, len);
    this.chartOptions = this.chartSetting.getChartOptions(this.chartType);
    this.chartPlugins = this.chartSetting.getChartPlugin(this.chartType);
  }
}
