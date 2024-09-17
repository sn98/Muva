import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobs-settings',
  templateUrl: './jobs-settings.component.html',
  styleUrls: ['./jobs-settings.component.scss'],
})
export class JobsSettingsComponent implements OnInit {
  jobTypes = [
    {type:"Food Delivery", service:"all jobs concerning food deliveries"},
    {type:"Grocery Shopping", service:"all jobs grocery shopping"},
    {type:"Tax Office: Car Stuff", service:"all jobs at the tax office"},
    {type:"JPS", service:"all electricity bills"},
    {type:"Bill Payment", service:"all jobs concerning bill payment"},
  ]
  constructor(private router:Router) { }

  showJobType(type){
    this.router.navigate(['add-jobtype', type]);
  }
  ngOnInit() {
    this.jobTypes;
  }

}
