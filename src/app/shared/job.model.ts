export class Job {
  public jobid: string;
  public customer: string;
  public jobtype: string;
  public instructions: string;
  public status: string;
  public courier: string;

  constructor(
    jobid: string,
    customer: string,
    jobtype: string,
    instructions: string,
    status: string,
    courier: string,
  ){
    this.jobid = jobid;
    this.customer = customer;
    this.jobtype = jobtype;
    this.instructions = instructions;
    this.status = status;
    this.courier = courier;
  }
}
