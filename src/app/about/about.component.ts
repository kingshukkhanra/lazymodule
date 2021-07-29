import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    console.log("About Component is loaded ");
  }
  ngOnDestroy():void {
    console.log("About component is exited ");
  }

}
