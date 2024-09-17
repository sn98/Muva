import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { JobInfoPage } from './job-info.page';

const routes: Routes = [
  {
    path: '',
    component: JobInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  FormsModule,
  ],
  exports: [RouterModule],
})
export class JobInfoPageRoutingModule {}
