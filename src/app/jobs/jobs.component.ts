import { Component, OnInit } from '@angular/core';
import { Job } from '../shared/job.model';
import { JobsService } from '../shared/job.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent implements OnInit {
  jobs: Job[] = [];
  selectedSegment = 'All Jobs';
  segmentTabs: string[] = ['All Jobs', 'Assigned', 'Unassigned', 'Completed', 'Cancelled'];
  searchTerm;
  order = 'none';
  constructor(private jService: JobsService) {}

  filterjobs(status:string, order): Job[]{
    let results ;
    if(status === 'All Jobs' && order === 'none'){
      results = this.jobs;
      return results.sort((a,b) => a.jobid.localeCompare(b.jobid));
    }
    if (order === 'none'){
      results = this.jobs.filter(j => j.status === status);
      return results.sort((a,b) => a.jobid.localeCompare(b.jobid));
    }


    //Courier Filter
    if(order === 'courier' && status === 'All Jobs'){
      results = this.jobs;
      return results.sort((a,b) => a.courier.localeCompare(b.courier));
    }
    if (order === 'courier'){
      results = this.jobs.filter(j => j.status === status);
      return results.sort((a,b) => a.courier.localeCompare(b.courier));
    }


    //Job Type Filter
    if(order === 'jobtype' && status === 'All Jobs'){
      results = this.jobs;
      return results.sort((a,b) => a.jobtype.localeCompare(b.jobtype));
    }
    if (order === 'jobtype'){
      results = this.jobs.filter(j => j.status === status);
      return results.sort((a,b) => a.jobtype.localeCompare(b.jobtype));
    }
}

  searching(event){
    this.searchTerm = event;
  }

  segmentChosen(name){
    this.selectedSegment = name;
  }

  ngOnInit() {
    this.jobs = this.jService.getJobs();
  }

}
