import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {

  selectedSegment = 'General Settings';
  segmentTabs: string[] = ['General Settings', 'Job Settings', 'Rates'];
  segmentChosen(name){
    this.selectedSegment = name;
  }

  constructor() { }

  ngOnInit() {}

}
