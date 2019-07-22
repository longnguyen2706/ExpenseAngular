import { Label, Color } from 'ng2-charts';
import { ChartDataSets, ChartOptions } from 'chart.js';

export interface ChartDataModel{
   chartData: ChartDataSets[],
   chartLabels: Label[],
   chartColors?: Color[],
   chartOptions?: ChartOptions[]
}