import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onSendL(){
    this.router.navigate(['/lazy/login']);
  }
  onSendD(){
    this.router.navigate(['/lazy/dashboard'])
  }
}
