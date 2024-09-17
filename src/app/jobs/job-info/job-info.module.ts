import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobInfoPageRoutingModule } from './job-info-routing.module';

import { JobInfoPage } from './job-info.page';
import { CustomModuleModule } from 'src/app/custom-module/custom-module.module';

@NgModule({
  imports: [
    CustomModuleModule,
    CommonModule,
    FormsModule,
    IonicModule,
    JobInfoPageRoutingModule
  ],
  declarations: [JobInfoPage]
})
export class JobInfoPageModule {}
