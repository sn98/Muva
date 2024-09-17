import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Job } from '../../shared/job.model';
import { JobsService } from '../../shared/job.service';

@Component({
  selector: 'app-alljobs',
  templateUrl: './alljobs.component.html',
  styleUrls: ['./alljobs.component.scss'],
})

export class AlljobsComponent implements OnInit {

  @Input() jobs:Job[];
  @Input() searchTerm: string;
  constructor(private jService: JobsService, private router: Router){}

  getColor(status){
    return this.jService.getColors(status);
  }
  gotoAddNew(){
    this.router.navigate(['job-create']);
  }
  showJobDetails(item) {
    this.router.navigate(['job-info', item.jobid]);
  }
  ngOnInit() {
    this.jobs = this.jService.getJobs();
  }

}
