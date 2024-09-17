import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
  constructor(private router:Router) { }
  gotoSettings(){
    this.router.navigate(['settings']);
  }
  logout(){
    localStorage.removeItem('Token');
    localStorage.removeItem('user_id');
    localStorage.removeItem('user_type');
    localStorage.removeItem('user_name');
    localStorage.removeItem('user_email');
    localStorage.removeItem('user_phoneNumber');
    this.router.navigate(['login']);
  }

  ngOnInit() {}

}
