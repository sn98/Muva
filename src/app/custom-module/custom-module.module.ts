import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoHeaderComponent } from '../info-header/info-header.component';

@NgModule({
  declarations: [
    InfoHeaderComponent,
  ],
  imports: [
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [InfoHeaderComponent]
})
export class CustomModuleModule { }
