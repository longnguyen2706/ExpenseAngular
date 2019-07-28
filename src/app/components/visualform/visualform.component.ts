import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectorRef
} from "@angular/core";
import { FormValue } from "src/app/models/form-value.model";

@Component({
  selector: "app-visualform",
  templateUrl: "./visualform.component.html",
  styleUrls: ["./visualform.component.less"]
})
export class VisualformComponent implements OnInit {
  xField: any = "steak-0";
  yField: any;
  xFunc: any;
  yFunc: any;
  @Output() formValue: EventEmitter<FormValue> = new EventEmitter<FormValue>();

  xFieldOptions = [
    { value: "steak-0", label: "Steak" },
    { value: "pizza-1", label: "Pizza" },
    { value: "tacos-2", label: "Tacos" }
  ];

  yFieldOptions = [
    { value: "a-0", label: "a" },
    { value: "a-1", label: "b" },
    { value: "a-2", label: "c" }
  ];

  xFuncOptions = [
    { value: "steak-0", label: "Steak1" },
    { value: "pizza-1", label: "Pizza1" },
    { value: "tacos-2", label: "Tacos1" }
  ];

  yFuncOptions = [
    { value: "a-0", label: "a1" },
    { value: "a-1", label: "b1" },
    { value: "a-2", label: "c1" }
  ];

  constructor() {}

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
    return this.xField && this.yField && this.xFunc && this.yFunc;
  }
  ngOnInit() {}
}
