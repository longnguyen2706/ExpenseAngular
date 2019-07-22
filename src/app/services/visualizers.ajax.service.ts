import { ChartDataSets } from 'chart.js';

import { ChartDataModel } from './../models/chart-data.model';
import { urlMapping } from './../resources/url';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataEntity, Row, RowCell } from '../models/data-entity.model';
import { of } from 'rxjs';
import {map} from 'rxjs/operators';
import { mockData } from '../resources/mock-data';


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

    mock(): Observable<ChartDataModel>{
        return of( {
            chartData: this.processRow(mockData.rows),
            chartLabels: mockData.columns.map(c => c.label)
        })
    }

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