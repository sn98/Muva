import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-jobtype',
  templateUrl: './add-jobtype.page.html',
  styleUrls: ['./add-jobtype.page.scss'],
})
export class AddJobtypePage implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private location:Location) { }
  goback(): void {
    this.location.back()
  }
  jobtype;
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('type')){
        //redirect
        return;
      }
      this.jobtype = paramMap.get('type');
    });
    this.jobtype;
  }

}
