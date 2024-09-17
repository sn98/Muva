import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-header',
  templateUrl: './info-header.component.html',
  styleUrls: ['./info-header.component.scss'],
})
export class InfoHeaderComponent implements OnInit {

  constructor(private location:Location) { }

  goback(): void {
    this.location.back()
  }

  ngOnInit() {}

}
