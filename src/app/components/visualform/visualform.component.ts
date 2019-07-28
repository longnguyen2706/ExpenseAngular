import { VisualFormEntity } from "./../../models/visual-form.entity.model";
import { FormOption } from "./../../models/form-value.model";
import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { FormValue } from "src/app/models/form-value.model";

@Component({
  selector: "app-visualform",
  templateUrl: "./visualform.component.html",
  styleUrls: ["./visualform.component.less"]
})
export class VisualformComponent implements OnInit {
  @Input("initialValue") initialVal: FormValue;
  @Input("formEntity") formEntity: VisualFormEntity;
  @Output() formValue: EventEmitter<FormValue> = new EventEmitter<FormValue>();

  xField: any;
  yField: any;
  xFunc: any;
  yFunc: any;
  xFieldOptions: Array<FormOption>;
  yFieldOptions: Array<FormOption>;
  xFuncOptions: Array<FormOption>;
  yFuncOptions: Array<FormOption>;

  constructor() {}

  onXFieldChange(xField) {
    this.xFuncOptions = this.formEntity.fieldFuncMap.get(this.xField);
    this.xFunc = null;
  }

  onYFieldChange(yField) {
    this.yFuncOptions = this.formEntity.fieldFuncMap.get(this.yField);
    this.yFunc = null;
  }

  onBtnClick() {
    if (!this.validateInput()) {
      alert("Invalid input!");
    } else {
      this.formValue.emit({
        xField: this.xField,
        xFunc: this.xFunc,
        yField: this.yField,
        yFunc: this.yFunc
      });
    }
  }

  validateInput(): boolean {
    let isNotNull: boolean =
      this.xField && this.yField && this.xFunc && this.yFunc;
    let isNotDuplicate: boolean = this.xField !== this.yField;
    return isNotNull && isNotDuplicate;
  }
  ngOnInit() {
    this.xFieldOptions = this.yFieldOptions = this.formEntity.fieldOptions;
    this.xField = this.initialVal.xField;
    this.yField = this.initialVal.yField;
    this.xFuncOptions = this.formEntity.fieldFuncMap.get(this.xField);
    this.yFuncOptions = this.formEntity.fieldFuncMap.get(this.yField);
  }
}
