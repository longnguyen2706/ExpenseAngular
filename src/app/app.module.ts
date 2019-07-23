import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { VisualizerComponent } from './components/visualizer/visualizer.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartsModule } from 'ng2-charts';
import { CommonModule } from "@angular/common";
import { ChartComponent } from './components/chart/chart.component';
import { TableComponent } from './components/table/table.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatTableModule} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    VisualizerComponent,
    ChartComponent,
    TableComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    // NgxChartsModule,
    ChartsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
