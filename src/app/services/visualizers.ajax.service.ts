import { urlMapping } from './../resources/url';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    'providedIn': 'root',
})
export class VisualizerAjax {
    constructor(private http:HttpClient){};
    getSalesByYear(): Observable<any>{
        return this.http.get(urlMapping.saleByYear);
    }
}