import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private router:Router, private http:HttpClient, private uService: UserService) { }

  onLogin(form: NgForm){

    if (!form.valid){
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    this.uService.authenticate(email, password).subscribe((res: any) => {
      //storing token
      //storing user info
      this.uService.storingUserInfo(res);
      this.router.navigate(['jobs']);
    },
    (err: HttpErrorResponse)=>{
      console.log('could not connect to the endpoint', err);
      return;
    });
  }
  ngOnInit() {
  }
}
