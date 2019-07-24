import { Component, OnInit, Input } from '@angular/core';
import { TableData, MatTableData } from 'src/app/models/table-data.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit {

  @Input ('data') d: MatTableData;
  constructor() { }

  ngOnInit() {
  }

}
