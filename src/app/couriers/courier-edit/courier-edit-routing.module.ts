import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourierEditPage } from './courier-edit.page';

const routes: Routes = [
  {
    path: '',
    component: CourierEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourierEditPageRoutingModule {}
