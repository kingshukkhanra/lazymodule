import { DashboardComponent } from './lazy/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PaageNotFoundComponent } from './paage-not-found/paage-not-found.component';
import { LoginComponent } from './lazy/login/login.component';
import { AdminComponent } from './lazy/admin/admin.component';

//All routes for this application is defined here 
const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'lazy',loadChildren:()=>import('./lazy/lazy.module').then(m=>m.LazyModule)},
  // {path:'**',component:PaageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
