import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const Routes : Routes = [
    {path:'',component:AdminComponent,pathMatch:'full',children:[
    {path:'login',component:LoginComponent},
    {path:'dashboard',component:DashboardComponent}
  ]},
];

@NgModule({
  declarations: [
    AdminComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(Routes)
  ]
})
export class LazyModule { 

  constructor(){
    console.log("Admin Component Loaded ");
  }
}
