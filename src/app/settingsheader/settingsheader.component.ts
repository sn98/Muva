import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settingsheader',
  templateUrl: './settingsheader.component.html',
  styleUrls: ['./settingsheader.component.scss'],
})
export class SettingsheaderComponent implements OnInit {

  constructor(private location:Location) { }
  goback(): void {
    this.location.back()
  }
  ngOnInit() {}

}
