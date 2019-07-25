import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ChartEntity, Row, RowCell } from '../models/chart-entity.model';
import { MatTableData } from '../models/table-entity.model';
import { mockData } from '../resources/mock-data';
import { ChartDataModel } from './../models/chart-data.model';
import { VisualizerData } from './../models/visualizer-data.model';
import { VisualizerEntity } from './../models/visualizer-entity.model';
import { urlMapping } from './../resources/url';


@Injectable({
    'providedIn': 'root',
})
export class VisualizerAjax {
    constructor(private http: HttpClient) { };

    getSalesByYear(): Observable<ChartDataModel> {
        return this.http.get<ChartEntity>(urlMapping.saleByYear).pipe(map(entity => {
            let chartData: ChartDataModel = {
                chartData: this.processRow(entity.rows),
                chartLabels: entity.columns.map(c => c.label)
            };
            return chartData;
        }));


    }

    getQuantityByMonth(): Observable<VisualizerData> {
        return this.http.get<VisualizerEntity>(urlMapping.quantityByMonth).pipe(map(entity => {
            let chart: ChartEntity = entity.chart;
            let chartData: ChartDataModel = {
                chartData: this.processRow(chart.rows),
                chartLabels: chart.columns.map(c => c.label)
            };
            return {
                chart: chartData,
                table: entity.table
            };
        }
        ));

    }

    getAllRecords(): Observable<MatTableData> {
        return this.http.get<any>(urlMapping.allRecords).pipe(map(e => {
            let records: Array<any> = e['records']
            let row_data: Array<Object> = [];
            records.forEach(r => row_data.push(r['fields']));
            let data: MatTableData = {
                cols: e['cols'],
                rows: row_data
            }
            return data;
        }))
    }

    mock(): Observable<ChartDataModel> {
        return of({
            chartData: this.processRow(mockData.rows),
            chartLabels: mockData.columns.map(c => c.label)
        })
    }

    private processRow(rows: Array<Row>): ChartDataSets[] {
        let chartData: Array<ChartDataSets> = [];
        rows.forEach(row => {
            let data: ChartDataSets = {
                data: row.data.map(c => this.processCell(c)),
                label: row.label
            }
            chartData.push(data);
        })
        return chartData;
    }

    private processCell(cell: RowCell) {
        return cell.v;
    }
}