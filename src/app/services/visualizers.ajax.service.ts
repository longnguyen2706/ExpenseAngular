import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataEntity, Row, RowCell } from '../models/data-entity.model';
import { mockData } from '../resources/mock-data';
import { ChartDataModel } from './../models/chart-data.model';
import { MatTableData } from './../models/table-data.model';
import { urlMapping } from './../resources/url';



@Injectable({
    'providedIn': 'root',
})
export class VisualizerAjax {
    constructor(private http:HttpClient){};
    getSalesByYear(): Observable<ChartDataModel>{
        return this.http.get<DataEntity>(urlMapping.saleByYear).pipe(map(entity => {
            let chartData: ChartDataModel = {
                chartData: this.processRow(entity.rows),
                chartLabels: entity.columns.map(c => c.label)
            };
            return chartData;
        }));

        
    }

    getQuantityByMonth(): Observable<ChartDataModel>{
        return this.http.get<DataEntity>(urlMapping.quantityByMonth).pipe(map(entity => {
            let chartData: ChartDataModel = {
                chartData: this.processRow(entity.rows),
                chartLabels: entity.columns.map(c => c.label)
            };
            return chartData;
        }));

    }

    getAllRecords():Observable<MatTableData>{
        return this.http.get<any>(urlMapping.allRecords).pipe(map(e =>{
            let records: Array<any> = e['records']
            let row_data: Array<Object> = [];
            records.forEach (r => row_data.push (r['fields']));
            let data: MatTableData = {
                cols: e['cols'],
                rows: row_data
            }
            return data;
        }))
    }

    mock(): Observable<ChartDataModel>{
        return of( {
            chartData: this.processRow(mockData.rows),
            chartLabels: mockData.columns.map(c => c.label)
        })
    }

    private sortRow 
    private processRow( rows: Array<Row>) : ChartDataSets[]{
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

    private processCell (cell: RowCell){
        return cell.v;
    }
}