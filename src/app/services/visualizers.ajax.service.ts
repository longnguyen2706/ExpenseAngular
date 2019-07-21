
import { ChartDataModel } from './../models/chart-data.model';
import { urlMapping } from './../resources/url';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataEntity } from '../models/data-entity.model';
import {map} from 'rxjs/operators';
import { clearLine } from 'readline';


@Injectable({
    'providedIn': 'root',
})
export class VisualizerAjax {
    constructor(private http:HttpClient){};
    getSalesByYear(): Observable<ChartDataModel>{
        return this.http.get<DataEntity>(urlMapping.saleByYear).pipe(map(entity => {
            let chartData: ChartDataModel = {
                data: entity.rows.map(r => r.data),
                labels: entity.columns.map(c => c.label)
            };
            return chartData;
        }));
    }
}