import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourierInfoPageRoutingModule } from './courier-info-routing.module';

import { CourierInfoPage } from './courier-info.page';
import { AppModule } from 'src/app/app.module';
import { CustomModuleModule } from 'src/app/custom-module/custom-module.module';

@NgModule({
  imports: [
    CustomModuleModule,
    CommonModule,
    FormsModule,
    IonicModule,
    CourierInfoPageRoutingModule
  ],
  declarations: [CourierInfoPage]
})
export class CourierInfoPageModule {}
