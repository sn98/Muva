import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AllcouriersComponent } from './couriers/allcouriers/allcouriers.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CouriersComponent } from './couriers/couriers.component';
import { HeaderComponent } from './header/header.component';
import { AlljobsComponent } from './jobs/alljobs/alljobs.component';
import { JobsComponent } from './jobs/jobs.component';
import { MapComponent } from './map/map.component';
import { CourierService } from './shared/courier.service';
import { JobsService } from './shared/job.service';
import { AllhistoryComponent } from './history/allhistory/allhistory.component';
import { HistoryComponent } from './history/history.component';
import { JobCreateComponent } from './jobs/job-create/job-create.component';
import { HomePageRoutingModule } from './home/home-routing.module';
import { CourierCreateComponent } from './couriers/courier-create/courier-create.component';
import { SettingsComponent } from './settings/settings.component';
import { GeneralSettingsComponent } from './settings/general-settings/general-settings.component';
import { JobsSettingsComponent } from './settings/jobs-settings/jobs-settings.component';
import { PopoverComponent } from './popover/popover.component';
import { SettingsheaderComponent } from './settingsheader/settingsheader.component';
import { AddAddressComponent } from './jobs/job-info/add-address/add-address.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CustomModuleModule } from './custom-module/custom-module.module';
import { AllPopoverComponent } from './all-popover/all-popover.component';
import { InfoCpHeaderComponent } from './info-cp-header/info-cp-header.component';
import { AuthGuard } from './login/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    JobsComponent,
    AlljobsComponent,
    CouriersComponent,
    MapComponent,
    AllcouriersComponent,
    HeaderComponent,
    AllhistoryComponent,
    HistoryComponent,
    JobCreateComponent,
    CourierCreateComponent,
    SettingsComponent,
    GeneralSettingsComponent,
    JobsSettingsComponent,
    PopoverComponent,
    SettingsheaderComponent,
    AddAddressComponent,
    AllPopoverComponent,
    InfoCpHeaderComponent
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HomePageRoutingModule , FormsModule,
    Ng2SearchPipeModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, JobsService, CourierService, AllcouriersComponent, AuthGuard],
  bootstrap: [AppComponent],
  exports: [CustomModuleModule]
})
export class AppModule {}
