import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourierInfoPage } from './courier-info.page';

const routes: Routes = [
  {
    path: '',
    component: CourierInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourierInfoPageRoutingModule {}
