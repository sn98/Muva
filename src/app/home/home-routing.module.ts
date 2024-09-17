import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourierCreateComponent } from '../couriers/courier-create/courier-create.component';

import { CouriersComponent } from '../couriers/couriers.component';
import { HistoryComponent } from '../history/history.component';
import { JobCreateComponent } from '../jobs/job-create/job-create.component';
import { AddAddressComponent } from '../jobs/job-info/add-address/add-address.component';
import { JobsComponent } from '../jobs/jobs.component';
import { MapComponent } from '../map/map.component';
import { SettingsComponent } from '../settings/settings.component';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'jobs',
        component: JobsComponent
      },
      {
        path: 'job-create',
        component: JobCreateComponent
      },
      {
        path: 'couriers',
        component: CouriersComponent
      },
      {
        path: 'map',
        component: MapComponent
      },
      {
        path: 'history',
        component: HistoryComponent
      },
      {
        path: 'courier-create',
        component: CourierCreateComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      },
      {
        path: 'add-address',
        component: AddAddressComponent
      },
      {
        path: 'courier-edit/:id',
        loadChildren: () => import('../couriers/courier-edit/courier-edit.module').then( m => m.CourierEditPageModule)
      },
      {
        path: 'job-info/:jobid',
        loadChildren: () => import('../jobs/job-info/job-info.module').then( m => m.JobInfoPageModule)
      },
      {
        path: 'courier-info/:id',
        loadChildren: () => import('../couriers/courier-info/courier-info.module').then( m => m.CourierInfoPageModule)
      },
      {
        path: 'add-jobtype/:type',
        loadChildren: () => import('../settings/add-jobtype/add-jobtype.module').then( m => m.AddJobtypePageModule)
      },
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
