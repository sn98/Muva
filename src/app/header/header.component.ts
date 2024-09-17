import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { EventEmitter } from '@angular/core';
import { PopoverComponent } from '../popover/popover.component';
import { AllPopoverComponent } from '../all-popover/all-popover.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public popoverController: PopoverController, private router:Router) {}
  @Output() filterVar = new EventEmitter<string>();
  filterTerm:string;

  searching(event){
    this.filterVar.emit(this.filterTerm);
  }
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  async allPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: AllPopoverComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  ngOnInit() {}

}
