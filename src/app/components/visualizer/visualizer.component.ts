import { VisualizerAjax } from './../../services/visualizers.ajax.service';
import { Component, OnInit } from '@angular/core';
import { Chart, ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
@Component({
  selector: 'app-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.less']
})
export class VisualizerComponent implements OnInit {
 
  chart = []; // This will hold our chart info

  constructor(private ajax: VisualizerAjax) {
  }

  ngOnInit() {
    
  }


 lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];
  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
 lineChartOptions = {
    responsive: true,
  };
 lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
 lineChartLegend = true;
 lineChartType = 'line';
  lineChartPlugins = [];
}
