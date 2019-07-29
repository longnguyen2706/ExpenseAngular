import { ChartDataModel } from "./../../models/chart-data.model";
import { VisualizerAjax } from "./../../services/visualizers.ajax.service";
import { CheckboxTableComponent } from "./../checkbox-table/checkbox-table.component";
import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { MatTableData } from "./../../models/table-entity.model";
import { FormValue } from "src/app/models/form-value.model";
import { VisualFormEntity } from "src/app/models/visual-form.entity.model";

@Component({
  selector: "app-dataprocessing",
  templateUrl: "./dataprocessing.component.html",
  styleUrls: ["./dataprocessing.component.less"]
})
export class DataprocessingComponent implements OnInit, AfterViewInit {
  formInitialValue: FormValue;
  formEntity: VisualFormEntity;
  tableData: MatTableData;
  isDataAvailable: boolean = false;

  charts: Array<ChartDataModel> = [];
  isChartAvailable: boolean = false;
  isLoading = false;
  @ViewChild(CheckboxTableComponent, { static: false })
  checkboxTable: CheckboxTableComponent;

  constructor(private ajaxService: VisualizerAjax) {}

  ngOnInit() {
    this.initTable();
    this.initForm();
  }

  ngAfterViewInit(): void {}
  onFormValue(val: FormValue) {
    this.tableData = this.newTableData(val);
  }

  onBtnRemove() {
    this.tableData.rows = this.checkboxTable.removeSelected();
  }

  onBtnPlot() {
    console.log(this.tableData.rows);
    this.isLoading = true;
    this.charts = [];
    this.ajaxService.plotChart(this.tableData.rows).subscribe(data => {
      this.charts = data.map(d => d.chart);
      this.isChartAvailable = true;
      this.isLoading = false;
    });
  }

  private initForm() {
    this.ajaxService.getVisualForm().subscribe(r => {
      this.formEntity = r;
      console.log(r);
      this.isDataAvailable = true;
    });
    this.formInitialValue = {
      xField: "order_date",
      xFunc: "year",
      yField: "profit",
      yFunc: "sum"
    };
  }

  private initTable() {
    this.tableData = {
      cols: ["xField", "xFunc", "yField", "yFunc"],
      rows: []
    };
  }
  private newTableData(val: FormValue) {
    let newData = {
      cols: this.tableData.cols,
      rows: [...this.tableData.rows, val]
    };
    return newData;
  }
}
