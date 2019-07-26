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
import {MatButtonModule, MatTableModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatLabel} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { DataviewerComponent } from './components/dataviewer/dataviewer.component';
import { DataprocessingComponent } from './components/dataprocessing/dataprocessing.component';
import { SelectComponent } from './components/select/select.component';
import {MatSelectModule} from '@angular/material/select';
import { VisualformComponent } from './components/visualform/visualform.component';
@NgModule({
  declarations: [
    AppComponent,
    VisualizerComponent,
    ChartComponent,
    TableComponent,
    DataviewerComponent,
    DataprocessingComponent,
    SelectComponent,
    VisualformComponent,

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
    MatTableModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    MatSelectModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
