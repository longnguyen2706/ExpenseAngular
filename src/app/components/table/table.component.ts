import {
  Component,
  Input,
  OnInit,
  OnChanges,
  ChangeDetectorRef
} from "@angular/core";
import { MatTableData } from "src/app/models/table-entity.model";
import { SelectionModel } from "@angular/cdk/collections";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.less"]
})
export class TableComponent implements OnInit, OnChanges {
  @Input("data") d: MatTableData;
  @Input("height") height: string = "auto";
  @Input("width") width: string = "100%";
  constructor(private changeDetectorRefs: ChangeDetectorRef) {}

  ngOnInit() {
    // this.d.cols.push("select");
  }

  ngOnChanges() {
    console.log("data table changed");
    this.refresh();
  }

  public refresh() {
    this.changeDetectorRefs.detectChanges();
  }
  public reRender(d: MatTableData) {
    this.d = d;
    this.refresh();
  }
}
