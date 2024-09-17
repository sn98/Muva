import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Courier } from '../shared/courier.model';
import { CourierService } from '../shared/courier.service';

@Component({
  selector: 'app-couriers',
  templateUrl: './couriers.component.html',
  styleUrls: ['./couriers.component.scss'],
})
export class CouriersComponent implements OnInit {
  couriers: any;
  selectedSegment = 'All Couriers';
  segmentTabs: string[] = ['All Couriers', 'Available', 'Busy', 'Offline'];
  searchTerm;
  order='none';
  constructor(private cService: CourierService) {}

 /* filtercouriers(status:string, order): Courier[]{
    let results ;
    if(status === 'All Couriers' && order === 'none'){
      results = this.couriers;
      return results.sort((a,b) => a.courierid.localeCompare(b.courierid));
    }
    if (order === 'none'){
      results = this.couriers.filter(j => j.status === status);
      return results.sort((a,b) => a.courierid.localeCompare(b.courierid));
    }


    //Courier Filter
    if(order === 'courier' && status === 'All Couriers'){
      results = this.couriers;
      return results.sort((a,b) => a.name.localeCompare(b.name));
    }
    if (order === 'courier'){
      results = this.couriers.filter(j => j.status === status);
      return results.sort((a,b) => a.name.localeCompare(b.name));
    }


    //Job Type Filter
    if(order === 'status' && status === 'All Couriers'){
      results = this.couriers;
      return results.sort((a,b) => a.status.localeCompare(b.status));
    }
    if (order === 'status'){
      results = this.couriers.filter(j => j.status === status);
      return results.sort((a,b) => a.status.localeCompare(b.status));
    }
  }
*/
  searching(event){
    this.searchTerm = event;
  }
  segmentChosen(name){
    this.selectedSegment = name;
  }
  ngOnInit() {
    this.cService.getCouriers().subscribe(
      (couriers) => {
        this.couriers = couriers;
      }
    )
  }

}
