import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-cp-header',
  templateUrl: './info-cp-header.component.html',
  styleUrls: ['./info-cp-header.component.scss'],
})
export class InfoCpHeaderComponent implements OnInit {

  constructor(private location:Location) { }

  goback(): void {
    this.location.back()
  }


  ngOnInit() {}

}
