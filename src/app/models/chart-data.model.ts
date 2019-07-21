import { Label } from 'ng2-charts';

export interface ChartDataModel{
   data: Array<any>,
   dataLabel?: string,
   labels: Array<Label>
}