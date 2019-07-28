import { Component, OnInit } from "@angular/core";
import { MatTableData } from "./../../models/table-entity.model";
import { FormValue } from "src/app/models/form-value.model";

@Component({
  selector: "app-dataprocessing",
  templateUrl: "./dataprocessing.component.html",
  styleUrls: ["./dataprocessing.component.less"]
})
export class DataprocessingComponent implements OnInit {
  tableData: MatTableData = {
    cols: ["xField", "xFunc", "yField", "yFunc"],
    rows: []
  };
  constructor() {}

  ngOnInit() {}

  getFormValue(val: FormValue) {
    this.tableData = this.newTableData(val);
  }

  private newTableData(val: FormValue) {
    let newData = {
      cols: this.tableData.cols,
      rows: [...this.tableData.rows, val]
    };
    return newData;
  }
}
