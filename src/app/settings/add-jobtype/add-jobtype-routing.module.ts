import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddJobtypePage } from './add-jobtype.page';

const routes: Routes = [
  {
    path: '',
    component: AddJobtypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddJobtypePageRoutingModule {}
