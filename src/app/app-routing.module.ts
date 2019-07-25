import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataviewerComponent } from './components/dataviewer/dataviewer.component';
import { VisualizerComponent } from './components/visualizer/visualizer.component';


const routes: Routes = [
  {path: 'dashboard', component: VisualizerComponent},
  {path: 'dataviewer', component: DataviewerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
