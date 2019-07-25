import { ChartEntity } from './chart-entity.model';
import { MatTableData } from './table-entity.model';
export interface VisualizerEntity{
    chart: ChartEntity,
    table: MatTableData
}