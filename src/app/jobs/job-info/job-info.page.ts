import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from '../../shared/job.model';
import { JobsService } from '../../shared/job.service';

@Component({
  selector: 'app-job-info',
  templateUrl: './job-info.page.html',
  styleUrls: ['./job-info.page.scss'],
})
export class JobInfoPage implements OnInit {
  jobs: Job[] = [];
  jobData: Job;
  jcourier;
  jstatus;

  statuses ;

  constructor(private jService: JobsService, private activatedRoute: ActivatedRoute, private location:Location, private router:Router) { }

  goback(): void {
    this.location.back()
  }

  gotoAddress(){
    this.router.navigate(['add-address']);
  }
  getColor(status){
    return this.jService.getColors(status);
  }


  editJob(){
    this.jService.updateJobs(this.jobData.jobid, this.jcourier, this.jstatus);
    this.router.navigate(['jobs'])
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('jobid')){
        //redirect
        return;
      }
      const jobId = paramMap.get('jobid');
      this.jobData = this.jService.getAJob(jobId);
      this.jcourier = this.jobData.courier;
      this.jstatus = this.jobData.status;
    });
    this.statuses = this.jService.Status();
    this.jobs = this.jService.getJobs();
  }

}
