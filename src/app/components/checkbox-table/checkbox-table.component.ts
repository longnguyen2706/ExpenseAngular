import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { SelectionModel } from "@angular/cdk/collections";
import { MatTableData } from "src/app/models/table-entity.model";

@Component({
  selector: "app-checkbox-table",
  templateUrl: "./checkbox-table.component.html",
  styleUrls: ["./checkbox-table.component.less"]
})
export class CheckboxTableComponent implements OnInit {
  @Input("data") d: MatTableData;
  @Input("height") height: string = "auto";
  @Input("width") width: string = "100%";

  selection = new SelectionModel<any>(true, []);
  columnsToDisplay = [];
  constructor() {}

  ngOnInit() {
    this.columnsToDisplay = ["select", ...this.d.cols];
    console.log(this.columnsToDisplay);
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.d.rows.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.d.rows.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  /** The label for the checkbox on the passed row */
  checkboxLabel(row): string {
    if (!row) {
      return `${this.isAllSelected() ? "select" : "deselect"} all`;
    }
    return `${
      this.selection.isSelected(row) ? "deselect" : "select"
    } row ${row.position + 1}`;
  }

  public removeSelected() {
    let nonSelectedRows = [];
    this.d.rows.forEach(row => {
      if (!this.selection.isSelected(row)) {
        nonSelectedRows.push(row);
      }
    });
    // clear selected
    this.selection.clear();
    this.d.rows = nonSelectedRows;
    return nonSelectedRows;
  }
}
