import { Component, Input, OnInit } from '@angular/core';
import { MatTableData } from 'src/app/models/table-data.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit {

  @Input ('data') d: MatTableData;
  @Input ('height') height: string = 'auto';
  @Input ('width') width: string = '100%';

  constructor() { }

  ngOnInit() {
  }

}
