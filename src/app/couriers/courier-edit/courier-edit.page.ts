import { Location } from '@angular/common';
import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Courier } from 'src/app/shared/courier.model';
import { CourierService } from 'src/app/shared/courier.service';

@Component({
  selector: 'app-courier-edit',
  templateUrl: './courier-edit.page.html',
  styleUrls: ['./courier-edit.page.scss'],
})
export class CourierEditPage implements OnInit {
  couriers: Courier[] = [];
  courierData: Courier;
  cstatus = '';
  cname = '';
  cphone = '';
  id;

  statuses;

  constructor(
    private cService: CourierService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private router:Router
    ) { }

  goback(): void {
    this.location.back()
  }
  editCourier(){
    console.log(this.id, this.cname, this.cphone, this.cstatus);
    this.cService.updateCourier(this.id, this.cname, this.cphone, this.cstatus).subscribe(() => {
        this.router.navigate(['couriers'])
      }
    );
  }

  getColor(status){
    return this.cService.getColors(status);
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('id')){
        //redirect
        return;
      }
      const courierId = paramMap.get('id');
      var cid = Number(courierId);

      this.cService.getACourier(cid).subscribe(
        (couriers) => {
          this.courierData = couriers;
          this.cstatus = this.courierData.status;
          this.cname = this.courierData.name;
          this.cphone = this.courierData.phoneNumber;
          this.id = this.courierData.id;
        }
      )
    });

    this.statuses = this.cService.Status();
  }

}
