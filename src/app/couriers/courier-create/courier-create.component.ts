import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { Courier } from 'src/app/shared/courier.model';
import { CourierService } from 'src/app/shared/courier.service';

@Component({
  selector: 'app-courier-create',
  templateUrl: './courier-create.component.html',
  styleUrls: ['./courier-create.component.scss'],
})
export class CourierCreateComponent implements OnInit{
  @Input() couriers: Courier[];
  cstatus = 'available';
  statuses;
  couriers2: any;

  constructor(
    private location:Location,
    private cService:CourierService,
    private router:Router
  ) { }

  goback(): void {
    this.location.back()
  }

  createCourier(form: NgForm){
    if (!form.valid){
      return;
    }
    var cname = form.value.cname;
    var cphone = form.value.cphone;
    var cemail = form.value.cemail;
    var cpassword = form.value.cpassword;
    var mid = form.value.mid;
    var location = form.value.location;

    this.cService.addCourier(cname, cphone, cemail, cpassword, mid, this.cstatus, location);

    form.reset();
    this.router.navigate(['couriers']);
  }
  getColor(status){
    return this.cService.getColors(status);
  }

  ngOnInit() {
    this.statuses = this.cService.Status();
  }
}
