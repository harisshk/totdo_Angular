import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ByDateComponent } from './view-tasks/by-date/by-date.component';
import { ByStatusComponent } from './view-tasks/by-status/by-status.component';
import { ViewTasksComponent } from './view-tasks/view-tasks.component'

const routes: Routes = [
  {path:'Home',component:HomeComponent},
  {path:'ViewTasks',component:ViewTasksComponent,
  children:[{path:'ByDate',component:ByDateComponent},
{path:'ByStatus',component:ByStatusComponent}]},
{path:"Login",component:LoginComponent},


  { path:'**', redirectTo:'Home',pathMatch: 'full'},
  { path:'', redirectTo:'Home',pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
