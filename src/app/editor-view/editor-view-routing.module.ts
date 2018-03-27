import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailViewComponent } from './detail-view.component';

const routes: Routes = [
  {
    path: '',
    component: DetailViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorViewRoutingModule { }