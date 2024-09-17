import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { take, map, tap } from "rxjs/operators";
import { Courier } from "./courier.model";

@Injectable({
  providedIn: 'root'
})
export class CourierService {
  private _couriers = new BehaviorSubject<Courier[]>([]);
  authheader = new HttpHeaders({'Content-Type':'application/json','Authorization': 'Bearer '+localStorage.getItem('Token')});
  url = 'http://localhost:8070/';
  private statuses = [
    {status:'available'},
    {status:'busy'},
    {status:'offline'},
  ];

  get couriers() {
    return this._couriers.asObservable();
  }

  constructor(private http:HttpClient){}

  Status(){
    return this.statuses;
  }

  getCouriers(): Observable<Courier[]>{
    if (this._couriers.getValue().length === 0 )
    {
      this.loadCouriers();
    }
    return this._couriers.asObservable();
  }

  loadCouriers(): void{
    var type = 'courier'
    var merchant = localStorage.getItem('user_merchant');
    var header = new HttpHeaders({'Content-Type':'application/json','Authorization': 'Bearer '+localStorage.getItem('Token')});

    this.http.get(this.url+'merchant-users?limit=100&type='+type+'&merchant='+merchant, {headers:header}).subscribe(
      (res:any) => {
        this._couriers.next(res.data.merchantUsers);
      }
    )
  }
  getACourier(id:number){
    return this.couriers.pipe(
      take(1),
      map(couriers => {
        return {...couriers.find(c => c.id === id)};
      }
    ));
  }

  updateCourier(id: number, cname:string, cphone:string, cstatus:string){
    console.log(cname,cphone);
    var data = {
      'phoneNumber': cphone,
      'name': cname,
      'status': cstatus,
    }
    var result;
    this.http.put(this.url+'merchant-users/'+id, data, {headers:this.authheader}).subscribe(
      (res: any) => {
        result = res.data.merchantUser;
      }
    );
    return this.updateAfterEdit(id, cname, cphone, cstatus)
  }

  updateAfterEdit(id: number, cname:string, cphone:string, cstatus:string){
    return this.couriers.pipe(take(1), tap(couriers => {
      const updated_courier_index = couriers.findIndex( cl => cl.id === id)
      const updated_courier =[...couriers];
      const old_courier = updated_courier[updated_courier_index];
      updated_courier[updated_courier_index] = new Courier(
          old_courier.id,
          cname,
          old_courier.type,
          old_courier.email,
          cphone,
          old_courier.merchant,
          old_courier.location,
          cstatus,
        );
        this._couriers.next(updated_courier);
      })
    );
  }
  addCourier(cname, cphone, cemail, cpassword, mid, cstatus, location){
    var type='courier';
    console.log(cname,cphone);
    var data = {
      'email': cemail,
      'password': cpassword,
      'phoneNumber': cphone,
      'name': cname,
      'type': type,
      'status': cstatus,
      'location': location,
      'merchant': mid,
    }
    var result;
    var header = new HttpHeaders({'Content-Type':'application/json','Authorization': 'Bearer '+localStorage.getItem('Token')});
    this.http.post(this.url+'merchant-users', data, {headers:header}).subscribe(
      (res: any) => {
        result = res.data.merchantUser;

        this.couriers.pipe(take(1)).subscribe(courier => {
          console.log('before sendback', result)
          this._couriers.next(courier.concat(result))
        });
      }
    );

  }
  getColors(status){
    switch (status) {
      case 'available':
        return '#56CCDB';
      case 'busy':
        return '#BF0000';
      case 'offline':
        return '#CACECE';
    }
  }

}
