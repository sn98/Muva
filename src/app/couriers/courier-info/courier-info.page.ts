import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Courier } from 'src/app/shared/courier.model';
import { CourierService } from 'src/app/shared/courier.service';

@Component({
  selector: 'app-courier-info',
  templateUrl: './courier-info.page.html',
  styleUrls: ['./courier-info.page.scss'],
})
export class CourierInfoPage implements OnInit {
  couriers: Courier[] = [];
  courierData: Courier;

  constructor(private cService: CourierService, private activatedRoute: ActivatedRoute, private location: Location, private router:Router) { }

  goback(): void {
    this.location.back()
  }

  showCourierEdit(id) {
    this.router.navigate(['courier-edit', id]);
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
        }
      )
    });
  }

}
