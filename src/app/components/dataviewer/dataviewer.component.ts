import { Component, OnInit } from '@angular/core';
import { MatTableData } from 'src/app/models/table-data.model';
import { VisualizerAjax } from 'src/app/services/visualizers.ajax.service';

@Component({
  selector: 'app-dataviewer',
  templateUrl: './dataviewer.component.html',
  styleUrls: ['./dataviewer.component.less']
})
export class DataviewerComponent implements OnInit {
  tableData: MatTableData;
  isDataAvailable = false;
  height = "400px";
  width = "90%";
  
  constructor(private ajax: VisualizerAjax) { }
  
  ngOnInit() {
    this.ajax.getAllRecords().subscribe(r => {
      this.tableData = r;
      this.isDataAvailable = true;
    });
  }

}
