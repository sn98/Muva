import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourierEditPageRoutingModule } from './courier-edit-routing.module';

import { CourierEditPage } from './courier-edit.page';
import { CustomModuleModule } from 'src/app/custom-module/custom-module.module';

@NgModule({
  imports: [
    CustomModuleModule,
    CommonModule,
    FormsModule,
    IonicModule,
    CourierEditPageRoutingModule,
  ],
  declarations: [CourierEditPage]
})
export class CourierEditPageModule {}
