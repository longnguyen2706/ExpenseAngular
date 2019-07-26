import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.less']
})
export class SelectComponent implements OnInit, OnChanges {
 
  @Input('fieldOptions') fieldOptions;
  @Input ('selected') selected;
  @Output() selectedChange = new EventEmitter();
  constructor() { }
  
  ngOnInit() {
  }
  
  // emit new value to parent
  emitSelected(){
    this.selectedChange.emit(this.selected);
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

}
