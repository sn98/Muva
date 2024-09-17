import { HttpErrorResponse } from '@angular/common/http';
import { Component, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Courier } from '../../shared/courier.model';
import { CourierService } from '../../shared/courier.service';

@Component({
  selector: 'app-allcouriers',
  templateUrl: './allcouriers.component.html',
  styleUrls: ['./allcouriers.component.scss'],
})
export class AllcouriersComponent implements OnInit{

  @Input() couriers: Courier[];
  @Input() searchTerm: string;
  couriers2: any;
  constructor(
    private cService: CourierService,
    private router: Router
    ){}

  getColor(status){
    return this.cService.getColors(status);
  }

  showCourierDetails(id: number) {
    this.router.navigate(['courier-info', id]);
  }

  gotoAddNew(){
    this.router.navigate(['courier-create']);
  }

  ngOnInit() {
    this.cService.couriers.subscribe(
      (couriers) => {
        this.couriers = couriers;
        console.log(this.couriers)
      }
    )
  }

}
