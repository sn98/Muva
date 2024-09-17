import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddJobtypePageRoutingModule } from './add-jobtype-routing.module';

import { AddJobtypePage } from './add-jobtype.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddJobtypePageRoutingModule
  ],
  declarations: [AddJobtypePage]
})
export class AddJobtypePageModule {}
