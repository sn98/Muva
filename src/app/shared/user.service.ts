import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:8070';

  constructor(private http:HttpClient){}

  authenticate(email, password){
    const formData = new FormData();
    formData.append('username', email);
    formData.append('password', password);

    return this.http.post(this.url+'/authenticate', formData);
  }

  storingUserInfo(res){
    localStorage.setItem('Token', res.data.auth.access_token);
    localStorage.setItem('user_id', res.data.user.id);
    localStorage.setItem('user_type', res.data.user.type);
    localStorage.setItem('user_name', res.data.user.name);
    localStorage.setItem('user_email', res.data.user.email);
    localStorage.setItem('user_phoneNumber', res.data.user.phoneNumber);
    localStorage.setItem('user_merchant', res.data.user.merchant);
  }
}
