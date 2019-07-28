import { Component, OnInit } from "@angular/core";
import { MatTableData } from "./../../models/table-entity.model";
import { FormValue } from "src/app/models/form-value.model";
import { VisualFormEntity } from "src/app/models/visual-form.entity.model";

@Component({
  selector: "app-dataprocessing",
  templateUrl: "./dataprocessing.component.html",
  styleUrls: ["./dataprocessing.component.less"]
})
export class DataprocessingComponent implements OnInit {
  formInitialValue: FormValue;
  formEntity: VisualFormEntity;

  tableData: MatTableData;
  constructor() {}

  ngOnInit() {
    this.initTable();
    this.initForm();
  }

  getFormValue(val: FormValue) {
    this.tableData = this.newTableData(val);
  }

  private initForm() {
    this.formEntity = {
      fieldOptions: [
        { value: "steak-0", label: "Steak" },
        { value: "pizza-1", label: "Pizza" }
      ],
      fieldFuncMap: new Map([
        [
          "steak-0",
          [
            { value: "a", label: "a" },
            { value: "b", label: "b" },
            { value: "c", label: "c" }
          ]
        ],
        [
          "pizza-1",
          [
            { value: "d", label: "d" },
            { value: "e", label: "e" },
            { value: "f", label: "f" }
          ]
        ]
      ])
    };
    this.formInitialValue = {
      xField: "steak-0",
      xFunc: "a",
      yField: "pizza-1",
      yFunc: "d"
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
