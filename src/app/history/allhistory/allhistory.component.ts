import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Job } from 'src/app/shared/job.model';
import { JobsService } from 'src/app/shared/job.service';

@Component({
  selector: 'app-allhistory',
  templateUrl: './allhistory.component.html',
  styleUrls: ['./allhistory.component.scss'],
})
export class AllhistoryComponent implements OnInit {
  @Input() jobs:Job[];
  @Input() searchTerm: string;
  constructor(private jService: JobsService, private router: Router){}

  showJobDetails(item) {
    this.router.navigate(['job-info', item.jobid]);
  }
  ngOnInit() {
  }
}
