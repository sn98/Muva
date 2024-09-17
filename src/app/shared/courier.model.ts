export class Courier {
  public id: number;
  public name: string;
  public type: string;
  public email: string;
  public phoneNumber: string;
  public merchant: number;
  public location: string;
  public status: string;


  constructor(
    id: number,
    name: string,
    type: string,
    email: string,
    phoneNumber: string,
    merchant: number,
    location: string,
    status: string,
  )
  {
    this.id =id ;
    this.name = name;
    this.type = type;
    this.merchant = merchant;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.status = status;
    this.location = location;
  }
}
