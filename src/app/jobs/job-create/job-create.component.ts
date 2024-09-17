import { Location } from '@angular/common';
import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from 'src/app/shared/job.model';
import { JobsService } from 'src/app/shared/job.service';

@Component({
  selector: 'app-job-create',
  templateUrl: './job-create.component.html',
  styleUrls: ['./job-create.component.scss'],
})
export class JobCreateComponent implements OnInit {
  jobs: Job[] = [];
  jobData: Job;
  jstatus= '';
  jobtype= '';
  customer= '';
  courier= '';
  instructions= '';

  constructor(
    private jService: JobsService,
    private activatedRoute: ActivatedRoute,
    private location:Location,
    private router:Router
    ) { }
  goback(): void {
    this.location.back()
  }
  createJob(){
    this.jService.createJob(this.jobtype,this.jstatus,this.instructions,this.courier,this.customer)
    this.router.navigate(['jobs']);
  }

  getColor(status){
    return this.jService.getColors(status);
  }
  ngOnInit() {
    this.jobs = this.jService.getJobs();
  }
}
