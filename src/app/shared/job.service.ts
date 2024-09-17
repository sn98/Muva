import { Injectable } from "@angular/core";
import { Job } from "./job.model";
@Injectable({
  providedIn: 'root'
})
export class JobsService {
  private jobs:Job[] = [
    {jobid: "0001", customer: "user1", jobtype: "JPS", instructions:"instruction one and two", status:"Assigned", courier:"Ben"},
    {jobid: "0002", customer: "user2", jobtype: "Tax Office: Car Stuff", instructions:"instruction one and two", status:"Assigned", courier:"John"},
    {jobid: "0003", customer: "user3", jobtype: "Document Pick Up", instructions:"instruction one and two", status:"Unassigned", courier:"None"},
    {jobid: "0004", customer: "user4", jobtype: "Grocery Shopping", instructions:"instruction one and two", status:"Cancelled", courier:"Jude"},
    {jobid: "0005", customer: "user6", jobtype: "Food Delivery", instructions:"instruction one and two", status:"Completed", courier:"Sam"},
    {jobid: "0006", customer: "user7", jobtype: "Bill Payment", instructions:"instruction one and two", status:"Blocked", courier:"Mary"},
  ];

  statuses = [
    {status:'Assigned'},
    {status:'Unassigned'},
    {status:'Completed'},
    {status:'Cancelled'},
    {status:'Blocked'},
  ]

  Status(){
    return this.statuses;
  }
  getJobs(){
    return this.jobs;
  }

  getAJob(id:string){
    return {
      ...this.jobs.find(jid => {
        return jid.jobid === id;
      })
    };
  }



  updateJobs(id, courier, jstatus){
    const elementsIndex = this.jobs.findIndex(element => element.jobid == id );
    this.jobs[elementsIndex].courier = courier;
    this.jobs[elementsIndex].status = jstatus;
  }

  createJob(jobtype, jstatus, instructions, courier, customer){
    this.jobs.push({jobid: 'Icreate', customer: customer, jobtype:jobtype, instructions:instructions, status:jstatus, courier:courier})
  }

  getColors(status){
    switch (status) {
      case 'Assigned':
        return '#56CCDB';
      case 'Unassigned':
        return '#406078';
      case 'Cancelled':
        return '#BF0000';
      case 'Completed':
        return '#12863A';
      case 'Blocked':
        return '#CACECE';
    }
  }
}
